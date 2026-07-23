'use server'

const REQUIRED_FIELDS = ['name', 'email', 'message'] as const

export type ContactFormState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  fieldErrors?: Partial<Record<string, string>>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot — bots fill hidden fields
  if ((formData.get('company_website') as string)?.trim()) {
    // Return success silently — don't tip off the bot
    return { status: 'success', message: 'Thanks — your message has been received.' }
  }

  const fields = {
    name: String(formData.get('name') ?? '').trim(),
    email: String(formData.get('email') ?? '').trim(),
    phone: String(formData.get('phone') ?? '').trim(),
    company: String(formData.get('company') ?? '').trim(),
    interest: String(formData.get('interest') ?? '').trim(),
    message: String(formData.get('message') ?? '').trim(),
  }

  const fieldErrors: Record<string, string> = {}
  for (const key of REQUIRED_FIELDS) {
    if (!fields[key]) fieldErrors[key] = 'This field is required.'
  }
  if (fields.email && !EMAIL_RE.test(fields.email)) {
    fieldErrors.email = 'Please enter a valid email address.'
  }
  if (fields.message && fields.message.length < 10) {
    fieldErrors.message = 'Please write at least a sentence or two.'
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: 'error',
      message: 'Please correct the errors below and try again.',
      fieldErrors,
    }
  }

  // In production, forward to Resend / Formspree / an internal endpoint.
  // For now we log and simulate a successful send.
  console.info('[contact-form] new submission', fields)

  return {
    status: 'success',
    message:
      "Thanks — we've received your message. A Tech Alpha consultant will reach out within one business day.",
  }
}

'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react'
import { submitContactForm, type ContactFormState } from '@/app/actions/contact'
import { servicesFullDetail } from '@/content/services'
import { cn } from '@/lib/cn'

const initialState: ContactFormState = { status: 'idle' }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="group focus-visible:ring-brand focus-visible:ring-offset-canvas inline-flex h-12 items-center justify-center gap-2 rounded-pill bg-brand-gradient px-6 text-sm font-semibold text-[#12161F] transition duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60"
      style={{
        boxShadow: '0 12px 30px rgba(248,151,35,0.28), inset 0 1px 0 rgba(255,255,255,0.25)',
      }}
    >
      <span>{pending ? 'Sending…' : 'Send message'}</span>
      <ArrowRight
        className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5"
        strokeWidth={2.5}
        aria-hidden="true"
      />
    </button>
  )
}

type FieldProps = {
  name: string
  label: string
  type?: string
  required?: boolean
  autoComplete?: string
  error?: string
  as?: 'input' | 'textarea' | 'select'
  children?: React.ReactNode
  placeholder?: string
}

function Field({
  name,
  label,
  type = 'text',
  required = false,
  autoComplete,
  error,
  as = 'input',
  children,
  placeholder,
}: FieldProps) {
  const id = `field-${name}`
  const errId = `${id}-err`
  const baseCls = cn(
    'text-ink placeholder:text-ink-faint block w-full rounded-2xl border bg-white/[0.03] px-4 py-3 text-[15px] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas',
    error ? 'border-red-400/50' : 'border-hairline hover:border-white/20',
  )
  return (
    <div>
      <label htmlFor={id} className="text-ink-muted mb-2 block text-sm font-medium">
        {label} {required && <span className="text-brand" aria-hidden="true">*</span>}
      </label>
      {as === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          required={required}
          autoComplete={autoComplete}
          rows={6}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? errId : undefined}
          className={baseCls}
        />
      ) : as === 'select' ? (
        <select
          id={id}
          name={name}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errId : undefined}
          className={baseCls}
          defaultValue=""
        >
          {children}
        </select>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? errId : undefined}
          className={baseCls}
        />
      )}
      {error && (
        <p id={errId} className="mt-1.5 flex items-center gap-1.5 text-xs text-red-300">
          <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState)
  const errs = state.fieldErrors ?? {}

  if (state.status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="relative overflow-hidden rounded-[28px] p-10 text-center"
        style={{
          background:
            'linear-gradient(rgba(9,16,35,0.55), rgba(9,16,35,0.55)) padding-box, ' +
            'linear-gradient(135deg, rgba(120,170,255,0.35), rgba(248,151,35,0.22)) border-box',
          border: '1px solid transparent',
          backdropFilter: 'blur(22px) saturate(140%)',
          WebkitBackdropFilter: 'blur(22px) saturate(140%)',
        }}
      >
        <div className="text-brand-soft mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-brand/40 bg-brand/10">
          <CheckCircle2 className="h-7 w-7" strokeWidth={1.75} />
        </div>
        <h3 className="text-ink mt-6 text-2xl font-semibold">Message received</h3>
        <p className="text-ink-muted mx-auto mt-4 max-w-md text-[15px] leading-relaxed">
          {state.message}
        </p>
      </div>
    )
  }

  return (
    <form
      action={formAction}
      noValidate
      className="relative overflow-hidden rounded-[28px] p-8 sm:p-10"
      style={{
        background:
          'linear-gradient(rgba(9,16,35,0.35), rgba(9,16,35,0.35)) padding-box, ' +
          'linear-gradient(135deg, rgba(120,170,255,0.28), rgba(120,170,255,0.06) 55%, rgba(248,151,35,0.10)) border-box',
        border: '1px solid transparent',
        backdropFilter: 'blur(22px) saturate(140%)',
        WebkitBackdropFilter: 'blur(22px) saturate(140%)',
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name" label="Name" required autoComplete="name" error={errs.name} />
        <Field
          name="email"
          label="Email"
          type="email"
          required
          autoComplete="email"
          error={errs.email}
        />
        <Field
          name="phone"
          label="Phone"
          type="tel"
          autoComplete="tel"
          placeholder="Optional"
        />
        <Field
          name="company"
          label="Company"
          autoComplete="organization"
          placeholder="Optional"
        />
        <div className="sm:col-span-2">
          <Field name="interest" label="Service interest" as="select">
            <option value="" disabled>
              Select a service…
            </option>
            {servicesFullDetail.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="general">General inquiry</option>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field
            name="message"
            label="Message"
            as="textarea"
            required
            error={errs.message}
            placeholder="Tell us about your goals, timeline, and current environment…"
          />
        </div>
      </div>

      {/* Honeypot — hidden from real users */}
      <div aria-hidden="true" className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === 'error' && state.message && (
        <p role="alert" className="mt-6 flex items-center gap-2 text-sm text-red-300">
          <AlertCircle className="h-4 w-4" aria-hidden="true" />
          {state.message}
        </p>
      )}

      <div className="mt-8 flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-ink-faint text-xs">
          We reply within one business day. Fields marked <span className="text-brand">*</span> are required.
        </p>
        <SubmitButton />
      </div>
    </form>
  )
}

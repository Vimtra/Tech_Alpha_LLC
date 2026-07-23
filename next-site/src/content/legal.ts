const today = '2026-07-22'

export const privacyPolicy = {
  title: 'Privacy Policy',
  updated: today,
  intro:
    'Tech Alpha LLC (“Tech Alpha”, “we”, “our”, or “us”) respects your privacy. This policy explains what personal information we collect through techalphallc.com, how we use it, and the choices you have.',
  sections: [
    {
      heading: 'Information we collect',
      body: [
        'When you submit our contact form we collect the name, email address, phone number (optional), company name (optional), service interest, and message you provide.',
        'When you visit the site we may collect standard log information — IP address, browser type, pages viewed, and the referring URL — for security and analytics.',
      ],
    },
    {
      heading: 'How we use information',
      body: [
        'To respond to consultation requests, applications, and general inquiries.',
        'To operate, secure, and improve the site.',
        'To comply with legal obligations.',
      ],
    },
    {
      heading: 'Sharing information',
      body: [
        'We do not sell personal information. We share it only with service providers who help us run the site or respond to inquiries, and only under contractual confidentiality obligations.',
      ],
    },
    {
      heading: 'Your choices',
      body: [
        'You may request access to, correction of, or deletion of your personal information by emailing hr@techalphallc.com.',
        'You can control cookies through your browser settings and through the cookie banner on this site.',
      ],
    },
    {
      heading: 'Contact',
      body: [
        'Questions about this policy? Email hr@techalphallc.com or write to 1402 S Custer Road, Suite 604, McKinney, TX 75072.',
      ],
    },
  ],
} as const

export const termsOfService = {
  title: 'Terms of Service',
  updated: today,
  intro:
    'These terms govern your use of techalphallc.com. By using the site you agree to them.',
  sections: [
    {
      heading: 'Use of the site',
      body: [
        'You may use the site for lawful purposes. You may not attempt to disrupt the site or access it in an unauthorized manner.',
      ],
    },
    {
      heading: 'Intellectual property',
      body: [
        'The site content, branding, and code are owned by Tech Alpha LLC or its licensors. You may not reproduce, republish, or exploit them without written permission.',
      ],
    },
    {
      heading: 'Services',
      body: [
        'Descriptions of consulting services on the site are informational. Actual engagements are governed by a separate statement of work or master services agreement.',
      ],
    },
    {
      heading: 'Disclaimer & limitation of liability',
      body: [
        'The site is provided on an “as is” basis. To the fullest extent permitted by law, Tech Alpha is not liable for indirect, incidental, or consequential damages arising from your use of the site.',
      ],
    },
    {
      heading: 'Governing law',
      body: [
        'These terms are governed by the laws of the State of Texas. Disputes will be resolved in the courts of Collin County, Texas.',
      ],
    },
  ],
} as const

export const cookiePolicy = {
  title: 'Cookie Policy',
  updated: today,
  intro:
    'We use cookies and similar technologies to run the site securely, remember your preferences, and understand aggregate usage.',
  sections: [
    {
      heading: 'What are cookies',
      body: [
        'Cookies are small text files stored on your device. Similar technologies include local storage and pixel tags.',
      ],
    },
    {
      heading: 'Cookies we use',
      body: [
        'Strictly necessary: required for the site to function (for example, remembering your cookie consent choice).',
        'Analytics (optional): help us understand aggregate site usage. Disabled until you accept.',
      ],
    },
    {
      heading: 'Your choices',
      body: [
        'You can accept or decline optional cookies via the banner on your first visit. You can change your choice anytime by clearing the site cookies in your browser.',
        'Most browsers let you block or delete cookies from any site.',
      ],
    },
    {
      heading: 'Contact',
      body: [
        'Questions about cookies? Email hr@techalphallc.com.',
      ],
    },
  ],
} as const

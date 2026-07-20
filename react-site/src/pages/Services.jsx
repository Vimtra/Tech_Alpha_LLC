import { services } from '../data/siteContent'

function Services() {
  return (
    <div className="space-y-10">
      <header className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-2xl shadow-slate-200/80 lg:p-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.24em] text-[#F89723]">Our Services</p>
          <h1 className="text-4xl font-semibold text-[#111827] sm:text-5xl">Legacy services content, rebuilt for React.</h1>
          <p className="max-w-3xl text-base leading-8 text-[#475569]">
            Tech Alpha combines cloud engineering, DevOps practices, big data, application development, business analysis and QA automation to support enterprises through migration, modernization and ongoing operations.
          </p>
        </div>
      </header>

      <div className="grid gap-6">
        {services.map((service) => (
          <article key={service.title} className="rounded-3xl border border-[#E5E7EB] bg-white p-7 shadow-sm shadow-slate-200/70">
            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F89723]">Capability</p>
                <h2 className="mt-3 text-2xl font-semibold text-[#111827]">{service.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#475569]">{service.summary}</p>
              </div>
              <div className="space-y-5">
                {service.details.map((detail) => (
                  <p key={detail} className="text-sm leading-7 text-[#475569]">{detail}</p>
                ))}
                <ul className="grid gap-3 sm:grid-cols-2">
                  {service.bullets.map((item) => (
                    <li key={item} className="rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] p-4 text-sm leading-6 text-[#64748B]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Services

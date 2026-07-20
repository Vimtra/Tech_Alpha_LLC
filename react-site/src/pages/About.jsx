import { companyOverview, services } from '../data/siteContent'

function About() {
  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-2xl shadow-slate-200/80 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.24em] text-[#F89723]">About Tech Alpha</p>
            <h1 className="text-4xl font-semibold text-[#111827] sm:text-5xl">
              We are a DevOps, cloud computing and consulting company.
            </h1>
            <p className="text-base leading-8 text-[#475569]">{companyOverview.about}</p>
          </div>
          <div className="rounded-[2rem] border border-[#E5E7EB] bg-[#FAFAFA] p-6">
            <h2 className="text-2xl font-semibold text-[#111827]">What we do</h2>
            <div className="mt-5 grid gap-3">
              {services.map((service) => (
                <div key={service.title} className="rounded-2xl border border-[#E5E7EB] bg-white p-4">
                  <p className="font-semibold text-[#111827]">{service.title}</p>
                  <p className="mt-1 text-sm leading-6 text-[#64748B]">{service.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {[
          ['Our Mission', companyOverview.mission],
          ['Our Vision', companyOverview.vision],
          ['Our Culture', companyOverview.culture],
        ].map(([title, text]) => (
          <article key={title} className="rounded-3xl border border-[#E5E7EB] bg-white p-7 shadow-sm shadow-slate-200/70">
            <h2 className="text-xl font-semibold text-[#111827]">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#64748B]">{text}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default About

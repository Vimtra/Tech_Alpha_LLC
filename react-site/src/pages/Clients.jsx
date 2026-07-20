import { clients } from '../data/siteContent'

function Clients() {
  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-2xl shadow-slate-200/80 lg:p-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.24em] text-[#F89723]">Clients</p>
          <h1 className="text-4xl font-semibold text-[#111827] sm:text-5xl">Trusted by leading organizations.</h1>
          <p className="max-w-3xl text-base leading-8 text-[#475569]">
            Legacy client content has been added from the old website, including the organizations and services Tech Alpha supported across finance, biotechnology, healthcare, hospitality, automotive, aviation and retail.
          </p>
        </div>
      </section>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {clients.map((client) => (
          <article key={client.name} className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm shadow-slate-200/70">
            <h2 className="text-lg font-semibold text-[#111827]">{client.name}</h2>
            <p className="mt-3 text-sm leading-7 text-[#64748B]">{client.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Clients

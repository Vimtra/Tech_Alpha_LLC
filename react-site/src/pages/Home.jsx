import Hero from '../components/home/Hero'
import Container from '../components/ui/Container'
import { services } from '../data/siteContent'

function Home() {
  return (
    <div>
      <Hero />

      {/* NOTE: legacy section — redesigned in a later pass, left unchanged for now */}
      <Container>
        <section className="grid gap-6 py-8 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <article key={service.title} className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm shadow-slate-200/70">
              <h2 className="text-xl font-semibold text-[#111827]">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#64748B]">{service.summary}</p>
            </article>
          ))}
        </section>
      </Container>
    </div>
  )
}

export default Home

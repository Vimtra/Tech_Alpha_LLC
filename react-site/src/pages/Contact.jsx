import { contactInfo, services } from '../data/siteContent'

function Contact() {
  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-2xl shadow-slate-200/80 lg:p-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.24em] text-[#F89723]">Contact</p>
          <h1 className="text-4xl font-semibold text-[#111827] sm:text-5xl">Get in touch with Tech Alpha.</h1>
          <p className="max-w-3xl text-base leading-8 text-[#475569]">
            Please contact us using the information below. For additional information on our management consulting services, cloud migration, DevOps automation, IDC migration, managed ERP application services, application optimisation, SAP services, staffing or enterprise support needs, visit the appropriate page on our site or send us a message.
          </p>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm shadow-slate-200/70">
          <h2 className="text-2xl font-semibold text-[#111827]">Contact details</h2>
          <ul className="mt-6 space-y-4 text-sm text-[#475569]">
            <li><span className="block font-semibold text-[#111827]">Email</span>{contactInfo.email}</li>
            <li><span className="block font-semibold text-[#111827]">Phone</span>{contactInfo.phone}</li>
            <li><span className="block font-semibold text-[#111827]">US Office</span>{contactInfo.address}</li>
          </ul>
          <div className="mt-8 rounded-3xl bg-[#FAFAFA] p-5">
            <h3 className="font-semibold text-[#111827]">Services include</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {services.map((service) => (
                <span key={service.title} className="rounded-full border border-[#E5E7EB] bg-white px-3 py-1 text-xs font-semibold text-[#64748B]">
                  {service.title}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm shadow-slate-200/70">
          <h2 className="text-2xl font-semibold text-[#111827]">Send us a message</h2>
          <form className="mt-6 space-y-4 text-sm text-[#475569]">
            <div>
              <label className="block font-semibold text-[#111827]">Name</label>
              <input className="mt-2 w-full rounded-3xl border border-[#E5E7EB] bg-white px-4 py-3 text-[#111827] outline-none focus:border-[#F89723] focus:ring-2 focus:ring-[#F89723]/20" />
            </div>
            <div>
              <label className="block font-semibold text-[#111827]">Email</label>
              <input className="mt-2 w-full rounded-3xl border border-[#E5E7EB] bg-white px-4 py-3 text-[#111827] outline-none focus:border-[#F89723] focus:ring-2 focus:ring-[#F89723]/20" />
            </div>
            <div>
              <label className="block font-semibold text-[#111827]">Phone number</label>
              <input className="mt-2 w-full rounded-3xl border border-[#E5E7EB] bg-white px-4 py-3 text-[#111827] outline-none focus:border-[#F89723] focus:ring-2 focus:ring-[#F89723]/20" />
            </div>
            <div>
              <label className="block font-semibold text-[#111827]">Message</label>
              <textarea className="mt-2 w-full rounded-3xl border border-[#E5E7EB] bg-white px-4 py-3 text-[#111827] outline-none focus:border-[#F89723] focus:ring-2 focus:ring-[#F89723]/20" rows="5" />
            </div>
            <button className="inline-flex items-center justify-center rounded-full bg-[#F89723] px-6 py-3 text-sm font-semibold text-[#111827] transition hover:bg-[#FFAA3D]" type="button">
              Send message
            </button>
          </form>
        </div>
      </div>

      <section className="overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-sm shadow-slate-200/70">
        <iframe
          title="Tech Alpha office map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.3036204476366!2d-71.21095378467355!3d42.48509737917867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e39e312212749d%3A0x53ba204c5b431a2d!2s1402%20S%20Custer%20Road%20Suite%20604%2C%20McKinney%2C%20TX%2075072%2C%20USA!5e0!3m2!1sen!2sin!4v1606631926930!5m2!1sen!2sin"
          className="h-[360px] w-full"
          loading="lazy"
          allowFullScreen
        />
      </section>
    </div>
  )
}

export default Contact


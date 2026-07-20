import { jobs, referralProgram } from '../data/siteContent'

function Careers() {
  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-2xl shadow-slate-200/80 lg:p-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.24em] text-[#F89723]">Careers</p>
          <h1 className="text-4xl font-semibold text-[#111827] sm:text-5xl">Career and job posting content from the old website.</h1>
          <p className="max-w-3xl text-base leading-8 text-[#475569]">
            Current and legacy job posting details have been brought into the React site, including DevOps Engineer, Software QA Engineer, Programmer Analyst, Systems Engineer, Validation Engineer and the employee referral program.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-[#E5E7EB] bg-white p-7 shadow-sm shadow-slate-200/70">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F89723]">Referral</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#111827]">{referralProgram.title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#64748B]">{referralProgram.description}</p>
            <div className="mt-4 grid gap-3 text-sm leading-7 text-[#64748B] lg:grid-cols-3">
              <p><span className="block font-semibold text-[#111827]">Eligibility</span>{referralProgram.eligibility}</p>
              <p><span className="block font-semibold text-[#111827]">Incentives Offered</span>{referralProgram.incentives}</p>
              <p><span className="block font-semibold text-[#111827]">Referral Procedure</span>{referralProgram.procedure}</p>
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#F89723]">Date of Posting: {referralProgram.postingDate}</p>
          </div>
          <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#F89723] px-6 py-3 text-sm font-semibold text-[#111827] transition hover:bg-[#FFAA3D]">
            Refer / Apply
          </a>
        </div>
      </section>

      <div className="grid gap-6">
        {jobs.map((job) => (
          <article key={job.title} className="rounded-3xl border border-[#E5E7EB] bg-white p-7 shadow-sm shadow-slate-200/70">
            <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F89723]">Position</p>
                <h2 className="mt-3 text-2xl font-semibold text-[#111827]">{job.title}</h2>
                <dl className="mt-5 space-y-3 text-sm text-[#64748B]">
                  <div><dt className="font-semibold text-[#111827]">Type</dt><dd>{job.type}</dd></div>
                  <div><dt className="font-semibold text-[#111827]">Salary</dt><dd>{job.salary}</dd></div>
                  <div><dt className="font-semibold text-[#111827]">Date of Posting</dt><dd>{job.postingDate}</dd></div>
                  <div><dt className="font-semibold text-[#111827]">Number of Postings</dt><dd>{job.openings}</dd></div>
                  <div><dt className="font-semibold text-[#111827]">Location</dt><dd>{job.location}</dd></div>
                </dl>
              </div>
              <div className="space-y-5">
                <div>
                  <h3 className="font-semibold text-[#111827]">Job Duties</h3>
                  <p className="mt-2 text-sm leading-7 text-[#64748B]">{job.duties}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#111827]">Education Required</h3>
                  <p className="mt-2 text-sm leading-7 text-[#64748B]">{job.education}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#111827]">Experience Required</h3>
                  <p className="mt-2 text-sm leading-7 text-[#64748B]">{job.experience}</p>
                </div>
                <a href="/contact" className="inline-flex items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-5 py-2.5 text-sm font-semibold text-[#111827] transition hover:border-[#F89723]/50 hover:text-[#F89723]">
                  Apply Now
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Careers


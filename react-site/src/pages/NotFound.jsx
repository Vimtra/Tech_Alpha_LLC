function NotFound() {
  return (
    <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-12 text-center shadow-2xl shadow-slate-200/80">
      <h1 className="text-4xl font-semibold text-[#111827]">Page not found</h1>
      <p className="mt-4 text-sm leading-7 text-[#64748B]">
        The page you are looking for does not exist. Use the navigation above to return to the site.
      </p>
      <a href="/" className="mt-8 inline-flex rounded-full bg-[#F89723] px-6 py-3 text-sm font-semibold text-[#111827] transition hover:bg-[#FFAA3D]">
        Back to home
      </a>
    </div>
  )
}

export default NotFound



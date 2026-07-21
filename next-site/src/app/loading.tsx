export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center px-6"
    >
      <span className="sr-only">Loading…</span>
      <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
      <span className="ml-2 h-2 w-2 animate-pulse rounded-full bg-brand [animation-delay:120ms]" />
      <span className="ml-2 h-2 w-2 animate-pulse rounded-full bg-brand [animation-delay:240ms]" />
    </div>
  )
}

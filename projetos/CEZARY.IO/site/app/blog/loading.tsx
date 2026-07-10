export default function LoadingBlog() {
  return (
    <section>
      <div className="mx-auto max-w-5xl animate-pulse px-6 py-20 sm:py-28">
        <div className="bg-bg-card h-3 w-16 rounded-sm" />
        <div className="bg-bg-card mt-4 h-10 w-2/3 rounded-sm" />
        <div className="border-border mt-12 space-y-6 border-t pt-6">
          {[0, 1, 2].map((i) => (
            <div key={i} className="border-border space-y-2 border-b pb-6">
              <div className="bg-bg-card h-3 w-24 rounded-sm" />
              <div className="bg-bg-card h-5 w-1/2 rounded-sm" />
              <div className="bg-bg-card h-4 w-3/4 rounded-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

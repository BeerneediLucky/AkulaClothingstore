export default function OwnerSpotlight() {
  return (
    <section className="container max-w-6xl py-10 md:py-14">
      <div className="rounded-2xl border bg-white p-6 md:p-8 grid md:grid-cols-[160px_1fr] gap-6 items-center">
        <img
          src="/people/uncle.jpg"
          alt="Store owner portrait"
          className="w-40 h-40 rounded-full object-cover border"
          loading="lazy"
          decoding="async"
        />
        <div>
          <h3 className="text-xl font-semibold">Meet the Owner</h3>
          <p className="text-neutral-600 mt-1">
            <strong>Mr. Akula Chinna (ఆకుల చిన్నా)</strong> has been curating timeless styles and everyday essentials for the community.
            Visit our store to explore handpicked shirts, denim, and seasonal edits.
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            <a className="px-3 py-1 rounded-full border" href="tel:+91 9666764565">Call</a>
            <a className="px-3 py-1 rounded-full border" href="mailto:premchandakula18@gmail.com">Email</a>
            {/* <a className="px-3 py-1 rounded-full border" href="https://instagram.com/yourhandle" target="_blank">Instagram</a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

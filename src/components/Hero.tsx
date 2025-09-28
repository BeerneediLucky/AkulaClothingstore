export default function Hero(){
  return (
    <section className="relative">
      <div className="container max-w-6xl py-12 md:py-20 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">Elevate Everyday Style</h1>
          <p className="mt-3 text-neutral-600">A clean gallery to showcase your new arrivals and bestsellers. No checkout here—just beautiful images and store info.</p>
          <div className="mt-5 flex gap-3">
            {/* <a href="#lookbook" className="px-4 py-2 rounded-xl bg-black text-white">View Lookbook</a> */}
            <a href="#contact" className="px-4 py-2 rounded-xl border">Contact Us</a>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[16/10]">
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80&auto=format&fit=crop" alt="Store collage" className="w-full h-full object-cover"/>
        </div>
      </div>
    </section>
  )
}

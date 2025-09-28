export default function StoreInfo(){
  return (
    <section className="container max-w-6xl py-10 md:py-14">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border bg-white p-5">
          <h3 className="font-semibold">Visit Us</h3>
          <p className="text-neutral-600 mt-2"><strong>పి.కొత్తపల్లి (బస్టాండ్), పెనగలూరు మండలం, రాజంపేట, అన్నమయ్య జిల్లా</strong><br/>Mon–Sun: 6:00AM–09:30PM</p>
        </div>
        <div className="rounded-2xl border bg-white p-5" id="contact">
          <h3 className="font-semibold">Contact</h3>
          <p className="text-neutral-600 mt-2">+91 9666764565<br/>premchandakula18@gmail.com</p>
          {/* <div className="mt-3 flex gap-2">
            <a className="text-sm border rounded-full px-3 py-1" href="#">Instagram</a>
            <a className="text-sm border rounded-full px-3 py-1" href="#">Facebook</a>
          </div> */}
        </div>
        <div className="rounded-2xl border bg-white p-5">
          <h3 className="font-semibold">How to Use</h3>
          <p className="text-neutral-600 mt-2">Filter by category, search by name, and share the link with customers.</p>
        </div>
      </div>
    </section>
  )
}

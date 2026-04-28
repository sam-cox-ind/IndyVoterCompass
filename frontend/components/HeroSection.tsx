import AddressLookupForm from "@/components/AddressLookupForm";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-white to-stone-50">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Indiana voter education
          </p>

          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-neutral-950 md:text-6xl">
            Find exactly what’s on your ballot.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
            Enter your address to see the offices, candidates, and election
            information connected to where you live.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700">
              No account required
            </span>
            <span className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700">
              Indiana-focused
            </span>
            <span className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700">
              Simple and clear
            </span>
          </div>
        </div>

        <div id="address-lookup" className="flex items-center">
          <div className="w-full rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
              Start with your address
            </h2>

            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Your address is used to find the races and offices tied to your
              location.
            </p>

            <div className="mt-6">
              <AddressLookupForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
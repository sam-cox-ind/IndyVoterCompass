import AddressLookupForm from "@/components/AddressLookupForm";

export default function HeroSection() {
  return (
    <section className="ivc-hero-bg">
      <div className="ivc-container grid gap-12 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center">
          <p className="ivc-eyebrow-light mb-4">Indiana voter education</p>

          <h1 className="max-w-xl text-4xl font-bold tracking-tight md:text-6xl">
            Find exactly what’s on your ballot.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Enter your address to see the offices, candidates, and election
            information connected to where you live.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="ivc-badge">No account required</span>
            <span className="ivc-badge">Indiana-focused</span>
            <span className="ivc-badge">Simple and clear</span>
          </div>
        </div>

        <div id="address-lookup" className="flex items-center">
          <div className="ivc-hero-card w-full p-6 md:p-8">
            <span className="ivc-badge-yellow">Start here</span>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
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
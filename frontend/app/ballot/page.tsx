type BallotPageProps = {
  searchParams: Promise<{
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
  }>;
};

export default async function BallotPage({ searchParams }: BallotPageProps) {
  const params = await searchParams;

  return (
    <main className="min-h-screen bg-white px-6 py-12 text-neutral-900">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-sm text-neutral-600 hover:text-black">
          ← Back to home
        </a>

        <h1 className="mt-4 text-3xl font-bold">Your ballot lookup</h1>

        <p className="mt-3 text-neutral-600">
          This page is a placeholder. Later, it will call your FastAPI backend
          and render live ballot information.
        </p>

        <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
          <h2 className="text-lg font-semibold">Submitted address</h2>

          <div className="mt-4 space-y-2 text-sm text-neutral-700">
            <p>
              <span className="font-medium">Street:</span>{" "}
              {params.street || "—"}
            </p>
            <p>
              <span className="font-medium">City:</span> {params.city || "—"}
            </p>
            <p>
              <span className="font-medium">State:</span> {params.state || "—"}
            </p>
            <p>
              <span className="font-medium">ZIP:</span> {params.zip || "—"}
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-dashed border-neutral-300 p-6">
          <h2 className="text-lg font-semibold">Next backend step</h2>
          <p className="mt-2 text-sm text-neutral-600">
            Replace this placeholder with a request to your backend lookup route,
            then render offices, candidates, and election information here.
          </p>
        </div>
      </div>
    </main>
  );
}
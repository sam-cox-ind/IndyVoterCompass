"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AddressLookupForm() {
  const router = useRouter();

  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("IN");
  const [zip, setZip] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!street.trim() || !city.trim() || !state.trim() || !zip.trim()) {
      setError("Please fill out all address fields.");
      return;
    }

    setLoading(true);

    const params = new URLSearchParams({
      street: street.trim(),
      city: city.trim(),
      state: state.trim(),
      zip: zip.trim(),
    });

    router.push(`/ballot?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="street" className="mb-1 block text-sm font-medium">
          Street address
        </label>
        <input
          id="street"
          type="text"
          placeholder="123 Main St"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 outline-none transition focus:border-black"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_110px_140px]">
        <div>
          <label htmlFor="city" className="mb-1 block text-sm font-medium">
            City
          </label>
          <input
            id="city"
            type="text"
            placeholder="Indianapolis"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 outline-none transition focus:border-black"
          />
        </div>

        <div>
          <label htmlFor="state" className="mb-1 block text-sm font-medium">
            State
          </label>
          <input
            id="state"
            type="text"
            placeholder="IN"
            value={state}
            onChange={(e) => setState(e.target.value.toUpperCase())}
            maxLength={2}
            className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 outline-none transition focus:border-black"
          />
        </div>

        <div>
          <label htmlFor="zip" className="mb-1 block text-sm font-medium">
            ZIP
          </label>
          <input
            id="zip"
            type="text"
            placeholder="46204"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 outline-none transition focus:border-black"
          />
        </div>
      </div>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-black px-4 py-3 font-medium text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-400"
      >
        {loading ? "Loading your ballot..." : "See My Ballot"}
      </button>

      <p className="text-xs text-neutral-500">
        This is an early version of the lookup flow. The results page can be
        wired to your backend next.
      </p>
    </form>
  );
}
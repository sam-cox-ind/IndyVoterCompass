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
        <label htmlFor="street" className="input-label">
          Street address
        </label>
        <input
          id="street"
          type="text"
          placeholder="123 Main St"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          className="input-field"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_110px_140px]">
        <div>
          <label htmlFor="city" className="input-label">
            City
          </label>
          <input
            id="city"
            type="text"
            placeholder="Indianapolis"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="state" className="input-label">
            State
          </label>
          <input
            id="state"
            type="text"
            placeholder="IN"
            value={state}
            onChange={(e) => setState(e.target.value.toUpperCase())}
            maxLength={2}
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="zip" className="input-label">
            ZIP
          </label>
          <input
            id="zip"
            type="text"
            placeholder="46204"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="input-field"
          />
        </div>
      </div>

      {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}

      <button type="submit" disabled={loading} className="primary-button w-full">
        {loading ? "Loading your ballot..." : "See My Ballot"}
      </button>

      <p className="fine-print">
        This is an early version of the lookup flow. The results page can be
        wired to your backend next.
      </p>
    </form>
  );
}
"use client";

import { useState } from "react";

export default function AddressLookupForm() {
  const [address, setAddress] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!address.trim()) {
      return;
    }

    const encodedAddress = encodeURIComponent(address.trim());

    window.location.href = `/ballot?address=${encodedAddress}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="address"
          className="mb-2 block text-sm font-semibold text-neutral-800"
        >
          Home address
        </label>

        <input
          id="address"
          name="address"
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          placeholder="123 Main St, Indianapolis, IN"
          className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
        />
      </div>

      <button type="submit" className="ivc-button-primary w-full px-5 py-3 text-sm">
        Find My Ballot
      </button>

      <p className="text-xs leading-5 text-neutral-500">
        This will eventually connect to your address lookup and ballot data
        feature.
      </p>
    </form>
  );
}
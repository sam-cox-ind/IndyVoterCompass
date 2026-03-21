"use client";

import { useEffect, useState } from "react";
import { getElectionData } from "../lib/api";

type ElectionResult = {
  candidate: string;
  votes: number;
};

type ElectionData = {
  year: number;
  state: string;
  results: ElectionResult[];
};

export default function Home() {
  const [data, setData] = useState<ElectionData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getElectionData()
      .then((response) => setData(response))
      .catch(() => setError("Failed to load election data"));
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Indiana Voting Data</h1>

      {!data && !error && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {data && (
        <div className="bg-gray-100 p-4 rounded">
          <p><strong>Year:</strong> {data.year}</p>
          <p><strong>State:</strong> {data.state}</p>

          <ul className="mt-2">
            {data.results.map((result, index) => (
              <li key={index}>
                {result.candidate}: {result.votes.toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
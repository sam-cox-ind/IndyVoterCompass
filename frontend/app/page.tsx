"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:8000/election-data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">
        Indiana Voting Data
      </h1>

      {!data && <p>Loading...</p>}

      {data && (
        <div className="bg-gray-100 p-4 rounded">
          <p><strong>Year:</strong> {data.year}</p>
          <p><strong>State:</strong> {data.state}</p>

          <ul className="mt-2">
            {data.results.map((r: any, i: number) => (
              <li key={i}>
                {r.candidate}: {r.votes.toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
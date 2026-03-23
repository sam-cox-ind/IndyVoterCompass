export type ElectionResult = {
  candidate: string;
  votes: number;
};

export type ElectionData = {
  year: number;
  state: string;
  results: ElectionResult[];
};

export async function getElectionData(): Promise<ElectionData> {
  const res = await fetch("http://localhost:8000/election-data");

  if (!res.ok) {
    throw new Error("Failed to fetch election data");
  }

  return res.json();
}
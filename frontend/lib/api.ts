export async function getElectionData() {
  const res = await fetch("http://localhost:8000/election-data");

  if (!res.ok) {
    throw new Error("Failed to fetch election data");
  }

  return res.json();
}
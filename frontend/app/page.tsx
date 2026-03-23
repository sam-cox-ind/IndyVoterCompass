"use client";

import { useQuery } from "@tanstack/react-query";
import ReactECharts from "echarts-for-react";
import { getElectionData } from "../lib/api";

export default function Home() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["election-data"],
    queryFn: getElectionData,
  });

  if (isLoading) {
    return (
      <main className="p-10">
        <h1 className="text-2xl font-bold mb-4">Indiana Voting Data</h1>
        <p>Loading...</p>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="p-10">
        <h1 className="text-2xl font-bold mb-4">Indiana Voting Data</h1>
        <p>{error instanceof Error ? error.message : "Something went wrong"}</p>
      </main>
    );
  }

  const chartOption = {
    title: {
      text: `${data.state} Presidential Vote Totals (${data.year})`,
    },
    tooltip: {},
    xAxis: {
      type: "category",
      data: data.results.map((result) => result.candidate),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: data.results.map((result) => result.votes),
        type: "bar",
      },
    ],
  };

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Indiana Voting Data</h1>

      <div className="bg-gray-100 p-4 rounded mb-6">
        <p>
          <strong>Year:</strong> {data.year}
        </p>
        <p>
          <strong>State:</strong> {data.state}
        </p>

        <ul className="mt-2">
          {data.results.map((result, index) => (
            <li key={index}>
              {result.candidate}: {result.votes.toLocaleString()}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <ReactECharts option={chartOption} style={{ height: "400px", width: "100%" }} />
      </div>
    </main>
  );
}
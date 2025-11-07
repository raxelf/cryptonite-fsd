"use client";

import { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
);

const LineChart = ({
  color,
  chartData,
}: {
  color: string;
  chartData: number[];
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    new Chart(canvasRef.current, {
      type: "line",
      data: {
        labels: chartData.map((_, i) => i.toString()),
        datasets: [
          {
            data: chartData,
            borderColor: color,
            borderWidth: 2,
            backgroundColor: "transparent",
            pointRadius: 0,
            tension: 0.4,
          },
        ],
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          x: { display: false },
          y: { display: false },
        },
        elements: {
          line: { fill: false },
        },
        responsive: false,
      },
    });
  }, [chartData, color]);

  return (
    <div className="rounded-xl p-4 w-64 shadow relative">
      <div>
        <canvas ref={canvasRef} width={200} height={50} />
      </div>
    </div>
  );
};

export default LineChart;

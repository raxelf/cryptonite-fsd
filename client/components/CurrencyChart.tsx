"use client";

import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useRef } from "react";

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const CurrencyChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    new Chart(canvasRef.current, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [60, 25, 20],
            backgroundColor: ["#129B28", "#DBD42B", "#38B5DC"],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
        },
      },
    });
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-32 h-32">
        <canvas ref={canvasRef} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-md font-bold text-white">55%</div>
          <div className="text-sm text-gray-400">Buy</div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyChart;

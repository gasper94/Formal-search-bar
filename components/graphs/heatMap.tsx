'use client'

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

// Components
const Chart = dynamic(
  () => import('react-apexcharts'),
  { ssr: false }
);

export const HeatmapChart = () => {
    const [options, _] = useState<ApexOptions>({
        chart: {
            type: 'heatmap',
            height: 160,
            width: 300,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            heatmap: {
                radius: 4, // Increase the corner radius for each box
            },
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#008FFB"],
        series: [
            {
                name: "Series 1",
                data: [
                    { x: 'W1', y: 22 },
                    { x: 'W2', y: 29 },
                    { x: 'W3', y: 13 },
                    { x: 'W4', y: 32 },
                    { x: 'W5', y: 15 },
                    { x: 'W6', y: 25 },
                    { x: 'W7', y: 35 },
                    { x: 'W8', y: 45 },
                    { x: 'W9', y: 20 },
                    { x: 'W10', y: 30 },
                    { x: 'W11', y: 10 },
                    { x: 'W12', y: 20 }
                ]
            },
            {
                name: "Series 2",
                data: [
                    { x: 'W1', y: 43 },
                    { x: 'W2', y: 43 },
                    { x: 'W3', y: 43 },
                    { x: 'W4', y: 43 },
                    { x: 'W5', y: 40 },
                    { x: 'W6', y: 30 },
                    { x: 'W7', y: 20 },
                    { x: 'W8', y: 10 },
                    { x: 'W9', y: 30 },
                    { x: 'W10', y: 20 },
                    { x: 'W11', y: 40 },
                    { x: 'W12', y: 30 }
                ]
            },
            {
                name: "Series 3",
                data: [
                    { x: 'W1', y: 43 },
                    { x: 'W2', y: 43 },
                    { x: 'W3', y: 43 },
                    { x: 'W4', y: 43 },
                    { x: 'W5', y: 40 },
                    { x: 'W6', y: 30 },
                    { x: 'W7', y: 20 },
                    { x: 'W8', y: 10 },
                    { x: 'W9', y: 30 },
                    { x: 'W10', y: 20 },
                    { x: 'W11', y: 40 },
                    { x: 'W12', y: 30 }
                ]
            },
            {
                name: "Series 4",
                data: [
                    { x: 'W1', y: 43 },
                    { x: 'W2', y: 43 },
                    { x: 'W3', y: 43 },
                    { x: 'W4', y: 43 },
                    { x: 'W5', y: 40 },
                    { x: 'W6', y: 30 },
                    { x: 'W7', y: 20 },
                    { x: 'W8', y: 10 },
                    { x: 'W9', y: 30 },
                    { x: 'W10', y: 20 },
                    { x: 'W11', y: 40 },
                    { x: 'W12', y: 30 }
                ]
            },
            {
                name: "Series 5",
                data: [
                    { x: 'W1', y: 43 },
                    { x: 'W2', y: 43 },
                    { x: 'W3', y: 43 },
                    { x: 'W4', y: 43 },
                    { x: 'W5', y: 40 },
                    { x: 'W6', y: 30 },
                    { x: 'W7', y: 20 },
                    { x: 'W8', y: 10 },
                    { x: 'W9', y: 30 },
                    { x: 'W10', y: 20 },
                    { x: 'W11', y: 40 },
                    { x: 'W12', y: 30 }
                ]
            }
        ],
        xaxis: {
            labels: {
                show: false
            },
            categories: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12'],
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        },
    });

    return (
        <div style={{marginLeft: -20, marginTop: -20 }}>
            <Chart options={options} series={options.series} type="heatmap" height={160} width={300} />
        </div>
    );
};

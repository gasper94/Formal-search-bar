'use client'

import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { ApexOptions } from 'apexcharts';

// Components
const Chart = dynamic(
  () => import('react-apexcharts'),
  { ssr: false }
);

export const BarChart = () => {
    const [options, setOptions] = useState<ApexOptions>({
        chart: {
            type: 'bar',
            height: 135,
            width: 280,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '70%', // Adjust width of bars
                // endingShape: 'flat', // Adjust shape of bars
                borderRadius: 2 
            },
        },
        dataLabels: {
            enabled: false // Disable data labels
        },
        xaxis: {
            categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13','14'],
            labels: {
                show: false // Hide x-axis labels
            },
            axisBorder: {
                show: false // Hide x-axis border
            },
            axisTicks: {
                show: false // Hide x-axis ticks
            }
        },
        yaxis: {
            labels: {
                show: false // Hide y-axis labels
            }
        },
        grid: {
            show: false // Hide grid lines
        },
        tooltip: {
            enabled: false // Disable tooltips
        },
        series: [{
            name: 'Sales',
            data: [14, 10, 12, 11, 6, 9, 8, 3, 6, 5, 4, 3, 2, 1]
        }],
    });

    return (
        <div style={{ width: '13rem', height: '13rem', marginLeft: -20, marginBottom: -60 }}>
            <Chart options={options} series={options.series} type="bar" height={135} width={280} />
        </div>
    );
};

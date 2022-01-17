import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import moment from 'moment'
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Hour = ({ hourly }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Chart.js Line Chart',
            },
        },
    };
    const labels = hourly.map(hour => {
        return moment.unix(hour.dt).format('h:mm a')
    })
    //   console.log(labels);
    const chartData = {
        labels,
        datasets: [
            {
                label: 'Temp (°C)',
                data: hourly.map(hour => {
                    return hour.temp
                }),
                borderColor: 'rgb(142, 94, 162)',
                backgroundColor: 'rgb(229, 229, 229)',
            },
            {
                label: 'Feel like (°C)',
                data: hourly.map(hour => {
                    return hour.feels_like
                }),
                borderColor: 'rgb(60, 168, 159)',
                backgroundColor: 'rgb(229, 229, 229)',
            }
        ]
    }
    return (
        <div className="bg-white p-2 mt-2 rounded-3">
            <Line options={options} data={chartData} />
        </div>
    )
}

export default Hour

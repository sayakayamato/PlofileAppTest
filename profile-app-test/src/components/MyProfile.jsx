import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
    );

    export const data = {
        labels: ['社交性', '独創性', 'エネルギー', '自立性', '行動力', '思考力'],
        datasets: [
        {
            label: '# of Votes',
            data: [1, 9, 3, 8, 5, 9],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },
    ],
    };

    const options = {
        // アスペクト比
        maintainAspectRatio: false,
        };

    export function MyProfile() {
    return (
        <div className='chart'>
        <Radar data={data}
        width={400} height={300} options={options}/>
        </div>
    )
    }
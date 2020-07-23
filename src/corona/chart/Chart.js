import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'
import styles from './Chart.module.css'
// import RC2 from 'react-chartjs2';


export default function Chart({ data, country }) {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData())
        }

        fetchApi()

    }, []);

    const lineChart = (
        dailyData.length ? <Line data={{
            datasets: [{
                data: dailyData.map((data) => data.confirmed),
                label: "infected",
                borderColor: "#3333ff",
                fill: true
            }, {
                data: dailyData.map((data) => data.deaths),
                label: "deaths",
                borderColor: "red",
                fill: true
            }],
            labels: dailyData.map((data) => data.date)
        }} /> : null
    );
    const barChart = (
        data.confirmed ? <Bar
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [
                    {
                        label: 'People',
                        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                        data: [data.confirmed.value, data.recovered.value, data.deaths.value],
                    },
                ],
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${country}` },
            }}
        /> : null
    );
    return (
        <div className={styles.container}>
            {country ? barChart : lineChart
            }
        </div >
    )
}



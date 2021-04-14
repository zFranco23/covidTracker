import React, { useEffect, useState } from 'react';
import {fetchDailyData} from '../../API';
import {Line,Bar} from 'react-chartjs-2'

import styles from './Chart.module.css';
import { CircularProgress } from '@material-ui/core';

function Chart({data:{confirmed,recovered,deaths},country}) {

    const [dailyData,setDailyData]=useState([]);

    useEffect(()=>{
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        };
        fetchAPI();
    },[]);
    const lineChart=(
        dailyData.length ?
        (
            <Line data={{
                labels:dailyData.map(({date}) => date),
                datasets:[
                    {
                        label:"Infected",
                        data:dailyData.map(({confirmed})=>confirmed),
                        fill:true,
                        borderColor:"#3333ff"                
                    },
                    {
                        label:"Deaths",
                        data:dailyData.map(({deaths})=>deaths),
                        fill:true,
                        borderColor:"red" ,
                        backgroundColor:"rgba(255,0,0,0.5)"
                    }
                ]
            }}/>
        ) : <CircularProgress size={100}/>

    );
    const barChart=(
        confirmed ? (
            <Bar
                data={{
                    labels:["Infected","Recovered","Deaths"],
                    datasets:[{
                        label:"People",
                        backgroundColor:[
                            "rgba(0,0,255,0.5)",
                            "rgba(0,255,0,0.5)",
                            "rgba(255,0,0,0.5)"
                        ], //Para cada uno
                        data:[confirmed.value,recovered.value,deaths.value]

                    }]
                }}
                options={{
                    legend:{display:false},
                    title:{display : true,text: `Current state in ${country}`}
                }}
            >
                
            </Bar>
        ) : <CircularProgress size="100"/>
    )
    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;

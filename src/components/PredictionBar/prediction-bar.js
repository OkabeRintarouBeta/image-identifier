import React from 'react';
import './prediction-bar.css'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);




const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  indexAxis: 'x',
};

const BarChart = (props) => {
    const {results}=props;
    let p_list=[];
    let name_list=[];
    results.forEach((element) => {
        p_list.push(element.probability);
        name_list.push(element.className);
    });
    
    let data = {
          labels: name_list,
          datasets: [
            {
              label: 'probability',
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
              ],
              borderWidth: 1,
              hoverBackgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
              ],
              hoverBorderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
              ],
              data: p_list,
            },
          ],
          
        };

  return (
      <Bar data={data} options={options}/>
  );
};

export default BarChart;

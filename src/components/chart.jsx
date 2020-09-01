import React from 'react';
import {Bar} from 'react-chartjs-2';

export default (props)=>{


  const state = {
    labels: [`timeWork`,`timeFlight`,`timeBlock`,`timeNight`,`timeBiologicalNight`],
    datasets: [
      { 
        barPercentage: 0.5,         
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        data: [1,2,3,4,5],
      }
    ]
  };
  return (
    <section 
    style={{margin:0, padding: `20px`,minHeight: `280px`}}>
      <Bar       
      data={state}
      options={{
        title:{
          display: true,
          text:'Сводные данные за текущий период',
          fontSize: 20
        },
        legend:{
          display:false, 
        },        
      }}
    />
    </section>
  );
};

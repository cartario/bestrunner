import React from 'react';
import {Bar} from 'react-chartjs-2';
import {getDateFormat} from '../utils';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 0;
  padding: 10px;
`;

export default ({filteredSessions})=>{
  const state = {
    labels: filteredSessions.map((session)=>getDateFormat(session.date)),
    datasets: [
      { 
        barPercentage: 0.5,         
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        data: filteredSessions.map((session)=>session.distance),
      }
    ]
  };
  return (
    <Wrapper>
      <Bar       
      data={state}
      options={{
        title:{
          display: true,
          text:'Статистика по километражу',
          fontSize: 20
        },
        legend:{
          display:false, 
        },        
      }}
    />
    </Wrapper>
  );
};

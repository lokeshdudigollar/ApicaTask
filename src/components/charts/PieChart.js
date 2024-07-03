import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Acquisition', value: 400 },
  { name: 'Purchase', value: 300 },
  { name: 'Retention', value: 300 },
];

const COLORS = ['#8884d8', '#8dd1e1', '#ffc658'];

const CustomPieChart = () => {
  return (
    <div style={{fontSize: '10px'}}>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        {data.map((entry, index) => (
          <div key={index} style={{ margin: '0 10px', textAlign: 'center'}}>
            <div
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: COLORS[index],
                display: 'inline-block',
               
              }}
            ></div>
            {entry.name}
          </div>
        ))}
      </div>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx="60%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        
      </PieChart>
    </div>
  );
};

export default CustomPieChart;

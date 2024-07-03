import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', value: 20 },
  { name: 'Tue', value: 40 },
  { name: 'Wed', value: 60 },
  { name: 'Thu', value: 80 },
  { name: 'Fri', value: 50 },
  { name: 'Sat', value: 70 },
  { name: 'Sun', value: 90 },
];



const CustomBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} barCategoryGap={50}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="rgba(85, 112, 241, 1)" background={{ fill: '#ddd' }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;

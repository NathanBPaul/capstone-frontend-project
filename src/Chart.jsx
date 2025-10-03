import { LineChart, Line } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

function Chart() {
    return (
        <LineChart width={600} height={300} data={data}>
    <Line dataKey="uv" />
  </LineChart>
    )
}

export default Chart;
import { Pie, PieChart, Tooltip } from 'recharts';

export default function PieChartDefaultIndex({ isAnimationActive = true }) {
  return (
    <PieChart width={400} height={400}>
      <Pie
        activeShape={{
          fill: 'Green',
        }}
        data={[
          { name: 'Page A', uv: 590 },
          { name: 'Page B', uv: 590 },
          { name: 'Page C', uv: 868 },
        ]}
        dataKey="uv"
        isAnimationActive={isAnimationActive}
      />
      <Tooltip defaultIndex={2} />
    </PieChart>
  );
}
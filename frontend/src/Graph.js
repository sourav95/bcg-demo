import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
  } from 'recharts';

export default function Graph(props) {
    return (
        <div>
          <>
                <h1 className="text-heading">
                    Number of policies bought per month
                </h1>
                <ResponsiveContainer width="100%" aspect={3}>
                    <LineChart data={props.graphData} margin={{ right: 40 }}>
                        <CartesianGrid />
                        <XAxis dataKey="month" 
                            interval={'preserveStartEnd'} />
                        <YAxis></YAxis>
                        <Legend />
                        <Tooltip />
                        <Line dataKey="policies"
                            stroke="black" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </>
        </div>
    )
}
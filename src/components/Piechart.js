import {Card, CardContent, Stack, Typography, Divider} from '@mui/material'
//import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import {PieChart} from '@mui/x-charts/PieChart'


const Piechart = (props) => {
    const {title, sx, data, colors} = props
    
    return (

      <Card sx={sx}>
        <CardContent>
          <Stack spacing={2} divider={<Divider/>}>
            <Typography variant='h6' component='div' style={{fontSize: '15px'}}>
              {title}
            </Typography>
            {/* <PieChart width={250} height={150}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={70}
            fill="#8884d8"
            label>
              {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
          </Pie>
          <Tooltip />
        </PieChart> */}
        <Stack direction='row' justifyContent='center'>
        <PieChart
        colors={colors}
  series={[
    {
      data,
    },
  ]}
  width={320}
  height={120}
/>
        </Stack>

      </Stack>
        </CardContent>
    </Card>
    )
}

export default Piechart
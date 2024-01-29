import {Card, CardContent, Stack, Typography, Divider} from '@mui/material'
import {LineChart} from '@mui/x-charts/LineChart'


const Linechart = (props) => {
    const {title, sx, data, seriesDataKey, axisDataKey} = props
    
    return (

      <Card sx={sx}>
        <CardContent>
          <Stack spacing={2} divider={<Divider/>}>
            <Typography variant='h6' component='div' style={{fontSize: '15px'}}>
              {title}
            </Typography>
        <Stack direction='row' alignItems='center' justifyContent='center'>
            <LineChart
                dataset={data}
                xAxis={[{scaleType: 'point', dataKey: axiDataKey, label: 'month'}]}
                series={[{dataKey: seriesDataKey, area: true, label: 'Total Crops'}]}
                width='100&'
                height={400}
            />
        </Stack>

      </Stack>
        </CardContent>
    </Card>
    )
}

export default Linechart
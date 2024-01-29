import {Card, CardContent, Stack, Typography, Divider} from '@mui/material'
import {LineChart} from '@mui/x-charts/LineChart'


const Linechart = (props) => {
    const {title, sx, data, colors} = props
    
    return (

      <Card sx={sx}>
        <CardContent>
          <Stack spacing={2} divider={<Divider/>}>
            <Typography variant='h6' component='div' style={{fontSize: '15px'}}>
              {title}
            </Typography>
        <Stack direction='row' alignItems='center' justifyContent='center'>
            <LineChart
                xAxis={[{scaleType: 'point', data: data['months'], label: 'month'}]}
                series={[{data: data['farmers'], area: true, label: 'Total Farmers'}]}
                width={550}
                height={350}
            />
        </Stack>

      </Stack>
        </CardContent>
    </Card>
    )
}

export default Linechart
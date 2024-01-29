import {Card, CardContent, Stack, Typography, Divider} from '@mui/material'
import {BarChart} from '@mui/x-charts/BarChart'


const Barchart = (props) => {
    const {title, sx, axisDataKey, seriesDataKey, data, layout, width, height} = props
    const sortedData = data.sort((a, b) => a[seriesDataKey] - b[seriesDataKey])
    
    return (
      <Card sx={sx}>
        <CardContent>
          <Stack spacing={2} divider={<Divider/>}>
            <Typography variant='h6' component='div' style={{fontSize: '15px'}}>
              {title}
            </Typography>
            <Stack direction='row' alignItems='center' justifyContent='center'>    
        {layout ? (
            <BarChart
            dataset={sortedData}
            xAxis={[{scaleType: 'band', dataKey: axisDataKey, categoryGapRatio: 0.5}]}
            series={[{dataKey: seriesDataKey, label: 'Total Farmers'}]}
            width={width}
            height={height}
        />
        ) : 
        <BarChart
            dataset={sortedData}
            yAxis={[{scaleType: 'band', dataKey: axisDataKey}]}
            series={[{dataKey: seriesDataKey, label: 'Total Farmers'}]}
            layout='horizontal'
            width={width}
            height={height}
            margin={{left: 120}}
        />
        }
        </Stack>
      </Stack>
        </CardContent>
    </Card>
    )
}

export default Barchart
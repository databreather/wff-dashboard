import {Card, CardContent, Stack, Typography, Divider} from '@mui/material'
import {BarChart} from '@mui/x-charts/BarChart'


const Barchart = ({title, sx, axisDataKey, seriesDataKey, data, layout, width, height, colors}) => {
    
    return (
      <Card sx={sx}>
        <CardContent>
          <Stack spacing={2} divider={<Divider/>}>
            <Typography variant='h6' fontSize='15px'>
              {title}
            </Typography>
            <Stack direction='row' alignItems='center' justifyContent='center' minWidth={width} minHeight={height}>    
        {layout ? (
          <BarChart
          colors={colors}
          dataset={data}
          yAxis={[{scaleType: 'band', dataKey: axisDataKey}]}
          series = {[...seriesDataKey.map((key, index) => {
            return {dataKey: key, label: key}
          })]}
          width={width}
          height={height}
          layout='horizontal'
          margin={{left: 120}}
          slotProps={{
            legend:{
              labelStyle:{
                fontSize: '12px'
              },
              itemMarkHeight: 5,
              itemMarkWidth: 5
            }
          }}
      />
        ) : <BarChart
        colors={colors}
        dataset={data}
        xAxis={[{scaleType: 'band', dataKey: axisDataKey, categoryGapRatio: 0.5}]}
        series = {[...seriesDataKey.map((key, index) => {
          return {dataKey: key, label: key}
        })]}
        width={width}
        height={height}
        margin={{left: 60}}
        slotProps={{
          legend:{
            labelStyle:{
              fontSize: '12px'
            },
            itemMarkHeight: 5,
            itemMarkWidth: 5
          }
        }}
        />
        
        }
        </Stack>
      </Stack>
        </CardContent>
    </Card>
    )
}

export default Barchart
import {Card, CardContent, Stack, Typography, Divider} from '@mui/material'
import {LineChart} from '@mui/x-charts/LineChart'


const Linechart = ({title, sx, data, seriesDataKey, axisDataKey, width, height, colors}) => {
    
    return (
      <Card sx={sx}>
        <CardContent>
          <Stack spacing={2} divider={<Divider/>}>
            <Typography variant='h6' fontSize= '15px'>
              {title}
            </Typography>
        <Stack direction='row' alignItems='center' justifyContent='center' minWidth={width} height={height}>
            <LineChart
                colors={colors}
                dataset={data}
                xAxis={[{scaleType: 'point', dataKey: axisDataKey, label: axisDataKey}]}
                series={[{dataKey: seriesDataKey, area: false, label: seriesDataKey}]}
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
        </Stack>

      </Stack>
        </CardContent>
    </Card>
    )
}

export default Linechart
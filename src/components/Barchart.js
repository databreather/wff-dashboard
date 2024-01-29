import {Card, CardContent, Stack, Typography, Divider} from '@mui/material'
import {BarChart} from '@mui/x-charts/BarChart'


const Barchart = (props) => {
    const {title, sx, data, dataKey, layout, colors} = props
    const sortedData = data.sort((a, b) => a.farmer - b.farmer)
    
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
            xAxis={[{scaleType: 'band', dataKey: dataKey, categoryGapRatio: 0.5}]}
            series={[{dataKey: 'farmer', label: 'Total Farmers'}]}
            layout='vertical'
            
            height={300}
        />
        ) : 
        <BarChart
            dataset={sortedData}
            yAxis={[{scaleType: 'band', dataKey: dataKey}]}
            series={[{dataKey: 'farmer', label: 'Total Farmers'}]}
            layout= 'horizontal'
            width={600}
            height={300}
        />
        }
        </Stack>
      </Stack>
        </CardContent>
    </Card>
    )
}

export default Barchart
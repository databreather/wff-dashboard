import {Card, CardContent, Stack, Typography, Divider} from '@mui/material'
import {PieChart} from '@mui/x-charts/PieChart'


const Piechart = ({title, sx, data, pallete}) => {
    
    return (

      <Card sx={sx}>
        <CardContent>
          <Stack spacing={2} divider={<Divider/>}>
            <Typography variant='h6' fontSize= '15px'>
              {title}
            </Typography>
        <Stack direction='row' justifyContent='center'>
        <PieChart
        colors={pallete}
  series={[
    {
      data,
    },
  ]}
  width={320}
  height={250}
  slotProps={{
    legend: {
      labelStyle: {
        fontSize: '12px'
      }
    }
  }}
/>
        </Stack>

      </Stack>
        </CardContent>
    </Card>
    )
}

export default Piechart

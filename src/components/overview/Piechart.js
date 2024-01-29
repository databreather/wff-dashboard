import {Card, CardContent, Stack, Typography, Divider} from '@mui/material'
import {PieChart} from '@mui/x-charts/PieChart'


const Piechart = ({title, sx, data, pallete, value, label}) => {
    // const transformedData = data.map((item, index) => ({
    //   id: ,
    //   value: item[value],
    //   label: item[label],
    // }));
    
    return (

      <Card sx={sx}>
        <CardContent>
          <Stack spacing={2} divider={<Divider/>}>
            <Typography variant='h6' component='div' style={{fontSize: '15px'}}>
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
  height={300}
/>
        </Stack>

      </Stack>
        </CardContent>
    </Card>
    )
}

export default Piechart

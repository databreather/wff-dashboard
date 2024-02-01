import React from 'react';
import { ScatterChart} from '@mui/x-charts';
import { Card, CardContent, Stack, Divider, Typography } from '@mui/material';



const Scatterchart = ({data, sx, width, height}) => {

    return (
          <Card sx={sx}>
            <CardContent>
              <Stack spacing={2} divider={<Divider/>}>
                <Typography variant='h6' fontSize='15px'>Crop: Sales Value vs Losses Qty Relationship</Typography>
                <Stack>
                <ScatterChart 
            width={width}
            height={height}
            series={[...data.map((v) => ({data: [{x: v.lossesQty, y: v.salesValue, id: v.id}], label: v.crop}))]}
           
           />
                </Stack>
              </Stack>
            </CardContent>
          </Card>
      );
}


export default Scatterchart
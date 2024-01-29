import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import {Card, CardContent, Stack, Typography, Divider} from '@mui/material'

const Datatable = ({rows, columns, sx, title}) => {
   return ( <Card sx={sx}>
        <CardContent>
          <Stack spacing={2} divider={<Divider/>}>
            <Typography variant='h6' component='div' style={{fontSize: '15px'}}>
              {title}
            </Typography>
        <Stack direction='column' justifyContent='center'>
            <DataGrid rows={rows} columns={columns}/>
        </Stack>
      </Stack>
        </CardContent>
    </Card>
    )
}

export default Datatable
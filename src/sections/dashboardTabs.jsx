import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Unstable_Grid2 as Grid } from "@mui/material"

const DashboardTabs = (props) => {
    const {value, onTabChange} = props
    return (
        <Grid container spacing={2}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 2 }}>
            <Tabs
            value={value}
            onChange={onTabChange}
            textColor='secondary'
            indicatorColor='secondary'

            >
                <Tab value='overview' label='Overview'/>
                <Tab value='farmers' label='Farmers'/>
                <Tab value='production' label='Production'/>
                {/* <Tab value='salesAndDistribution' label='Sales and Distribution'/>
                <Tab value='summaryReport' label='Summary Report'/> */}
            </Tabs>
        </Box>
        </Grid>
    )
}

export default DashboardTabs
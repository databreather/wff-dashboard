import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Unstable_Grid2 as Grid } from "@mui/material"

const DashboardTabs = (props) => {
    const {value, onTabChange} = props
    return (
        <Grid container spacing={2}>
            <Grid lg={12}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 2, width: '100%' }}>
            <Tabs
            value={value}
            onChange={onTabChange}
            textColor='primary'
            indicatorColor='primary'

            >
                <Tab value='overview' label='Overview' wrapped/>
                <Tab value='farmers' label='Farmers' wrapped/>
                <Tab value='production' label='Production' wrapped/>
                <Tab value='salesAndDistribution' label='Sales and Distribution' wrapped/>
                <Tab value='summaryReport' label='Summary Report' wrapped/>
            </Tabs>
        </Box>
            </Grid>
        </Grid>
    )
}

export default DashboardTabs
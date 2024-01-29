import { useState } from 'react';
import {styled} from '@mui/material/styles'
import {Box, Container} from '@mui/material'
import DashboardTabs from '@/sections/dashboardTabs';
import Overview  from "@/sections/overview";
import Farmers from '@/sections/farmers';
import Production from '@/sections/production';
import SalesAndDistribution from '@/sections/salesAndDistribution';


const Dashboard = () => {

    const [value, setValue] = useState('overview')

    const handleTabChange = (event, tab) => {
        setValue(tab)
    }

  const SIDE_NAV_WIDTH = 280
  const LayoutRoot = styled('div')(({theme}) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: SIDE_NAV_WIDTH
    }
  }))
  const LayoutContainer = styled('div')({
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    width: '100%'
  })

  return (
    <LayoutContainer>

      <Box
        component='main'
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        
        <Container maxWidth='xl'>
            <DashboardTabs value={value} onTabChange={handleTabChange}/>
            {value === 'overview' && <Overview/>}
            {value === 'farmers' && <Farmers/>}
            {value === 'production' && <Production/>}
            {value === 'salesAndDistribution' && <SalesAndDistribution/>}
            {value === 'summaryReport' && (
              <div>Downloadable consolidated information about farmers, crop production, sales and distribution</div>
            )}
        </Container>
      </Box>
    </LayoutContainer>
  );
}

export default Dashboard

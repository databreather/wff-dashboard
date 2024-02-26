import { useState, useEffect} from 'react';
import {styled} from '@mui/material/styles'
import {Box, Container} from '@mui/material'
import DashboardTabs from '@/sections/dashboardTabs';
import Overview  from "@/sections/wfp/overview";
import Farmers from '@/sections/wfp/farmers';
import Production from '@/sections/wfp/production';
import SalesAndDistribution from '@/sections/wfp/salesAndDistribution';
import SummaryReport from '@/sections/wfp/summaryReport';


const Dashboard = () => {

    const [value, setValue] = useState('overview')
    const [data, setData] = useState(null)

    const handleTabChange = (event, tab) => {
        setValue(tab)
    }

    useEffect(() => {

      const fetchData = async () => {
        try{
          const res  = await fetch('/api/getWFPData', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          })
          const data = await res.json()
          console.log(data)
          setData(data)
        }catch(err){
          console.error("Error: ", err)
          //setData(err.data)
        }
      }

      fetchData()

    }, [])

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
          display: 'flex',
          flexGrow: 1,
          py: 8
        }}
      > 
        <Container maxWidth='xl'>
            <DashboardTabs value={value} onTabChange={handleTabChange}/>
            {value === 'overview' && <Overview data={data}/>}
            {value === 'farmers' && <Farmers data={data}/>}
            {value === 'production' && <Production data={data}/>}
            {value === 'salesAndDistribution' && <SalesAndDistribution data={data}/>}
            {value === 'summaryReport' && (
              <SummaryReport data={data}/>
            )}
        
        </Container>
      </Box>
    </LayoutContainer>
  );
}

export default Dashboard

import React, {useState, useEffect} from "react";
import {styled} from '@mui/material/styles'
import {Box, Container} from '@mui/material'
import DashboardTabs from '@/sections/dashboardTabs'
import Overview from "@/sections/meac/overview";

/**
 * Total amount spent on procurement of agricultural products
 * Breakdown of spending by product category (fruits, vegetables, grains, dairy)
 * Average spending per school by month
 * Quantity of each agricultural product procured per month
 * Average cost per unit of each agricultural product
 * Number of orders placed by schools per month
 * Average order size per school per month
 * Percentage of schools sourcing products from local farmers
 * Distance traveled by products from farm to school
 * Average time taken for products to reach schools from procurement
 * Percentage of products meeting quality standards
 * Percentage of products meeting freshness standards
 * Quantity of surplus agricultural products donated or sold
 * Percentage of schools reporting improved student health outcomes
 * Number of partnerships with local farmers or agricultural cooperatives
 * Percentage of schools participating in food waste reduction initiatives
 * 
 * 
 */
const MeacDashboard = () => {

    const [value, setValue] = useState('overview')
    const [data, setData] = useState(null)
    
    const handleTabChange = (event, tab) => {
        setValue(tab)
    }
    const LayoutContainer = styled('div')({
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        width: '100%'
      })

      useEffect(() => {

        const fetchData = async () => {
          try{
            const res  = await fetch('/api/getMEACData', {
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
            <Overview data={data}/>
            {/* <DashboardTabs value={value} onTabChange={handleTabChange}/>
            {value === 'overview' && <Overview data={data}/>}
            {value === 'farmers' && <Farmers data={data}/>}
            {value === 'production' && <Production data={data}/>}
            {value === 'salesAndDistribution' && <SalesAndDistribution data={data}/>}
            {value === 'summaryReport' && (
              <SummaryReport data={data}/>
            )} */}
        
        </Container>
      </Box>
        </LayoutContainer>
    )
}


export default MeacDashboard
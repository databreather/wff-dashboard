import Head from "next/head";
// import styles from "@/styles/Home.module.css";
import {styled} from '@mui/material/styles'
import {UserGroupIcon} from '@heroicons/react/24/solid'
import {Box, Container, Unstable_Grid2 as Grid} from '@mui/material'
import FarmersKpis from '../components/KpiCard'
import Piechart from '../components/Piechart'
import Linechart from '../components/Linechart'
import Barchart from '../components/Barchart'
import {CHART_PALLETE} from '../utils/chartPallete'


export default function Home() {

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
  const farmingTypeData = [
    { id: 0, value: 10, label: 'Crop' },
    { id: 1, value: 15, label: 'Livestock' },
    { id: 2, value: 20, label: 'Mixed' },
  ]
  const nabCertificateData = [
    { id: 0, value: 10, label: 'Yes' },
    { id: 1, value: 15, label: 'No' },
  ]
  const harvestFrequencyData = [
    { id: 0, value: 10, label: '3-5 times' },
    { id: 1, value: 15, label: '< 3 times' },
    { id: 2, value: 20, label: '> 5 times' },
  ]

  const genderDistributionData = [
    { id: 0, value: 10, label: 'Male' },
    { id: 1, value: 15, label: 'Female' },
  ]

  const farmersByHarvestPeriod = {
    'farmers': [12, 8, 20, 5, 11, 17, 3, 9, 24, 10, 14, 27],
    'months': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  }
  const top10CropsByFarmers = [
    {'farmer': 20, 'crop': 'Sweet Potato'},
    {'farmer': 18, 'crop': 'Carrots'},
    {'farmer': 15, 'crop': 'Beans'},
    {'farmer': 25, 'crop': 'Green Pepper'},
    {'farmer': 12, 'crop': 'Beans'},
    {'farmer': 29, 'crop': 'Onion'},
    {'farmer': 23, 'crop': 'Maize'},
    {'farmer': 38, 'crop': 'Spinach'},
    {'farmer': 35, 'crop': 'Tomato'},
    {'farmer': 17, 'crop': 'Sweet Potato'}
  ]
  const top5ChallengesByFarmers = [
    {'farmer': 10, 'challenge': 'Agricultural infrastructure constraint'},
    {'farmer': 48, 'challenge': 'Water shortage'},
    {'farmer': 20, 'challenge': 'Pests and diseases'},
    {'farmer': 32, 'challenge': 'Inputs constraint'},
    {'farmer': 26, 'challenge': 'Financial limitation'}
  ]
  // const top10FarmersByCrop = {
  //   'farmers': [20, 18, 15, 25, 12, 29, 23, 38, 35, 17],
  //   'crops': ['Sweet Potato', 'Beans', 'Carrot', 'Green Pepper', 'Maize', 'Onion', 'Mahangu', 'Spinach', 'Tomato', 'Cabbage']
  // }
  return (
    <LayoutContainer>
      <Head>
        <title>Data Dashboard</title>
        <meta name="description" content="WFP Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth='xl'>
          <Grid container spacing={2}>
            <Grid xs={12} sm={6} md={4} lg={3}>
              <FarmersKpis title='Total Farmers' sx={{height: '100%'}} value='24k' icon={<UserGroupIcon/>}/>
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={3}>
              <FarmersKpis title='Male Farmers' sx={{height: '100%'}} value='8k' icon={<UserGroupIcon/>} />
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={3}>
              <FarmersKpis title='Female Farmers' sx={{height: '100%'}} value='16k' icon={<UserGroupIcon/>} />
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={3}>
              <FarmersKpis title='Avg Farmer Age' sx={{height: '100%'}} value='28.8' icon={<UserGroupIcon/>} />
            </Grid>
            <Grid xs={12} md={6} lg={7}>
              <Barchart title='Top 10 Crops by Farmers' sx={{height: '100%'}} data={top10CropsByFarmers} dataKey='crop' layout= {true}/>
            </Grid>
            <Grid xs={12} md={6} lg={5}>
              <Barchart title='Top 5 Challenges Faced by Farmers' sx={{height: '100%'}} data={top5ChallengesByFarmers} dataKey='challenge' layout={false} />
            </Grid>
            <Grid xs={12} lg={5}>
              <Linechart title='Farmers by Harvest Period' sx={{height: '100%'}} data={farmersByHarvestPeriod} />
            </Grid>
            <Grid container xs={12} lg={7} direction='row' spacing={1}>
            <Grid xs={12} sm={6} lg={6}>
              <Piechart title='Harvest Frequency by Farmers' sx={{height: '100%'}} data={harvestFrequencyData} colors={CHART_PALLETE[1]}/>
            </Grid>
            <Grid xs={12} sm={6} lg={6}>
              <Piechart title='NAB Certificate Distribution' sx={{height: '100%'}} data={nabCertificateData} colors={CHART_PALLETE[2]}/>
            </Grid>
            <Grid xs={12} sm={6} lg={6}>
              <Piechart title='Gender Distribution' sx={{height: '100%'}} data={genderDistributionData} colors={CHART_PALLETE[3]}/>
            </Grid>
            <Grid xs={12} sm={6} lg={6}>
              <Piechart title='Farming Type Distribution' sx={{height: '100%'}} data={farmingTypeData} colors={CHART_PALLETE[4]} />
            </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </LayoutContainer>
  );
}

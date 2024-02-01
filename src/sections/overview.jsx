import {Unstable_Grid2 as Grid} from '@mui/material'
import {farmersByRegion, top5ChallengesByFarmers, top5SalesByFarmers, nodes} from '../../public/dataset/demoData'
import { currencyFormatter, numberFormatter } from '@/utils/formatter'
import KpiCard from '../components/overview/KpiCard'
import Barchart from '../components/overview/Barchart'
import Tree from '../components/overview/Tree'

const Overview = () => {
    return <Grid container spacing={2}>
        <Grid xs={12} sm={6} md={4} lg={2}>
            <KpiCard title='Total Value' value={currencyFormatter(2000)}/>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={2} >
            <KpiCard title='Sales Value' value={currencyFormatter(1200)}/>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={2} >
            <KpiCard title='Sales Qty' value={numberFormatter(300)}/>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={2} >
            <KpiCard title='Production Value' value={currencyFormatter(1000)}/>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={2} >
            <KpiCard title='Production Qty' value={numberFormatter(500)}/>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={2} >
            <KpiCard title='Losses Value' value={currencyFormatter(500)}/>
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={3}>
            <Barchart title="Farmers by Region" sx={{height: '100%', width: '100%'}} data={farmersByRegion} axisDataKey='Region' seriesDataKey={['Total Farmers']} width={300} height={300} layout />
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3}>
            <Barchart title="Top 5 Challenges by Farmers" sx={{height: '100%', width: '100%'}} width={300} height={300} data={top5ChallengesByFarmers} axisDataKey='Challenge' seriesDataKey={['Total Farmers']} layout  />
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3}>
            <Barchart title="Top 5 Challenges by Farmers" sx={{height: '100%', width: '100%'}} width={300} height={300} data={top5ChallengesByFarmers} axisDataKey='Challenge' seriesDataKey={['Total Farmers']} layout />
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3}>
        <Barchart title="Top 5 Sales by Farmers" sx={{height: '100%', width: '100%'}} width={300} height={300} data={top5SalesByFarmers} axisDataKey='Farmer' seriesDataKey={['Total Sales']} layout  />
        </Grid>
        <Grid lg={12}>
            <Tree nodes={nodes}/>
        </Grid>
    </Grid>
}

export default Overview
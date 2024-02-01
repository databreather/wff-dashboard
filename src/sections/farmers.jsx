import {Unstable_Grid2 as Grid} from '@mui/material'
import {top5ChallengesByFarmers,farmersAggregationData, farmersNABData, farmers} from '../../public/dataset/demoData'
import {CHART_PALLETE} from '@/utils/chartPallete'
import { currencyFormatter, numberFormatter } from '@/utils/formatter'
import KpiCard from '../components/overview/KpiCard'
import Barchart from '../components/overview/Barchart'
import Piechart from '../components/overview/Piechart'
import DataTable from '@/components/overview/Datatable'

const Farmers = () => {

    const columns = [
        {field: 'id', headerName: 'ID', type: 'number', width: 100},
        {field: 'fullName', headerName: 'Full Name', flex: 0.5},
        {field: 'gender', headerName: 'Gender', flex: 0.5},
        {field: 'age', headerName: 'Age', type: 'number', flex: 0.5},
        {field: 'farm', headerName: 'Farm Name', flex: 0.5},
        {field: 'farmSize', headerName: 'Farm Size (ha)', type: 'number', flex: 0.5},
        {field: 'region', headerName: 'Region'},
        {field: 'aggregationSystem', headerName: 'Aggregation System', flex: 0.5},
        {field: 'nabCertificate', headerName: 'NAb Certificate', flex: 0.5}
    ]
    return <Grid container spacing={2}>
        <Grid xs={12} sm={6} md={4} lg={2}>
            <KpiCard title='Total Farmers' value={numberFormatter(2000)}/>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={2} >
            <KpiCard title='Male Farmers' value={numberFormatter(500)}/>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={2} >
            <KpiCard title='Female Farmers' value={numberFormatter(700)}/>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={2} >
            <KpiCard title='Avg Farmer Age' value={numberFormatter(39.7)}/>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={2} >
            <KpiCard title='Min Farm Size (ha)' value={numberFormatter(0.5)}/>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={2} >
            <KpiCard title='Max Farm Sie (ha)' value={numberFormatter(7.5)}/>
        </Grid>
        <Grid xs={12} md={12} lg={3}>
            <Barchart title="Top 5 Challenges by Farmers" width={300} height={250} sx={{height: '100%', width:'100%'}} data={top5ChallengesByFarmers} axisDataKey='Challenge' seriesDataKey={['Total Farmers']} layout />
        </Grid>
        <Grid xs={12} md={6} lg={3}>
            <Piechart title='Gender Distribution' sx={{height: '100%'}} data={farmersAggregationData} pallete={CHART_PALLETE[2]}  />
        </Grid>
        <Grid xs={12} md={6} lg={3}>
            <Piechart title='Aggregation System Membership' sx={{height: '100%'}} data={farmersAggregationData} pallete={CHART_PALLETE[2]}  />
        </Grid>
        <Grid xs={12} md={6} lg={3}>
            <Piechart title='NAB Certificate by Farmers' sx={{height: '100%'}} data={farmersNABData} pallete={CHART_PALLETE[2]}  />
        </Grid>
        <Grid md={12} lg={12}>
           <DataTable title='Farmers Information' sx={{height: '100%', width:'100%'}} rows={farmers} columns={columns} />
        </Grid>
    </Grid>
}

export default Farmers
import * as React from "react";
import { Unstable_Grid2 as Grid } from "@mui/material";
import Linechart from "@/components/overview/Linechart";
import Barchart from "@/components/overview/Barchart";
import Datatable from "@/components/overview/Datatable";
import { CHART_PALLETE } from "@/utils/chartPallete";
import { Loader } from "@/pages/dashboard/loader";

const Production = ({data}) => {

    if(!data){

        return <Loader/>
    }
    const {
        cropsData, 
        avgYield, 
        monthlyCropProductionTrend, 
        aggregationSystemComparison, 
        cropsAndFarmersData, 
        topCropsByYield
    } = data
    const columns = [
        {field: 'id', headerName: 'ID', type: 'number'},
        {field: 'crop', headerName: 'Crop Name'},
        {field: 'farmers', headerName: '# of Farmers'},
        {field: 'participation', headerName: '% of Farmers', type: 'number'},
        {field: 'producedQty', headerName: 'Produced Qty'},
        {field: 'unit', headerName: 'Unit', type: 'number'},
        //{field: 'productionValue', headerName: ''},
        // {field: 'aggregationSystem', headerName: 'Aggregation System', flex: 0.5},
        // {field: 'nabCertificate', headerName: 'NAb Certificate', flex: 0.5}
    ]

    return (
        <Grid container spacing={2}>
            <Grid sm={12} md={6} lg={6}>
                <Linechart title='Crop Production by Months' sx={{height: '100%', width:'100%'}} data={monthlyCropProductionTrend} seriesDataKey='Total Crops' axisDataKey='months' width={600} height={200} colors={CHART_PALLETE[5]}/>
            </Grid>
            <Grid sm={12} md={6} lg={6}>
                <Barchart title='Monthly Crop Production Comparison: Aggregated vs Non-Aggregated Farmers' sx={{height: '100%', width:'100%'}} data={aggregationSystemComparison} seriesDataKey={['Yes', 'No']} axisDataKey='months' width={600} height={200} colors={CHART_PALLETE[2]}/>
            </Grid>
            <Grid sm={12} md={6} lg={4}>
                <Barchart title='Top 10 Crops by Quantity Produced' sx={{height: '100%', width:'100%'}} data={topCropsByYield} seriesDataKey={['Total Yield']} axisDataKey='Crops' width={400} height={300} layout/>
            </Grid>
            <Grid sm={12} md={6} lg={4}>
                <Barchart title='Top 10 Crops Cultivated' sx={{height: '100%', width:'100%'}} data={cropsAndFarmersData} seriesDataKey={['Total Farmers']} axisDataKey='Crops' width={400} height={300} layout />
            </Grid>
            <Grid sm={12} md={6} lg={4}>
                <Barchart title='Top 10 Farms by Average Crop Yield' sx={{height: '100%', width:'100%'}} data={avgYield} seriesDataKey={['Average Yield']} axisDataKey='Farm' width={400} height={300} layout />
            </Grid>
            <Grid lg={12}>
                <Datatable title="Crop Production Overview" sx={{height: '100%', width: '100%'}} rows={cropsData} columns={columns}/>
            </Grid>

        </Grid>
    )
}

export default Production
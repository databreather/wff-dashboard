import * as React from "react";
import { Unstable_Grid2 as Grid, Card, CardContent, Stack, Typography, Divider } from "@mui/material";
import KpiCard from "@/components/overview/KpiCard";
import { LineChart} from "@mui/x-charts";
import Barchart from "@/components/overview/Barchart";
import Datatable from "@/components/overview/Datatable";
import Scatterchart from "@/components/overview/Scatterchart";
import {cropSalesAndDistData, salesAndDistribution, salesVsDist, scatterData, top10FarmersByDistribution, top10FarmersBySales, top10CropsBySalesAndDistribution } from "../../public/dataset/demoData";
import { currencyFormatter, numberFormatter } from '@/utils/formatter'
import { CHART_PALLETE } from "@/utils/chartPallete";

const SalesAndDistribution = () => {

    const columns = [
        {field: 'id', headerName: 'ID', type: 'number', width: 50},
        {field: 'crop', headerName: 'Crop Name', type: 'string', width: 150},
        {field: 'month', headerName: 'Month', type: 'string', width: 80},
        {field: 'salesValue', headerName:'Sales Value (N$)', type: 'number', width: 150},
        {field: 'salesQty', headerName: 'Sales Qty', type: 'number', width: 120},
        {field: 'distValue', headerName: 'Distribution Value (N$)', type: 'number', width: 170},
        {field: 'distQty', headerName: 'Distribution Qty', type: 'number', width: 120},
        {field: 'lossesValue', headerName: 'Losses Value (N$)', type: 'number', width: 150},
        {field: 'lossesQty', headerName: 'Losses Qty', type: 'number', width: 120},
        {field: 'totalValue', headerName: 'Total Value (N$)', type: 'number', width: 150},
        {field: 'totalQty', headerName: 'Total Qty', type: 'number', width: 120}
    ]
    return (
        <Grid container spacing={2}>
            <Grid xs={12} sm={6} md={4} lg={2} >
                <KpiCard title="Sales Value" value={currencyFormatter(30000)} />
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={2} >
                <KpiCard title="Sales Quantity" value={numberFormatter(2000)} />
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={2} >
                <KpiCard title="Distribution Value" value={currencyFormatter(40000)} />
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={2} >
                <KpiCard title="Distribution Qty" value={numberFormatter(4000)} />
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={2} >
                <KpiCard title="Losses Value" value={numberFormatter(4000)} />
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={2} >
                <KpiCard title="Total Value" value={currencyFormatter(4000)} />
            </Grid>
            <Grid lg={4}>
                <Card>
                    <CardContent>
                        <Stack spacing={2} divider={<Divider/>}>
                            <Typography variant='h6' fontSize='15px'>
                                Sales Value vs Distribution Value Over Months
                            </Typography>
                            <LineChart
                    colors={CHART_PALLETE[2]}
                    xAxis={[{scaleType: 'band',data: salesAndDistribution.months, label: 'Months'}]}
                    series={[{data: salesAndDistribution.sales, label: 'Sales'}, {data: salesAndDistribution.distribution, label: 'Distribution'}]}
                    width={400}
                    height={200}
                    slotProps={{
                        legend:{
                          labelStyle:{
                            fontSize: '12px'
                          },
                          itemMarkHeight: 5,
                          itemMarkWidth: 5
                        }
                      }}
                 />
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
            <Grid lg={4}>
                <Barchart title='Sales Qty vs Distribution Qty ' data={salesVsDist} axisDataKey='year' seriesDataKey={['Sales Qty', 'Distribution Qty']} width={350} height={200} colors={CHART_PALLETE[2]} />
            </Grid>
            <Grid lg={4}>
                <Barchart title='Sales Value vs Losses Value ' data={salesVsDist} axisDataKey='year' seriesDataKey={['Sales Qty', 'Distribution Qty']} width={350} height={200} colors={CHART_PALLETE[2]} />
            </Grid>
            {/* <Grid lg={4}>
                <Scatterchart data={scatterData} sx={{height: '100%', width: '100%'}} width={400} height={200} />
            </Grid> */}
            <Grid lg={4}>
                <Barchart title='Top 10 Farmers by Sales' data={top10FarmersBySales} axisDataKey='farmer' seriesDataKey={['Sales Value']} width={350} height={300} colors={CHART_PALLETE[6]} layout />
            </Grid>
            <Grid lg={4}>
                <Barchart title='Top 10 Farmers by Distribution' data={top10FarmersByDistribution} axisDataKey='farmer' seriesDataKey={['Distribution Value']} width={350} height={300} colors={CHART_PALLETE[6]} layout />
            </Grid>
            <Grid lg={4}>
                <Barchart title='Top 10 Crops by Sales and Distribution' data={top10CropsBySalesAndDistribution} axisDataKey='crop' seriesDataKey={['Sales Value', 'Distribution Value']} width={350} height={300} colors={CHART_PALLETE[2]} layout />
            </Grid>
            <Grid lg={12}>
                <Datatable title='Crop Sales and Distribution Table' sx={{height: '100%', width: '100%'}} rows={cropSalesAndDistData} columns={columns} />
            </Grid>
        </Grid>
    )
}


export default SalesAndDistribution
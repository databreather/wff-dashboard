import {Unstable_Grid2 as Grid, Card, CardContent, Stack, Typography, Divider } from '@mui/material'
import { currencyFormatter, numberFormatter } from '@/utils/formatter'
import KpiCard from '../../components/overview/KpiCard'
import DataTable from '@/components/overview/Datatable';
import Piechart from '@/components/overview/Piechart';
import { LineChart} from "@mui/x-charts";
import Barchart from '../../components/overview/Barchart'
import CustomToolbar from "@/components/overview/CustomToolBar";
import { CHART_PALLETE } from "@/utils/chartPallete";
import { Loader } from '@/pages/dashboard/loader'

const Overview = ({data}) => {
    
    if(!data){
        return <Loader/>
    }

    const columns = [
        {field: 'id', headerName: 'ID', type: 'number', width: 80},
        {field: 'schoolName', headerName: 'School', width: 150},
        {field: 'region', headerName: 'Region', width: 150},
        {field: 'orders', headerName: 'Orders', width: 150},
        {field: 'ordersValue', headerName: 'Orders Value', width: 150},
        {field: 'ordersQty', headerName: 'Orders Qty', width: 150},
        {field: 'avgOrdersValue', headerName: 'Avg Orders Value', width: 150},
        {field: 'avgOrdersQty', headerName: 'Avg Orders Qty', type: 'number', width: 150},
        {field: 'avgOrderLeadTime', headerName: 'Avg Orders Lead Time', width: 150},
        {field: 'totalFarmers', headerName: 'Farmers Procured From', type: 'number', width: 150},
        {field: 'percentageOfTotalFarmers', headerName: '% of Farmers Procured From', type: 'number', width: 150},
        {field: 'healthOutcomeReported', headerName: 'Report on Health Outcome', width: 100},
        {field: 'noOfFarmerPartnership', headerName: 'Farmers Partnership', width: 150},
        {field: 'foodWasteReductionParticipant', headerName: 'Food Waste Reduction Participant', width: 150},
        {field: 'surplusQty', headerName: 'Surplus Product Qty', type: 'number', width: 150}
    ]
    const {spendingByCategory, orderValueAndQtyPerMonth, schoolsProcurementReport, schoolsReportingHealthOutcomes} = data
    
    return <Grid container spacing={2}>
        <Grid xs={12} sm={6} md={4} lg={2}>
            <KpiCard title='Schools' value={numberFormatter(21)}/>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={2} >
            <KpiCard title='Orders' value={numberFormatter(1200)}/>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={2} >
            <KpiCard title='Orders Value' value={currencyFormatter(300)}/>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={2} >
            <KpiCard title='Orders Quantity' value={numberFormatter(1000)}/>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={2} >
            <KpiCard title='Avg Order Value' value={currencyFormatter(500)}/>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={2} >
            <KpiCard title='Avg Order Quantity' value={numberFormatter(500)}/>
        </Grid>
        <Grid xs={12} md={6} lg={3}>
            <Barchart title="Spending by Category" sx={{height: '100%', width: '100%'}} data={spendingByCategory} axisDataKey='Category' seriesDataKey={['Spending']} width={300} height={200}/>
        </Grid>
        <Grid xs={12} md={6} lg={3}>
            <Piechart title='Health Outcome School Percentage' sx={{height: '100%'}} data={schoolsReportingHealthOutcomes} pallete={CHART_PALLETE[2]}  />
            </Grid>
        <Grid md={12} lg={6}>
                <Card sx={{height: '100%', width: '100%'}}>
                    <CardContent>
                        <Stack spacing={2} divider={<Divider/>}>
                            <Typography variant='h6' fontSize='15px'>
                                Orders: Value and Qty Over Months
                            </Typography>
                            <LineChart

                    colors={CHART_PALLETE[2]}
                    xAxis={[{scaleType: 'band',data: orderValueAndQtyPerMonth.months, label: 'Months'}]}
                    series={[{data: orderValueAndQtyPerMonth.orderValue, label: 'Order Value'}, {data: orderValueAndQtyPerMonth.orderQty, label: 'Order Qty'}]}
                    width={600}
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
            <Grid>
               <DataTable title='Schools Procurement Overview' rows={schoolsProcurementReport} columns={columns} sx={{height: '100%', width: '100%'}} toolbar={CustomToolbar} />
            </Grid>
        {/* <Grid xs={12} sm={12} md={12} lg={3}>
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
        </Grid> */}
    </Grid>
}

export default Overview
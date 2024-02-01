import * as React from "react";
import { Unstable_Grid2 as Grid, Card, CardContent, Stack, Typography, Divider } from "@mui/material";
import CustomToolbar from "@/components/overview/CustomToolBar";
import { summaryReport } from "../../public/dataset/demoData";
import Datatable from "@/components/overview/Datatable";

const SummaryReport = () => {
    const columns = [
        {field: 'id', headerName: 'ID', type: 'number', width: 80},
        {field: 'farmerName', headerName: 'Farmer Name', width: 150},
        {field: 'gender', headerName: 'Gender'},
        {field: 'typeOfFarming', headerName: 'Type of Farming', width: 150},
        {field: 'region', headerName: 'Region', width: 150},
        {field: 'challenges', headerName: 'Challenges', width: 150},
        {field: 'aggregatedSystem', headerName: 'Aggregation System', width: 150},
        {field: 'phoneNumber', headerName: 'Phone Number', type: 'number', width: 150},
        {field: 'sizeOfFarm', headerName: 'Farm Size (ha)', type: 'number', width: 150},
        {field: 'peopleEmployed', headerName: 'Total Employees', type: 'number', width: 150},
        {field: 'cropName', headerName: 'Crop Name', width: 150},
        {field: 'unit', headerName: 'Unit', width: 100},
        {field: 'schoolsSuppliedTo', headerName: 'School SHF Supplied', width: 150},
        {field: 'typeOfBuyer', headerName: 'Type of Buyer', width: 150},
        {field: 'quantityProduced', headerName: 'Quantity Produced', type: 'number', width: 150},
        {field: 'productionValue', headerName: 'Production Value', type: 'number', width: 150},
        {field: 'quantitySold', headerName: 'Quantity Sold', type: 'number', width: 150},
        {field: 'salesValue', headerName: 'Sales Value', type: 'number', width: 150},
        {field: 'quantityDistributed', headerName: 'Quantity Distributed', type: 'number', width: 150},
        {field: 'distributionValue', headerName: 'Distribution Value', type: 'number', width: 150},
        {field: 'lossesQuantity', headerName: 'Losses Quantity', type: 'number', width: 150},
        {field: 'lossesValue', headerName: 'Losses Value', type: 'number', width: 150},
        {field: 'totalValue', headerName: 'Total Value', type: 'number', width: 150},
    ]
    return (
        <Grid container spacing={2}>
            <Grid>
              <Datatable title='Detailed Summary Report' rows={summaryReport} columns={columns} sx={{height: '100%', width: '100%'}} toolbar={CustomToolbar} />
            </Grid>
        </Grid>
    )
}

export default SummaryReport
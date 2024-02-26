import { GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';

const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarExport
          csvOptions={{
            fileName: "MEAC_Report",
            delimiter: ',',
            utf8WithBom: true
          }} 
        />
      </GridToolbarContainer>
    );
  }
  

export default CustomToolbar
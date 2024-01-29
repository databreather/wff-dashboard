import * as React from 'react';
import {  CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import {Card, CardContent, Stack, Typography, Divider, TablePagination} from '@mui/material'
import {DEFAULT_OPTIONS, getTheme } from '@table-library/react-table-library/material-ui';
import {useTree} from '@table-library/react-table-library/tree'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import {usePagination} from '@table-library/react-table-library/pagination'

const Tree = (props) => {
  const {nodes} = props

  const theme = useTheme(getTheme(DEFAULT_OPTIONS));

  const pagination = usePagination(
    {nodes},
    {
      state: {
        page: 0,
        size: 5
      },
      onChange: onPaginationChange
    }
  )
  const tree = useTree(
    {nodes},
    {
      onChange: onTreeChange,
    },
    {
      treeIcon: {
        margin: '4px',
        iconDefault: null,
        iconRight: <ChevronRightIcon/>,
        iconDown: <ChevronDownIcon/>,
      },
    },
  );

  function onTreeChange(action, state) {
    console.log(action, state);
  }

  function onPaginationChange(action, state) {
    console.log(action, state);
  }

  const COLUMNS = [
    { label: 'Farmer', 
      renderCell: (item) => item.name, tree: true
    },
    {
      label: 'Production Qty',
      renderCell: (item) => item.productionQty,
    },
    { label: 'Production Value', 
      renderCell: (item) => item.productionValue 
    },
    {
      label: 'Distributed Qty',
      renderCell: (item) => item.distributedQty,
    },
    { 
      label: 'Distributed Value', 
      renderCell: (item) => item.distributedValue
    },
    { 
      label: 'Sales Qty', 
      renderCell: (item) => item.salesQty
    },
    { 
      label: 'Sales Value', 
      renderCell: (item) => item.salesValue
    },
    { 
      label: 'Losses Qty', 
      renderCell: (item) => item.lossesQty
    },
    { 
      label: 'Losses Value', 
      renderCell: (item) => item.lossesValue
    }
  ];
  
  return (
    <Card>
      <CardContent>
        <CompactTable columns={COLUMNS} data={{nodes}} theme={theme} tree={tree} pagination={pagination}/>
        <Stack>
            <TablePagination
              count={nodes.length}
              page={pagination.state.page}
              rowsPerPage={pagination.state.size}
              rowsPerPageOptions={[20, 50, 100]}
              onRowsPerPageChange={(e) => 
                pagination.fns.onSetSize(parseInt(e.target.value, 10))
              }
              onPageChange={(e, page) => pagination.fns.onSetPage(page)} 
            />
        </Stack>
      </CardContent>
    </Card>
  )
  

};

export default Tree
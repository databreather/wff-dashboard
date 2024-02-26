import * as React from 'react';
import {  CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import {Card, CardContent, Stack, Typography, Divider, TablePagination} from '@mui/material'
import {DEFAULT_OPTIONS, getTheme } from '@table-library/react-table-library/material-ui';
import {useTree} from '@table-library/react-table-library/tree'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import {usePagination} from '@table-library/react-table-library/pagination'

const Tree = (props) => {
  const {nodes, columns} = props

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
  return (
    <Card>
      <CardContent>
        <CompactTable columns={columns} data={{nodes}} theme={theme} tree={tree} pagination={pagination}/>
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
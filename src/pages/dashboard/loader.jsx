import {Stack, CircularProgress, Typography} from '@mui/material'


export const Loader = () =>{


    return (
    <Stack sx={{width: '100%'}} alignItems='center' spacing={2}>
        <CircularProgress/>
        <Typography variant='h6'>Loading</Typography>
  </Stack>)
}


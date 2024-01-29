import {Card, CardContent, Stack, Typography} from '@mui/material'

const KpiCard = (props) => {
    const {title, value} = props

    return(
        <Card>
            <CardContent>
                <Stack
                    alignItems='flex-start'
                    direction='row'
                    justifyContent='space-between'
                    spacing={3}
                >
                    <Stack spacing={1}>
                        <Typography color='text.secondary' variant='overline'>
                            {title}
                        </Typography>
                        <Typography variant='h5'>
                            {value}
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default KpiCard
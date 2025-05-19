import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { data } from '../../data';

import { useParams } from "react-router-dom";


export default function WorkPage()
{
    let params = useParams();

    return (
        <>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor={'white'}
                color={'white'} >
                <Container sx={{ width: '100%' }}>
                    <Typography textAlign="center" fontFamily={'Gilroy Light'} fontSize={'40px'} color={'black'} p={{ xs: 1, sm: 2 }}>Work Experience</Typography>
                    <Box display={'flex'} flexDirection={'column'} bgcolor={'#eee'} borderRadius={'20px'} padding={'10px'}>
                        <img src={data.work[params.i].thumbnail} alt="" />
                        <Box display={'flex'} flexDirection={'row'} paddingTop={'25px'}>
                            <Typography fontFamily={'Gilroy Bold'} color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {"Job: "}
                            </Typography>
                            <Typography fontFamily={'Gilroy Light'} color={'black'} gutterBottom variant="h6" component="div"  >
                                {`${data.work[params.i].title}`}
                            </Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography fontFamily={'Gilroy Bold'} color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {"Company: "}
                            </Typography>
                            <Typography fontFamily={'Gilroy Light'} color={'black'} gutterBottom variant="h6" component="div"  >
                                {`${data.work[params.i].company}`}
                            </Typography>
                        </Box>

                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography fontFamily={'Gilroy Bold'} color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`Location:`}
                            </Typography>
                            <Typography fontFamily={'Gilroy Light'} color={'black'} gutterBottom variant="h6" component="div"  >
                                {`${data.work[params.i].location}`}
                            </Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography fontFamily={'Gilroy Bold'} color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`Date:`}
                            </Typography>
                            <Typography fontFamily={'Gilroy Light'} color={'black'} gutterBottom variant="h6" component="div"  >
                                {`${data.work[params.i].dates}`}
                            </Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography fontFamily={'Gilroy Bold'} color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`Description: `}
                            </Typography>
                            <Typography fontFamily={'Gilroy Light'} color={'black'} gutterBottom variant="h6" component="div"  
                            dangerouslySetInnerHTML={{ __html: data.work[params.i].description }}>
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
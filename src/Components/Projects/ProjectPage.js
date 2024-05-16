
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import noImageAvailable from '../../img/icons/noImageAvailable.jpeg';


import { data } from '../../data';

import { useParams } from "react-router-dom";


export default function ProjectPage()
{
    let params = useParams();

    return (
        <>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor={'white'}
                color={'white'} >
                <Container sx={{ width: '100%' }} fontFamily={'ZCOOL XiaoWei'} >
                    <Typography textAlign="center" fontFamily={'Be Vietnam Pro'} fontSize={'40px'} color={'black'} p={{ xs: 1, sm: 2 }}>PROJECT</Typography>
                    <Box display={'flex'} flexDirection={'column'} bgcolor={'#333'} borderRadius={'20px'} padding={'20px'} boxShadow={10}>
                        <Typography fontFamily={'ZCOOL XiaoWei'} gutterBottom variant="h3" component="div" textAlign={'center'} paddingBottom={'8px'}>
                            {data.projects[params.i].title}
                        </Typography>

                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography fontFamily={'Gilroy Bold'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`Application Type:`}
                            </Typography>
                            <Typography fontFamily={'Gilroy Light'} gutterBottom variant="h6" component="div"  >
                                {`${data.projects[params.i].type}`}
                            </Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography fontFamily={'Gilroy Bold'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`Link: `}
                            </Typography>
                            <Link href={data.projects[params.i].link} underline="hover" aria-label="Explore Project">
                                <Typography fontFamily={'Gilroy Light'} color={'white'} gutterBottom variant="h6" component="div">
                                    {`${data.projects[params.i].link}`}
                                </Typography>
                            </Link>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography fontFamily={'Gilroy Bold'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`Description: `}
                            </Typography>
                            <Typography fontFamily={'Gilroy Light'} gutterBottom variant="h6" component="div"  >
                                {`${data.projects[params.i].description}`}
                            </Typography>
                        </Box>
                        <Typography fontFamily={'Gilroy Bold'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'} paddingTop={'30px'}>
                            Sample Images:
                        </Typography>
                        <Box display={'flex'} flexWrap={'wrap'} justifyContent='space-evenly' bgcolor={'#eee'} borderRadius={'20px'} padding={'10px'}>
                            {data.projects[params.i].gallery.map((item, index) => (
                                <Box display={'flex'} flexWrap={'wrap'} justifyContent='center' >
                                    <Card key={item.thumbnail} sx={{ maxWidth: 250, padding: '10px', margin: '20px', ":hover": "boxShadow: 0 15px 70px -12px rgba(0,0,0,0.3) " }} >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="480"
                                                image={item ? item.thumbnail : noImageAvailable}
                                            />
                                        </CardActionArea>
                                    </Card>
                                </Box>
                            ))}
                        </Box>

                    </Box>
                </Container>
            </Box>
        </>
    );
}
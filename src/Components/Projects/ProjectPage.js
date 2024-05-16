
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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
                    <Typography textAlign="center" fontFamily={'Be Vietnam Pro'} fontSize={'40px'} color={'black'} pt={{ xs: 1, sm: 2 }}>PROJECT</Typography>
                    <Box display={'flex'} flexDirection={'column'} bgcolor={'#333'} borderRadius={'20px'} padding={'10px'} boxShadow={10}>
                        <Typography fontFamily={'ZCOOL XiaoWei'} gutterBottom variant="h3" component="div" textAlign={'center'} paddingBottom={'8px'}>
                            {data.projects[params.i].title}
                        </Typography>

                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`Application Type:`}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div"  >
                                {`${data.projects[params.i].type}`}
                            </Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`Link: `}
                            </Typography>
                            <a href={data.projects[params.i].link}>
                                <Typography color={'white'} gutterBottom variant="h6" component="div"  >
                                    {`${data.projects[params.i].link}`}
                                </Typography>
                            </a>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`Description: `}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div"  >
                                {`${data.projects[params.i].description}`}
                            </Typography>
                        </Box>
                        <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                            Sample Images:
                        </Typography>
                        <Box display={'flex'} flexWrap={'wrap'} justifyContent='space-evenly' bgcolor={'#eee'} borderRadius={'20px'} padding={'10px'}>
                            {data.projects[params.i].gallery.map((item, index) => (
                                <Box display={'flex'} flexWrap={'wrap'} justifyContent='center' >
                                    <Card key={item[0]} sx={{ maxWidth: 250, padding: '10px', margin: '20px', ":hover": "boxShadow: 0 15px 70px -12px rgba(0,0,0,0.3) " }} >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="480"
                                                image={item[0] ? item[0] : noImageAvailable}
                                            />
                                        </CardActionArea>
                                    </Card>
                                    <Card key={item[1]} sx={{ maxWidth: 250, padding: '10px', margin: '20px', ":hover": "boxShadow: 0 15px 70px -12px rgba(0,0,0,0.3) " }} >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="480"
                                                image={item[1] ? item[1] : noImageAvailable}
                                            />
                                        </CardActionArea>
                                    </Card>
                                    <Card key={item[2]} sx={{ maxWidth: 250, padding: '10px', margin: '20px', ":hover": "boxShadow: 0 15px 70px -12px rgba(0,0,0,0.3) " }} >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="480"
                                                image={item[2] ? item[2] : noImageAvailable}
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

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import noImageAvailable from '../../img/icons/noImageAvailable.jpeg';

import { data } from '../../data';

import { useParams, useNavigate } from "react-router-dom";


export default function ProjectPage()
{
    let params = useParams();
    let navigate = useNavigate();

    // Scroll to top when component mounts
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, []);

    const goBackToProjects = () => {
        navigate('/', { replace: true });
        // Wait for navigation to complete, then scroll to projects section
        setTimeout(() => {
            const element = document.getElementById('projects');
            if (element) {
                const navbarHeight = 70;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100);
    };

    return (
        <>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor={'white'}
                color={'white'} >
                <Container sx={{ width: '100%' }} fontFamily={'ZCOOL XiaoWei'} >
                    <Box display="flex" alignItems="center" mb={2}>
                        <Button
                            startIcon={<ArrowBackIcon />}
                            onClick={goBackToProjects}
                            sx={{
                                color: '#6a1b9a',
                                '&:hover': {
                                    backgroundColor: 'rgba(106, 27, 154, 0.1)',
                                }
                            }}
                        >
                            Back to Portfolio
                        </Button>
                    </Box>
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
                            <Typography fontFamily={'Gilroy Light'} gutterBottom variant="h6" component="div"  
                            dangerouslySetInnerHTML={{ __html: data.projects[params.i].description }}>
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
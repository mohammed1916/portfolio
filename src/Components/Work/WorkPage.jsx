import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { data } from '../../data';

import { useParams, useNavigate } from "react-router-dom";


export default function WorkPage()
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

    const goBackToWork = () => {
        navigate('/', { replace: true });
        // Wait for navigation to complete, then scroll to work section
        setTimeout(() => {
            const element = document.getElementById('work');
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
                <Container sx={{ width: '100%' }}>
                    <Box display="flex" alignItems="center" mb={2}>
                        <Button
                            startIcon={<ArrowBackIcon />}
                            onClick={goBackToWork}
                            sx={{
                                color:'var(--color-typewriter-border)',
                                border: '1px solid var(--color-typewriter-border)',
                                boxShadow: '0 8px 32px var(--color-particle-shadow)',
                                '&:hover': {
                                    backgroundColor: 'rgba(106, 27, 154, 0.1)',
                                }
                            }}
                        >
                            Back to Portfolio
                        </Button>
                    </Box>
                    <Typography textAlign="center" fontFamily={'Gilroy Light'} fontSize={'40px'} color={'black'} p={{ xs: 1, sm: 2 }}>Work</Typography>
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

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
        navigate('/#projects', { replace: true });
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
                bgcolor={'var(--color-bg)'}
                color={'var(--color-heading)'}
                sx={{
                    // background: 'linear-gradient(135deg, var(--color-bg) 0%, var(--color-accent) 50%, var(--color-secondary) 100%)',
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'var(--color-primary)',
                        opacity: 0.05,
                        zIndex: 0,
                    },
                }} >
                <Container sx={{ width: '100%' }}>
                    <Box display="flex" alignItems="center" mb={2}>
                        <Button
                            startIcon={<ArrowBackIcon />}
                            onClick={goBackToProjects}
                            sx={{
                                color:'var(--color-typewriter-border)',
                                border: '1px solid var(--color-typewriter-border)',
                                boxShadow: '0 8px 32px var(--color-particle-shadow)',
                                '&:hover': {
                                    backgroundColor: 'var(--color-card-bg2)',
                                }
                            }}
                        >
                            Back to Portfolio
                        </Button>
                    </Box>
                    <Typography textAlign="center" fontFamily="var(--font-gilroy-bold)" fontSize={'2.5rem'} color={'var(--color-heading)'} p={{ xs: 1, sm: 2 }}>PROJECT</Typography>
                    <Box display={'flex'} flexDirection={'column'} bgcolor={'var(--color-card-bg)'} borderRadius={'20px'} padding={'20px'} boxShadow={'0 8px 32px var(--color-particle-shadow)'}>
                        <Typography fontFamily="var(--font-gilroy-bold)" gutterBottom variant="h3" component="div" textTransform={'uppercase'} textAlign={'center'} paddingBottom={'8px'} color={'var(--color-heading-sub)'}>
                            {data.projects[params.i].title}
                        </Typography>
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography fontFamily="var(--font-gilroy-bold)" gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'} color={'var(--color-heading-sub)'}>
                                {`Application Type:`}
                            </Typography>
                            <Typography fontFamily="var(--font-gilroy-light)" gutterBottom variant="h6" component="div" color={'var(--color-text)'}>
                                {`${data.projects[params.i].type}`}
                            </Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography fontFamily="var(--font-gilroy-bold)" gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'} color={'var(--color-heading-sub)'}>
                                {`Link: `}
                            </Typography>
                            <Link href={data.projects[params.i].link} underline="hover" aria-label="Explore Project">
                                <Typography fontFamily="var(--font-gilroy-light)" color={'var(--color-text)'} gutterBottom variant="h6" component="div">
                                    {`${data.projects[params.i].link}`}
                                </Typography>
                            </Link>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography fontFamily="var(--font-gilroy-bold)" gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'} color={'var(--color-heading-sub)'}>
                                {`Description: `}
                            </Typography>
                            <Typography fontFamily="var(--font-gilroy-light)" gutterBottom variant="h6" component="div" color={'var(--color-text)'}
                            dangerouslySetInnerHTML={{ __html: data.projects[params.i].description }}>
                            </Typography>
                        </Box>
                        <Typography fontFamily="var(--font-gilroy-bold)" gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'} paddingTop={'30px'} color={'var(--color-heading-sub)'}>
                            Sample Images:
                        </Typography>
                        <Box display={'flex'} flexWrap={'wrap'} justifyContent='space-evenly' bgcolor={'var(--color-card-bg2)'} borderRadius={'20px'} padding={'10px'}>
                            {data.projects[params.i].gallery.map((item, index) => (
                                <Box display={'flex'} flexWrap={'wrap'} justifyContent='center' >
                                    <Card key={item.thumbnail} sx={{ maxWidth: 250, padding: '10px', margin: '20px', boxShadow: '0 8px 32px var(--color-particle-shadow)', ':hover': { boxShadow: '0 15px 70px -12px var(--color-particle-shadow)' } }} >
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
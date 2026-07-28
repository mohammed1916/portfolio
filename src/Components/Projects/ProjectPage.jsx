
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LaunchIcon from '@mui/icons-material/Launch';
import noImageAvailable from '../../img/icons/noImageAvailable.jpeg';
import GradientPlaceholder from '../common/GradientPlaceholder';
import DetailDescription from '../common/DetailDescription';
import DetailRow from '../common/DetailRow';

import { data } from '../../data';

import { useParams, useNavigate } from "react-router-dom";


export default function ProjectPage()
{
    let params = useParams();
    let navigate = useNavigate();
    const project = data.projects[params.i];
    const gallery = Array.isArray(project?.gallery) ? project.gallery : [];

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
                px={{ xs: 1.5, sm: 6, md: 10 }}
                py={{ xs: 4, sm: 10 }}
                bgcolor={'var(--color-bg)'}
                color={'var(--color-heading)'}
                sx={{
                    overflowX: 'hidden',
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
                    <Typography textAlign="center" fontFamily="var(--font-gilroy-bold)" fontSize={{ xs: '1.6rem', sm: '2.5rem' }} color={'var(--color-heading-sub)'} p={{ xs: 1, sm: 2 }}>PROJECT</Typography>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        bgcolor={'var(--color-card-bg)'}
                        borderRadius={'20px'}
                        padding={{ xs: '16px', sm: '24px' }}
                        boxShadow={'0 8px 32px var(--color-particle-shadow)'}
                        sx={{ minWidth: 0, overflowWrap: 'anywhere' }}
                    >
                        <Typography
                            fontFamily="var(--font-gilroy-bold)"
                            gutterBottom
                            component="div"
                            textTransform={'uppercase'}
                            textAlign={'center'}
                            paddingBottom={'8px'}
                            color={'var(--color-heading-sub)'}
                            sx={{
                                fontSize: { xs: '1.4rem', sm: '2.2rem', md: '2.8rem' },
                                lineHeight: 1.2,
                                overflowWrap: 'anywhere',
                            }}
                        >
                            {project.title}
                        </Typography>

                        <DetailRow label="Application Type:" value={project.type} />

                        {project.tech && <DetailRow label="Tech Stack:" value={project.tech} />}

                        <DetailRow label="Link:">
                            <Chip
                                icon={<LaunchIcon />}
                                label="Open project"
                                component="a"
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                clickable
                                title={project.link}
                                sx={{
                                    fontFamily: 'var(--font-gilroy-bold)',
                                    color: '#fff',
                                    background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 60%, #d81b60 100%)',
                                    boxShadow: '0 6px 16px rgba(106, 27, 154, 0.28)',
                                    '& .MuiChip-icon': { color: '#fff' },
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #8e24aa 0%, #ad1457 100%)',
                                    },
                                }}
                            />
                        </DetailRow>

                        <Box sx={{ mt: 1.5, minWidth: 0 }}>
                            <Typography
                                sx={{
                                    fontFamily: 'var(--font-gilroy-bold)',
                                    color: 'var(--color-heading-sub)',
                                    fontWeight: 700,
                                    fontSize: { xs: '0.95rem', sm: '1.05rem' },
                                    mb: 0.8,
                                }}
                            >
                                Description:
                            </Typography>
                            <DetailDescription html={project.description} />
                        </Box>

                        <Typography fontFamily="var(--font-gilroy-bold)" gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'} paddingTop={'30px'} color={'var(--color-heading-sub)'}>
                            Sample Images:
                        </Typography>
                        {gallery.length > 0 ? (
                            <Box display={'flex'} flexWrap={'wrap'} justifyContent='space-evenly' bgcolor={'var(--color-card-bg2)'} borderRadius={'20px'} padding={'10px'}>
                                {gallery.map((item, index) => (
                                    <Box key={`gallery-${index}`} display={'flex'} flexWrap={'wrap'} justifyContent='center' sx={{ width: '100%', maxWidth: 250 }}>
                                        <Card sx={{ width: '100%', padding: '10px', margin: { xs: '10px 0', sm: '20px' }, boxShadow: '0 8px 32px var(--color-particle-shadow)', ':hover': { boxShadow: '0 15px 70px -12px var(--color-particle-shadow)' } }} >
                                            <CardActionArea
                                                component="a"
                                                href={item ? item.original || item.thumbnail : noImageAvailable}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <CardMedia
                                                    component="img"
                                                    image={item ? item.thumbnail : noImageAvailable}
                                                    alt={`${project.title} screenshot ${index + 1}`}
                                                    loading="lazy"
                                                    sx={{
                                                        width: '100%',
                                                        height: { xs: 260, sm: 480 },
                                                        objectFit: 'contain',
                                                        backgroundColor: '#fff',
                                                        borderRadius: '8px',
                                                    }}
                                                />
                                            </CardActionArea>
                                        </Card>
                                    </Box>
                                ))}
                            </Box>
                        ) : (
                            <Box bgcolor={'var(--color-card-bg2)'} borderRadius={'20px'} padding={'10px'}>
                                <GradientPlaceholder
                                    title={project.title}
                                    subtitle="Screenshots coming soon"
                                    buzz={project.placeholderTags}
                                    height={300}
                                />
                            </Box>
                        )}
                    </Box>
                </Container>
            </Box>
        </>
    );
}
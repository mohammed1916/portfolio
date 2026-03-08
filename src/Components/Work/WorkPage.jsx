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
    const selectedWork = data.work[params.i];

    if (!selectedWork) {
        return null;
    }

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
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        bgcolor={'#eee'}
                        borderRadius={'20px'}
                        padding={{ xs: '14px', sm: '20px' }}
                        sx={{
                            border: '1px solid rgba(106, 27, 154, 0.2)',
                            boxShadow: '0 12px 32px rgba(106, 27, 154, 0.12)'
                        }}
                    >
                        <img src={selectedWork.thumbnail} alt={selectedWork.title} />
                        <Box display={'flex'} flexDirection={'row'} paddingTop={'25px'}>
                            <Typography fontFamily={'Gilroy Bold'} color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {"Job: "}
                            </Typography>
                            <Typography fontFamily={'Gilroy Light'} color={'black'} gutterBottom variant="h6" component="div"  >
                                {`${selectedWork.title}`}
                            </Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography fontFamily={'Gilroy Bold'} color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {"Company: "}
                            </Typography>
                            <Typography fontFamily={'Gilroy Light'} color={'black'} gutterBottom variant="h6" component="div"  >
                                {`${selectedWork.company}`}
                            </Typography>
                        </Box>

                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography fontFamily={'Gilroy Bold'} color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`Location:`}
                            </Typography>
                            <Typography fontFamily={'Gilroy Light'} color={'black'} gutterBottom variant="h6" component="div"  >
                                {`${selectedWork.location}`}
                            </Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography fontFamily={'Gilroy Bold'} color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`Date:`}
                            </Typography>
                            <Typography fontFamily={'Gilroy Light'} color={'black'} gutterBottom variant="h6" component="div"  >
                                {`${selectedWork.dates}`}
                            </Typography>
                        </Box>
                        {selectedWork.domain && (
                            <Box display={'flex'} flexDirection={'row'} >
                                <Typography fontFamily={'Gilroy Bold'} color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                    {`Domain:`}
                                </Typography>
                                <Typography fontFamily={'Gilroy Light'} color={'black'} gutterBottom variant="h6" component="div">
                                    {selectedWork.domain}
                                </Typography>
                            </Box>
                        )}
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography fontFamily={'Gilroy Bold'} color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`Description: `}
                            </Typography>
                            <Typography fontFamily={'Gilroy Light'} color={'black'} gutterBottom variant="h6" component="div"  
                            dangerouslySetInnerHTML={{ __html: selectedWork.description }}>
                            </Typography>
                        </Box>

                        {Array.isArray(selectedWork.projects) && selectedWork.projects.length > 0 && (
                            <Box mt={2}>
                                <Typography fontFamily={'Gilroy Bold'} color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }}>
                                    Key Projects
                                </Typography>
                                {selectedWork.projects.map((project, index) => (
                                    <Box
                                        key={`${project.name}-${index}`}
                                        sx={{
                                            mb: 2,
                                            p: 2,
                                            borderRadius: '14px',
                                            background: '#faf7ff',
                                            border: '1px solid rgba(106, 27, 154, 0.16)'
                                        }}
                                    >
                                        <Typography fontFamily={'Gilroy Bold'} color={'black'} variant="subtitle1">
                                            {project.name}
                                        </Typography>
                                        <Typography fontFamily={'Gilroy Light'} color={'black'} variant="body2" sx={{ mb: 1 }}>
                                            {project.tech}
                                        </Typography>
                                        <Box component="ul" sx={{ mt: 0, mb: 0, pl: 2 }}>
                                            {project.highlights.map((point, pointIndex) => (
                                                <Typography key={`${project.name}-point-${pointIndex}`} component="li" fontFamily={'Gilroy Light'} color={'black'} variant="body2" sx={{ mb: 0.6 }}>
                                                    {point}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        )}

                        {Array.isArray(selectedWork.technicalSkills) && selectedWork.technicalSkills.length > 0 && (
                            <Box mt={1}>
                                <Typography fontFamily={'Gilroy Bold'} color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }}>
                                    Technical Skills Used
                                </Typography>
                                <Typography fontFamily={'Gilroy Light'} color={'black'} variant="body1">
                                    {selectedWork.technicalSkills.join(', ')}
                                </Typography>
                            </Box>
                        )}

                        {Array.isArray(selectedWork.achievements) && selectedWork.achievements.length > 0 && (
                            <Box mt={2}>
                                <Typography fontFamily={'Gilroy Bold'} color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }}>
                                    Achievements & Activities
                                </Typography>
                                <Box component="ul" sx={{ mt: 0, mb: 0, pl: 2 }}>
                                    {selectedWork.achievements.map((item, index) => (
                                        <Typography key={`achievement-${index}`} component="li" fontFamily={'Gilroy Light'} color={'black'} variant="body2" sx={{ mb: 0.6 }}>
                                            {item}
                                        </Typography>
                                    ))}
                                </Box>
                            </Box>
                        )}
                    </Box>
                </Container>
            </Box>
        </>
    );
}

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GradientPlaceholder from '../common/GradientPlaceholder';
import DetailDescription from '../common/DetailDescription';
import DetailRow from '../common/DetailRow';
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
                px={{ xs: 1.5, sm: 6, md: 10 }}
                py={{ xs: 4, sm: 10 }}
                bgcolor={'white'}
                color={'white'}
                sx={{ overflowX: 'hidden' }} >
                <Container sx={{ width: '100%', minWidth: 0 }}>
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
                    <Typography textAlign="center" fontFamily={'Gilroy Bold'} fontSize={{ xs: '1.6rem', sm: '2.5rem' }} color={'#4a148c'} p={{ xs: 1, sm: 2 }}>Experience</Typography>
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
                        {selectedWork.thumbnail ? (
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    p: { xs: 1, sm: 2 },
                                    borderRadius: '16px',
                                    background: '#fff',
                                    border: '1px solid rgba(106, 27, 154, 0.16)',
                                    overflow: 'hidden',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={selectedWork.thumbnail}
                                    alt={`${selectedWork.title} at ${selectedWork.company}`}
                                    loading="lazy"
                                    sx={{
                                        width: 'auto',
                                        maxWidth: '100%',
                                        maxHeight: { xs: 320, sm: 520 },
                                        objectFit: 'contain',
                                        display: 'block',
                                        borderRadius: '10px',
                                    }}
                                />
                            </Box>
                        ) : (
                            <GradientPlaceholder
                                title={selectedWork.title}
                                subtitle={`${selectedWork.company} • ${selectedWork.dates}`}
                                height={300}
                            />
                        )}
                        <Box pt={'25px'} sx={{ minWidth: 0 }}>
                            <DetailRow label="Job:" value={selectedWork.title} color="#4a148c" valueColor="#111" />
                            <DetailRow label="Company:" value={selectedWork.company} color="#4a148c" valueColor="#111" />
                            <DetailRow label="Location:" value={selectedWork.location} color="#4a148c" valueColor="#111" />
                            <DetailRow label="Date:" value={selectedWork.dates} color="#4a148c" valueColor="#111" />
                            {selectedWork.domain && (
                                <DetailRow label="Domain:" value={selectedWork.domain} color="#4a148c" valueColor="#111" />
                            )}
                        </Box>

                        <Box sx={{ mt: 1.5, minWidth: 0 }}>
                            <Typography
                                sx={{
                                    fontFamily: 'var(--font-gilroy-bold)',
                                    color: '#4a148c',
                                    fontWeight: 700,
                                    fontSize: { xs: '0.95rem', sm: '1.05rem' },
                                    mb: 0.8,
                                }}
                            >
                                Description:
                            </Typography>
                            <DetailDescription html={selectedWork.description} color="#111" linkColor="#4a148c" />
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
                                            p: { xs: 1.5, sm: 2 },
                                            borderRadius: '14px',
                                            background: '#faf7ff',
                                            border: '1px solid rgba(106, 27, 154, 0.16)',
                                            minWidth: 0,
                                            overflowWrap: 'anywhere',
                                        }}
                                    >
                                        <Typography fontFamily={'Gilroy Bold'} color={'black'} variant="subtitle1">
                                            {project.name}
                                        </Typography>
                                        {project.focus && (
                                            <Typography
                                                fontFamily={'Gilroy Bold'}
                                                variant="caption"
                                                sx={{ display: 'block', color: '#6a1b9a', mb: 0.5, letterSpacing: '0.3px' }}
                                            >
                                                {project.focus}
                                            </Typography>
                                        )}
                                        <Typography fontFamily={'Gilroy Light'} color={'#4a148c'} variant="body2" sx={{ mb: 1, fontStyle: 'italic' }}>
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

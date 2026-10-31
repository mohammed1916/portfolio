import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DetailDescription from '../common/DetailDescription';
import DetailRow from '../common/DetailRow';
import { data } from '../../data';

import { useParams, useNavigate } from "react-router-dom";


export default function CertificatePage()
{
    let params = useParams();
    let navigate = useNavigate();
    const certificate = data.certifications[params.i];

    // Scroll to top when component mounts
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, []);

    const goBackToCertifications = () => {
        navigate('/', { replace: true });
        // Wait for navigation to complete, then scroll to certifications section
        setTimeout(() => {
            const element = document.getElementById('certifications');
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
                sx={{ overflowX: 'hidden' }} >
                <Container sx={{ width: '100%' }}>
                    <Box display="flex" alignItems="center" mb={2}>
                        <Button
                            startIcon={<ArrowBackIcon />}
                            onClick={goBackToCertifications}
                            sx={{
                                color:'var(--color-typewriter-border)',
                                border: '1px solid var(--color-typewriter-border)',
                                boxShadow: '0 8px 32px var(--color-particle-shadow)',
                                '&:hover': {
                                    backgroundColor: 'var(--color-secondary)',
                                }
                            }}
                        >
                            Back to Portfolio
                        </Button>
                    </Box>
                    <Typography textAlign="center" fontFamily="var(--font-gilroy-bold)" fontSize={{ xs: '1.6rem', sm: '2.5rem' }} color={'var(--color-heading-sub)'} p={{ xs: 1, sm: 2 }}>CERTIFICATE</Typography>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        bgcolor={'var(--color-card-bg)'}
                        borderRadius={'20px'}
                        padding={{ xs: '16px', sm: '24px' }}
                        sx={{ minWidth: 0, overflowWrap: 'anywhere' }}
                    >
                        <Typography
                            fontFamily="var(--font-gilroy-bold)"
                            color={'var(--color-heading-sub)'}
                            gutterBottom
                            component="div"
                            textTransform={'uppercase'}
                            textAlign={'center'}
                            paddingBottom={'8px'}
                            sx={{
                                fontSize: { xs: '1.3rem', sm: '2rem', md: '2.6rem' },
                                lineHeight: 1.25,
                                overflowWrap: 'anywhere',
                            }}
                        >
                            {certificate.title}
                        </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                p: { xs: 1, sm: 2 },
                                borderRadius: '16px',
                                background: '#fff',
                                border: '1px solid rgba(106, 27, 154, 0.16)',
                                overflow: 'hidden',
                            }}
                        >
                            <Box
                                component="img"
                                src={certificate.thumbnail}
                                alt={`${certificate.title} certificate from ${certificate.Institution}`}
                                loading="lazy"
                                sx={{
                                    width: 'auto',
                                    maxWidth: '100%',
                                    maxHeight: { xs: 300, sm: 560 },
                                    objectFit: 'contain',
                                    display: 'block',
                                    borderRadius: '10px',
                                }}
                            />
                        </Box>

                        <Box pt={'25px'} sx={{ minWidth: 0 }}>
                            <DetailRow label="Date:" value={certificate.date} />
                            <DetailRow label="Institution:" value={certificate.Institution} />
                        </Box>

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
                            <DetailDescription html={certificate.description} />
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
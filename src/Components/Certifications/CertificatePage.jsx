import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { data } from '../../data';

import { useParams, useNavigate } from "react-router-dom";


export default function CertificatePage()
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
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor={'var(--color-bg)'}
                color={'var(--color-heading)'} >
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
                    <Typography textAlign="center" fontFamily="var(--font-gilroy-bold)" fontSize={'40px'} color={'var(--color-heading)'} p={{ xs: 1, sm: 2 }}>CERTIFICATE</Typography>
                    <Box display={'flex'} flexDirection={'column'} bgcolor={'var(--color-card-bg)'} borderRadius={'20px'} padding={'10px'}>

                        <Typography fontFamily="var(--font-gilroy-bold)" color={'var(--color-heading-sub)'} gutterBottom variant="h3" component="div" textTransform={'uppercase'} textAlign={'center'} paddingBottom={'8px'}>
                            {data.certifications[params.i].title}
                        </Typography>
                        <img src={data.certifications[params.i].thumbnail} alt="" />
                        <Box display={'flex'} flexDirection={'row'} paddingTop={'25px'}>
                            <Typography fontFamily="var(--font-gilroy-bold)" color={'var(--color-heading-sub)'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'} >
                                {"Date: "}
                            </Typography>
                            <Typography fontFamily="var(--font-gilroy-light)" color={'var(--color-heading-sub)'} gutterBottom variant="h6" component="div"  >
                                {`${data.certifications[params.i].date}`}
                            </Typography>
                        </Box>

                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography fontFamily="var(--font-gilroy-bold)" color={'var(--color-heading-sub)'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`Institution:`}
                            </Typography>
                            <Typography fontFamily="var(--font-gilroy-light)" color={'var(--color-heading-sub)'} gutterBottom variant="h6" component="div"  >
                                {`${data.certifications[params.i].Institution}`}
                            </Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography fontFamily="var(--font-gilroy-bold)" color={'var(--color-heading-sub)'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`Description: `}
                            </Typography>
                            <Typography fontFamily="var(--font-gilroy-light)" color={'var(--color-heading-sub)'} gutterBottom variant="h6" component="div"  
                             dangerouslySetInnerHTML={{ __html: data.certifications[params.i].description }}>
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
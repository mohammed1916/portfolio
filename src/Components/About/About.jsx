import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { data } from "../../data";
import AnimatedSectionHeading from "../common/AnimatedSectionHeading";
import { motion } from "framer-motion";
import { styled } from '@mui/material/styles';

// Styled logo component for About section
const AboutLogo = styled(motion.div)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '40px',
    '& .about-logo-text': {
        background: 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 50%, #8e24aa 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontFamily: 'Cinzel Decorative',
        fontSize: '3rem',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadow: '0 0 30px rgba(74, 20, 140, 0.5)',
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            fontSize: '2.5rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-5px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #6a1b9a, transparent)',
            borderRadius: '2px',
        },
    },
}));

export default function About()
{

    return (
        <>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor={'white'}
                color={'white'}
            >
                <Container sx={{ width: '100%' }}>
                    {/* Prominent Logo */}
                    <AboutLogo
                        initial={{ opacity: 0, scale: 0.5, y: -50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ 
                            duration: 1, 
                            type: "spring", 
                            stiffness: 100,
                            delay: 0.3
                        }}
                        whileHover={{
                            scale: 1.05,
                            textShadow: '0 0 40px rgba(74, 20, 140, 0.8)',
                            transition: { duration: 0.3 }
                        }}
                    >
                        <Typography className="about-logo-text" variant="h2" component="h1">
                            {data.information.name}
                        </Typography>
                    </AboutLogo>
                    
                    <AnimatedSectionHeading>About</AnimatedSectionHeading>
                    <Box
                        display={'flex'} 
                        flexWrap={'wrap'} 
                        flexDirection={'row'} 
                        justifyContent='space-evenly'
                        bgcolor={'#eee'} 
                        borderRadius={'20px'} 
                        padding={'20px'}
                        alignItems={'center'}
                    >
                        <Box padding={'10px'} alignItems={'center'}>
                            <img src={data.information.image} alt="" />
                        </Box>

                        <Box maxWidth={'500px'} bgcolor={'white'} borderRadius={'20px'} padding={'20px'} boxShadow={2}>
                            <Typography 
                                paddingBottom={'10px'}
                                fontFamily={'Gilroy Light'}
                                color={'black'}
                            >
                                Hi There!
                            </Typography>
                            <Typography 
                                paddingBottom={'10px'}
                                fontFamily={'Gilroy Light'}
                                color={'black'}
                            >
                                {data.information.whoami}
                            </Typography>
                            <Typography 
                                paddingBottom={'10px'}
                                fontFamily={'Gilroy Light'}
                                color={'black'}
                            >
                                {data.information.description}
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

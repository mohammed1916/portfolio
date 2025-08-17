import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { data } from "../../data";
import AnimatedSectionHeading from "../common/AnimatedSectionHeading";
import { motion } from "framer-motion";
import { styled } from '@mui/material/styles';
import { useState } from 'react';

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

// Responsive image carousel component for About section
const ResponsiveAboutImageCarousel = styled(motion.div)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    overflow: 'hidden',
    '& .carousel-container': {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    '& .carousel-image': {
        width: '100%',
        maxWidth: '300px',
        height: 'auto',
        borderRadius: '20px',
        objectFit: 'cover',
        boxShadow: '0 10px 30px rgba(74, 20, 140, 0.3)',
        border: '3px solid rgba(74, 20, 140, 0.1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 15px 40px rgba(74, 20, 140, 0.4)',
            border: '3px solid rgba(74, 20, 140, 0.3)',
        },
        [theme.breakpoints.down('lg')]: {
            maxWidth: '280px',
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: '250px',
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '200px',
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '180px',
        },
    },
    '& .carousel-arrow': {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #4a148c, #6a1b9a)',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: 0.8,
        boxShadow: '0 4px 15px rgba(74, 20, 140, 0.3)',
        '&:hover': {
            opacity: 1,
            transform: 'translateY(-50%) scale(1.1)',
            boxShadow: '0 6px 20px rgba(74, 20, 140, 0.5)',
        },
        '&:active': {
            transform: 'translateY(-50%) scale(0.95)',
        },
        [theme.breakpoints.down('sm')]: {
            width: '35px',
            height: '35px',
        },
    },
    '& .carousel-arrow-left': {
        left: '-20px',
        [theme.breakpoints.down('md')]: {
            left: '-15px',
        },
    },
    '& .carousel-arrow-right': {
        right: '-20px',
        [theme.breakpoints.down('md')]: {
            right: '-15px',
        },
    },
    '& .carousel-arrow svg': {
        width: '20px',
        height: '20px',
        fill: 'white',
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
        [theme.breakpoints.down('sm')]: {
            width: '18px',
            height: '18px',
        },
    },
    '& .carousel-indicators': {
        position: 'absolute',
        bottom: '-30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px',
        zIndex: 2,
    },
    '& .carousel-indicator': {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        background: 'rgba(74, 20, 140, 0.3)',
        '&.active': {
            background: 'linear-gradient(135deg, #4a148c, #6a1b9a)',
            transform: 'scale(1.2)',
            boxShadow: '0 0 10px rgba(74, 20, 140, 0.5)',
        },
        '&:hover': {
            background: 'rgba(74, 20, 140, 0.6)',
            transform: 'scale(1.1)',
        },
    },
}));

export default function About()
{
    const images = [data.information.image, data.information.image2];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor={'white'}
                color={'white'}
                sx={{
                    background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 50%, #ce93d8 100%)',
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(74, 20, 140, 0.05)',
                        zIndex: 0,
                    },
                }}
            >
                <Container sx={{ width: '100%', position: 'relative', zIndex: 1 }}>
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
                        flexDirection={{ xs: 'column', md: 'row' }}
                        justifyContent='space-evenly'
                        bgcolor={'#eee'} 
                        borderRadius={'20px'} 
                        padding={'20px'}
                        alignItems={'center'}
                        gap={{ xs: 3, md: 4 }}
                    >
                        <ResponsiveAboutImageCarousel
                            initial={{ opacity: 0, x: -100, rotate: -10 }}
                            animate={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ 
                                duration: 0.8, 
                                type: "spring", 
                                stiffness: 80,
                                delay: 0.5 
                            }}
                            whileHover={{
                                rotate: 2,
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="carousel-container">
                                {/* Left Arrow */}
                                <motion.button
                                    className="carousel-arrow carousel-arrow-left"
                                    onClick={prevImage}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 0.8, x: 0 }}
                                    transition={{ delay: 1 }}
                                >
                                    <svg viewBox="0 0 24 24">
                                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                                    </svg>
                                </motion.button>

                                {/* Image */}
                                <motion.img
                                    key={currentImageIndex}
                                    className="carousel-image"
                                    src={images[currentImageIndex]}
                                    alt={`${data.information.name} - Profile ${currentImageIndex + 1}`}
                                    loading="lazy"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5 }}
                                />

                                {/* Right Arrow */}
                                <motion.button
                                    className="carousel-arrow carousel-arrow-right"
                                    onClick={nextImage}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 0.8, x: 0 }}
                                    transition={{ delay: 1 }}
                                >
                                    <svg viewBox="0 0 24 24">
                                        <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                                    </svg>
                                </motion.button>
                            </div>

                            {/* Indicators */}
                            <div className="carousel-indicators">
                                {images.map((_, index) => (
                                    <motion.button
                                        key={index}
                                        className={`carousel-indicator ${index === currentImageIndex ? 'active' : ''}`}
                                        onClick={() => goToImage(index)}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.2 + index * 0.1 }}
                                    />
                                ))}
                            </div>
                        </ResponsiveAboutImageCarousel>

                        <Box 
                            maxWidth={{ xs: '100%', md: '500px' }}
                            width={{ xs: '100%', md: 'auto' }}
                            bgcolor={'white'} 
                            borderRadius={'20px'} 
                            padding={{ xs: '15px', sm: '20px' }}
                            boxShadow={2}
                            component={motion.div}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                                duration: 0.8, 
                                type: "spring", 
                                stiffness: 80,
                                delay: 0.7 
                            }}
                        >
                            <Typography 
                                paddingBottom={'10px'}
                                fontFamily={'Gilroy Light'}
                                color={'black'}
                                fontSize={{ xs: '1rem', sm: '1.1rem' }}
                            >
                                Hi There!
                            </Typography>
                            <Typography 
                                paddingBottom={'10px'}
                                fontFamily={'Gilroy Light'}
                                color={'black'}
                                fontSize={{ xs: '0.9rem', sm: '1rem' }}
                                lineHeight={1.6}
                                textAlign="justify"
                            >
                                {data.information.whoami}
                            </Typography>
                            <Typography 
                                paddingBottom={'10px'}
                                fontFamily={'Gilroy Light'}
                                color={'black'}
                                fontSize={{ xs: '0.9rem', sm: '1rem' }}
                                lineHeight={1.6}
                                textAlign="justify"
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

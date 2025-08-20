import React, { useState, useRef, useEffect } from 'react';
import { Typography, Chip, Skeleton } from "@mui/material";
import { Box, Container } from "@mui/system";
import { data } from "../../data";
import AnimatedSectionHeading from "../common/AnimatedSectionHeading";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { styled } from '@mui/material/styles';

// Advanced floating particles component
const ParticleField = styled(motion.div)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 1,
    background: 'linear-gradient(135deg, rgba(243, 229, 245, 0.3) 0%, rgba(225, 190, 231, 0.3) 50%, rgba(206, 147, 216, 0.3) 100%)',
}));

const Particle = styled(motion.div)(({ theme }) => ({
    position: 'absolute',
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, #8a2be2, #dda0dd)',
    boxShadow: '0 0 10px rgba(138, 43, 226, 0.5)',
}));

// Morphing blob background
const MorphingBlob = styled(motion.div)(({ theme }) => ({
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
    background: 'linear-gradient(45deg, rgba(138, 43, 226, 0.1), rgba(221, 160, 221, 0.1))',
    filter: 'blur(40px)',
    zIndex: 0,
}));

// Advanced glass card with parallax effect
const GlassCard = styled(motion.div)(({ theme }) => ({
    background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '24px',
    padding: '32px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 25px 50px rgba(138, 43, 226, 0.15)',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
        transition: 'left 0.8s ease',
    },
    '&:hover::before': {
        left: '100%',
    },
}));

// Advanced image container with 3D effects
const ImageContainer3D = styled(motion.div)(({ theme }) => ({
    perspective: '1000px',
    transformStyle: 'preserve-3d',
    position: 'relative',
    '& .image-wrapper': {
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px rgba(138, 43, 226, 0.3)',
        background: 'linear-gradient(145deg, #e6e6e6, #ffffff)',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(145deg, rgba(138, 43, 226, 0.1), transparent)',
            zIndex: 2,
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'conic-gradient(from 0deg, transparent, rgba(138, 43, 226, 0.1), transparent)',
            animation: 'rotate 20s linear infinite',
            zIndex: -1,
        },
    },
    '& .main-image': {
        width: '100%',
        height: 'auto',
        display: 'block',
        borderRadius: '20px',
        position: 'relative',
        zIndex: 3,
        filter: 'contrast(1.1) brightness(1.05)',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '@keyframes rotate': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
    },
}));

// Advanced text container with typewriter effect
const TypewriterText = ({ children, delay = 0 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const fullText = children.toString();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTyping(true);
            let index = 0;
            const typeTimer = setInterval(() => {
                setDisplayedText(fullText.slice(0, index + 1));
                index++;
                if (index >= fullText.length) {
                    clearInterval(typeTimer);
                    setIsTyping(false);
                }
            }, 30);
        }, delay);

        return () => clearTimeout(timer);
    }, [fullText, delay]);

    return (
        <span>
            {displayedText}
            {isTyping && <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{ borderRight: '2px solid #8a2be2', paddingRight: '2px' }}
            />}
        </span>
    );
};

// Skills chip with advanced animations
const SkillChip = styled(motion.div)(({ theme }) => ({
    display: 'inline-block',
    padding: '8px 16px',
    margin: '4px',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(221, 160, 221, 0.1))',
    border: '1px solid rgba(138, 43, 226, 0.2)',
    backdropFilter: 'blur(10px)',
    fontSize: '0.9rem',
    fontFamily: 'Gilroy Light',
    color: '#4a148c',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
        background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(221, 160, 221, 0.2))',
        transform: 'translateY(-2px)',
        boxShadow: '0 10px 20px rgba(138, 43, 226, 0.2)',
    },
}));

export default function About() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const images = [data.information.image, data.information.image2];
    
    // Generate simple particles
    const particles = Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        scale: 0.5 + Math.random() * 1.5,
    }));

    // Skills array (you can customize this based on your data)
    const skills = ['React', 'JavaScript', 'Python', 'Node.js', 'MongoDB', 'UI/UX', 'Machine Learning'];

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <Box
            ref={ref}
            px={{ xs: 3, sm: 10 }}
            py={{ xs: 5, sm: 10 }}
            sx={{
                background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 50%, #ce93d8 100%)',
                position: 'relative',
                minHeight: 'auto',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 50%, #ce93d8 100%)',
                    zIndex: -1,
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(138, 43, 226, 0.1) 0%, transparent 50%)`,
                    zIndex: 0,
                    transition: 'background 0.3s ease',
                },
                // Headings: purple by default, black on hover
                '& h1, & h4, & h6': {
                    color: '#8a2be2',
                    transition: 'color 0.3s',
                },
                '& h1:hover, & h4:hover, & h6:hover': {
                    color: '#222',
                },
            }}
        >
                {/* Particle Field */}
                <ParticleField>
                    {particles.map((particle) => (
                        <Particle
                            key={particle.id}
                            style={{
                                left: `${particle.x}%`,
                                top: `${particle.y}%`,
                                scale: particle.scale,
                            }}
                            animate={{
                                y: [-20, -40, -20],
                                x: [-10, 10, -10],
                                opacity: [0, 1, 0],
                                scale: [particle.scale * 0.5, particle.scale, particle.scale * 0.5],
                            }}
                            transition={{
                                delay: particle.delay,
                                duration: particle.duration,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </ParticleField>

                {/* Morphing Blobs */}
                <MorphingBlob
                    style={{ top: '10%', left: '10%' }}
                    animate={{
                        borderRadius: [
                            "60% 40% 30% 70% / 60% 30% 70% 40%",
                            "30% 60% 70% 40% / 50% 60% 30% 60%",
                            "60% 40% 30% 70% / 60% 30% 70% 40%"
                        ],
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                <MorphingBlob
                    style={{ bottom: '10%', right: '10%' }}
                    animate={{
                        borderRadius: [
                            "30% 60% 70% 40% / 50% 60% 30% 60%",
                            "60% 40% 30% 70% / 60% 30% 70% 40%",
                            "30% 60% 70% 40% / 50% 60% 30% 60%"
                        ],
                        x: [0, -40, 0],
                        y: [0, 40, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />

                <Container sx={{ position: 'relative', zIndex: 2 }}>
                    {/* Advanced Logo with 3D effect and Custom Font */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
                        animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
                        transition={{ 
                            duration: 1.2, 
                            type: "spring", 
                            stiffness: 100,
                            delay: 0.2
                        }}
                        style={{ 
                            textAlign: 'center', 
                            marginBottom: '60px',
                            perspective: '1000px'
                        }}
                    >
                        <Typography
                            variant="h1"
                            component={motion.h1}
                            sx={{
                                fontFamily: 'Cinzel Decorative, Gilroy Bold, serif',
                                fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                                color: '#8a2be2',
                                textShadow: '0 0 40px rgba(138, 43, 226, 0.3)',
                                position: 'relative',
                                transformStyle: 'preserve-3d',
                                fontWeight: 'bold',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: '-10px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '80%',
                                    height: '4px',
                                    background: 'linear-gradient(90deg, transparent, #8a2be2, #dda0dd, #8a2be2, transparent)',
                                    borderRadius: '2px',
                                    boxShadow: '0 0 15px rgba(138, 43, 226, 0.5)',
                                },
                                transition: 'color 0.3s',
                                '&:hover': {
                                    color: '#222',
                                },
                            }}
                            whileHover={{
                                scale: 1.05,
                                rotateX: 5,
                                rotateY: 5,
                                textShadow: '0 0 60px rgba(138, 43, 226, 0.5)',
                                transition: { duration: 0.3 }
                            }}
                        >
                            {data.information.name}
                        </Typography>
                        
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: '200px' } : {}}
                            transition={{ delay: 1.5, duration: 1 }}
                            style={{
                                height: '4px',
                                background: 'linear-gradient(90deg, #8a2be2, #dda0dd, #8a2be2)',
                                margin: '20px auto',
                                borderRadius: '2px',
                                boxShadow: '0 0 20px rgba(138, 43, 226, 0.5)',
                            }}
                        />
                    </motion.div>
                    
                    <AnimatedSectionHeading>About Me</AnimatedSectionHeading>
                    
                    {/* Main Content Grid */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.8, duration: 1 }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                            gap: '40px',
                            alignItems: 'start',
                            marginTop: '60px'
                        }}
                    >
                        {/* Image Section with 3D Effects and Carousel */}
                        <ImageContainer3D
                            initial={{ opacity: 0, x: -100, rotateY: -30 }}
                            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                            transition={{ delay: 1, duration: 1, type: "spring", stiffness: 80 }}
                            whileHover={{ 
                                rotateY: 10, 
                                rotateX: -5,
                                scale: 1.02,
                                transition: { duration: 0.3 } 
                            }}
                        >
                            <div className="image-wrapper">
                                {/* Carousel Navigation Arrows */}
                                <motion.button
                                    onClick={prevImage}
                                    style={{
                                        position: 'absolute',
                                        left: '15px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.9), rgba(221, 160, 221, 0.9))',
                                        border: 'none',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        zIndex: 5,
                                        backdropFilter: 'blur(10px)',
                                        boxShadow: '0 8px 20px rgba(138, 43, 226, 0.3)',
                                    }}
                                    whileHover={{ 
                                        scale: 1.1,
                                        boxShadow: '0 12px 30px rgba(138, 43, 226, 0.5)',
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 0.9, x: 0 }}
                                    transition={{ delay: 1.5 }}
                                >
                                    <svg 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="white"
                                        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
                                    >
                                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                                    </svg>
                                </motion.button>

                                <motion.button
                                    onClick={nextImage}
                                    style={{
                                        position: 'absolute',
                                        right: '15px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.9), rgba(221, 160, 221, 0.9))',
                                        border: 'none',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        zIndex: 5,
                                        backdropFilter: 'blur(10px)',
                                        boxShadow: '0 8px 20px rgba(138, 43, 226, 0.3)',
                                    }}
                                    whileHover={{ 
                                        scale: 1.1,
                                        boxShadow: '0 12px 30px rgba(138, 43, 226, 0.5)',
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 0.9, x: 0 }}
                                    transition={{ delay: 1.5 }}
                                >
                                    <svg 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="white"
                                        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
                                    >
                                        <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                                    </svg>
                                </motion.button>

                                <AnimatePresence mode="wait">
                                    {!isImageLoaded && (
                                        <Skeleton
                                            variant="rectangular"
                                            width="100%"
                                            height={400}
                                            sx={{ borderRadius: '20px' }}
                                        />
                                    )}
                                    <motion.img
                                        key={currentImageIndex}
                                        className="main-image"
                                        src={images[currentImageIndex]}
                                        alt={`${data.information.name} - Image ${currentImageIndex + 1}`}
                                        loading="lazy"
                                        onLoad={() => setIsImageLoaded(true)}
                                        initial={{ opacity: 0, scale: 1.1, rotateY: 90 }}
                                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
                                        transition={{ 
                                            duration: 0.6,
                                            ease: [0.4, 0, 0.2, 1]
                                        }}
                                    />
                                </AnimatePresence>
                                
                                {/* Enhanced Image Navigation Dots */}
                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        bottom: '20px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        display: 'flex',
                                        gap: '12px',
                                        zIndex: 4,
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        backdropFilter: 'blur(10px)',
                                        borderRadius: '25px',
                                        padding: '8px 16px',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 2 }}
                                >
                                    {images.map((_, index) => (
                                        <motion.button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            style={{
                                                width: index === currentImageIndex ? '24px' : '12px',
                                                height: '12px',
                                                borderRadius: '6px',
                                                border: 'none',
                                                background: index === currentImageIndex 
                                                    ? 'linear-gradient(135deg, #8a2be2, #dda0dd)' 
                                                    : 'rgba(255,255,255,0.5)',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                boxShadow: index === currentImageIndex 
                                                    ? '0 4px 12px rgba(138, 43, 226, 0.4)' 
                                                    : 'none',
                                            }}
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 2.2 + index * 0.1 }}
                                        />
                                    ))}
                                </motion.div>

                                {/* Image Counter */}
                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        top: '20px',
                                        right: '20px',
                                        background: 'rgba(138, 43, 226, 0.9)',
                                        backdropFilter: 'blur(10px)',
                                        borderRadius: '20px',
                                            padding: '8px 16px',
                                            fontSize: '14px',
                                            fontWeight: 'bold',
                                            color: 'white',
                                            zIndex: 4,
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                        }}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 2.5 }}
                                    >
                                        {currentImageIndex + 1} / {images.length}
                                    </motion.div>
                                </div>
                            </ImageContainer3D>

                        {/* Content Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 1.2, duration: 1, type: "spring", stiffness: 80 }}
                        >
                            <GlassCard
                                whileHover={{ 
                                    y: -5,
                                    boxShadow: '0 30px 60px rgba(138, 43, 226, 0.2)',
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <Typography 
                                    variant="h4"
                                    sx={{
                                        fontFamily: 'Gilroy Bold',
                                        color: '#8a2be2',
                                        marginBottom: '20px',
                                        fontSize: { xs: '1.5rem', md: '2rem' },
                                        transition: 'color 0.3s',
                                        '&:hover': {
                                            color: '#222',
                                        },
                                    }}
                                >
                                    <TypewriterText delay={2000}>Hello, World! 👋</TypewriterText>
                                </Typography>
                                
                                <Typography 
                                    sx={{
                                        fontFamily: 'Gilroy Light',
                                        color: '#333',
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        lineHeight: 1.7,
                                        marginBottom: '20px',
                                        textAlign: 'justify'
                                    }}
                                >
                                    <TypewriterText delay={3000}>{data.information.whoami}</TypewriterText>
                                </Typography>
                                
                                <Typography 
                                    sx={{
                                        fontFamily: 'Gilroy Light',
                                        color: '#333',
                                        fontSize: { xs: '0.95rem', md: '1rem' },
                                        lineHeight: 1.6,
                                        marginBottom: '30px',
                                        textAlign: 'justify'
                                    }}
                                >
                                    <TypewriterText delay={4000}>{data.information.description}</TypewriterText>
                                </Typography>

                                {/* Skills Section */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 5, duration: 0.8 }}
                                >
                                    <Typography 
                                        variant="h6"
                                        sx={{
                                            fontFamily: 'Gilroy Bold',
                                            color: '#8a2be2',
                                            marginBottom: '15px',
                                            transition: 'color 0.3s',
                                            '&:hover': {
                                                color: '#222',
                                            },
                                        }}
                                    >
                                        Core Technologies
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {skills.map((skill, index) => (
                                            <SkillChip
                                                key={skill}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                                transition={{ delay: 5.5 + index * 0.1, duration: 0.3 }}
                                                whileHover={{ 
                                                    scale: 1.1,
                                                    rotate: [0, -10, 10, 0],
                                                    transition: { duration: 0.5 }
                                                }}
                                            >
                                                {skill}
                                            </SkillChip>
                                        ))}
                                    </Box>
                                </motion.div>
                            </GlassCard>
                        </motion.div>
                    </motion.div>
                </Container>
            </Box>
    );
}

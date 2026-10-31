import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';

import { data } from '../../data';

// Styled components with purple theme
const ContactContainer = styled(motion.div)(({ theme }) => ({
    background: 'var(--color-contact-bg)',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, rgba(74, 20, 140, 0.1) 0%, rgba(225, 190, 231, 0.2) 100%)',
        zIndex: 0,
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'radial-gradient(circle, rgba(138, 43, 226, 0.1) 0%, transparent 50%)',
        animation: 'float 20s ease-in-out infinite',
        zIndex: 0,
    },
    '@keyframes float': {
        '0%, 100%': {
            transform: 'translate(-50%, -50%) rotate(0deg)',
        },
        '50%': {
            transform: 'translate(-30%, -70%) rotate(180deg)',
        },
    },
}));

const ContactCard = styled(motion.div)(({ theme }) => ({
    position: 'relative',
    background: 'var(--color-contact-card-bg)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '20px',
    padding: '20px',
    margin: '15px',
    minWidth: '280px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
        transform: 'translateX(-100%)',
        transition: 'transform 0.6s ease',
        zIndex: 1,
    },
    '&:hover': {
        transform: 'translateY(-10px) scale(1.05)',
        boxShadow: '0 20px 40px rgba(74, 20, 140, 0.3)',
        border: '1px solid rgba(138, 43, 226, 0.5)',
        '&::before': {
            transform: 'translateX(100%)',
        },
    },
}));

const FloatingIcon = styled(motion.div)(({ theme }) => ({
    position: 'absolute',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'var(--color-contact-floating-icon-bg)',
    opacity: 0.1,
    zIndex: 0,
}));

const PulsingDot = styled(motion.div)(({ theme }) => ({
    position: 'absolute',
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    background: 'var(--color-contact-dot-bg)',
    zIndex: 0,
}));

export default function Contact() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 100, 
            rotateX: -15,
            scale: 0.8
        },
        visible: { 
            opacity: 1, 
            y: 0, 
            rotateX: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        },
        hover: {
            y: -10,
            scale: 1.05,
            rotateY: 5,
            boxShadow: "0 25px 50px rgba(74, 20, 140, 0.4)",
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: { 
            scale: 1, 
            rotate: 0,
            transition: {
                delay: 0.5,
                duration: 0.6,
                ease: "backOut"
            }
        },
        hover: {
            scale: 1.2,
            rotate: 360,
            transition: {
                duration: 0.6,
                ease: "easeInOut"
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                delay: 0.7,
                duration: 0.5
            }
        }
    };

    // Generate floating background elements
    const floatingElements = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 4,
    }));

    const dotElements = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 3,
    }));

    return (
        <ContactContainer
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            sx={{
                px: { xs: 3, sm: 10 },
                py: { xs: 5, sm: 10 },
                position: 'relative',
                minHeight: '400px',
            }}
        >
            {/* Floating background elements */}
            {floatingElements.map((element) => (
                <FloatingIcon
                    key={`floating-${element.id}`}
                    style={{
                        left: `${element.x}%`,
                        top: `${element.y}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                        rotate: [0, 360],
                        scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                        delay: element.delay,
                        duration: element.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Pulsing dots */}
            {dotElements.map((dot) => (
                <PulsingDot
                    key={`dot-${dot.id}`}
                    style={{
                        left: `${dot.x}%`,
                        top: `${dot.y}%`,
                    }}
                    animate={{
                        scale: [0, 2, 0],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        delay: dot.delay,
                        duration: dot.duration,
                        repeat: Infinity,
                        ease: "easeOut",
                    }}
                />
            ))}

            <Container sx={{ position: 'relative', zIndex: 2 }}>
                {/* Animated Title */}
                <motion.div
                    initial={{ opacity: 0, y: -50, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 1, ease: "backOut" }}
                    style={{ textAlign: 'center', marginBottom: '50px' }}
                >
                    <Typography
                        variant="h2"
                        component={motion.h2}
                        fontFamily="var(--font-gilroy-bold)"
                        sx={{
                            background: 'var(--color-contact-title-bg)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textAlign: 'center',
                            mb: 2,
                            textShadow: 'var(--color-contact-title-shadow)',
                            fontSize: { xs: '2.5rem', md: '3.5rem' }
                        }}
                        whileHover={{
                            scale: 1.05,
                            textShadow: 'var(--color-contact-title-shadow-hover)',
                        }}
                    >
                        Let's Connect
                    </Typography>
                    
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '120px' } : {}}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        style={{
                            height: '4px',
                            background: 'var(--color-contact-title-underline)',
                            margin: '0 auto 40px',
                            borderRadius: '2px',
                            boxShadow: 'var(--color-contact-title-underline-shadow)',
                        }}
                    />
                </motion.div>

                {/* Contact Cards */}
                <motion.div
                    variants={containerVariants}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '20px',
                    }}
                >
                    {data.information.profiles.map((profile, index) => (
                        <ContactCard
                            key={`contact-${profile.media}-${index}`}
                            variants={cardVariants}
                            whileHover="hover"
                            onHoverStart={() => setHoveredCard(index)}
                            onHoverEnd={() => setHoveredCard(null)}
                            onClick={() => window.open(profile.url, '_blank')}
                        >
                            <motion.div style={{ position: 'relative', zIndex: 2 }}>
                                <CardHeader
                                    avatar={
                                        <motion.div
                                            variants={iconVariants}
                                            whileHover="hover"
                                        >
                                            <Avatar 
                                                src={profile.icon} 
                                                sx={{
                                                    width: 56,
                                                    height: 56,
                                                    border: '3px solid rgba(138, 43, 226, 0.3)',
                                                    boxShadow: '0 8px 20px rgba(74, 20, 140, 0.2)',
                                                }}
                                            />
                                        </motion.div>
                                    }
                                    title={
                                        <motion.div variants={textVariants}>
                                            <Typography 
                                                variant="h6" 
                                                fontFamily="var(--font-gilroy-bold)"
                                                sx={{
                                                    color: 'var(--color-contact-card-title)',
                                                    fontSize: '1.3rem'
                                                }}
                                            >
                                                {profile.media}
                                            </Typography>
                                        </motion.div>
                                    }
                                    subheader={
                                        <motion.div variants={textVariants}>
                                            <Typography 
                                                variant="body2" 
                                                fontFamily="var(--font-gilroy-light)"
                                                sx={{
                                                    color: 'var(--color-contact-card-link)',
                                                    wordBreak: 'break-all',
                                                    fontSize: '0.9rem'
                                                }}
                                            >
                                                {profile.url}
                                            </Typography>
                                        </motion.div>
                                    }
                                />
                            </motion.div>

                            {/* Hover glow effect */}
                            <AnimatePresence>
                                {hoveredCard === index && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        style={{
                                            position: 'absolute',
                                            top: '-10px',
                                            left: '-10px',
                                            right: '-10px',
                                            bottom: '-10px',
                                            background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(225, 190, 231, 0.2))',
                                            borderRadius: '25px',
                                            zIndex: 0,
                                            filter: 'blur(20px)',
                                        }}
                                    />
                                )}
                            </AnimatePresence>
                        </ContactCard>
                    ))}
                </motion.div>

                {/* Bottom decorative element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 2, duration: 1 }}
                    style={{
                        textAlign: 'center',
                        marginTop: '60px',
                    }}
                >
                    <motion.div
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{
                            width: '80px',
                            height: '80px',
                            border: '3px solid rgba(138, 43, 226, 0.3)',
                            borderTop: '3px solid #8a2be2',
                            borderRadius: '50%',
                            margin: '0 auto',
                            background: 'linear-gradient(135deg, rgba(225, 190, 231, 0.1), rgba(206, 147, 216, 0.1))',
                        }}
                    />
                </motion.div>
            </Container>
        </ContactContainer>
    );
}
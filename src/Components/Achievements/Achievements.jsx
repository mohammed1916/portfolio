import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedSectionHeading from '../common/AnimatedSectionHeading';
import { data } from '../../data';

export default function Achievements() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <Box
            ref={ref}
            px={{ xs: 3, sm: 10 }}
            py={{ xs: 5, sm: 10 }}
            bgcolor={'var(--color-bg)'}
            sx={{
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: 'var(--color-primary)',
                    opacity: 0.04,
                    zIndex: 0,
                },
            }}
        >
            <Container sx={{ position: 'relative', zIndex: 1 }}>
                <AnimatedSectionHeading color={'var(--color-typewriter-border)'}>Achievements</AnimatedSectionHeading>

                <Box
                    sx={{
                        mt: 3,
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                        gap: 2.5,
                    }}
                >
                    {data.achievements.map((item, index) => (
                        <motion.div
                            key={`achievement-${index}`}
                            initial={{ opacity: 0, y: 26 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.12, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            style={{
                                display: 'flex',
                                gap: '14px',
                                alignItems: 'flex-start',
                                padding: '22px',
                                borderRadius: '18px',
                                background: 'linear-gradient(145deg, var(--color-card-bg) 0%, var(--color-card-bg2) 100%)',
                                border: '1px solid var(--color-secondary)',
                                boxShadow: '0 12px 32px var(--color-particle-shadow)',
                            }}
                        >
                            <EmojiEventsOutlinedIcon
                                sx={{ color: 'var(--color-typewriter-border)', flexShrink: 0, mt: '2px' }}
                            />
                            <Typography
                                sx={{
                                    fontFamily: 'var(--font-gilroy-light)',
                                    color: 'var(--color-text)',
                                    fontSize: '0.98rem',
                                    lineHeight: 1.6,
                                }}
                            >
                                {item}
                            </Typography>
                        </motion.div>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

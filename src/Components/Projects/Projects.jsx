
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import AnimatedSectionHeading from '../common/AnimatedSectionHeading';
import { data } from '../../data';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import
{
    useNavigate
} from "react-router-dom";

export default function Projects()
{
    let navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('All');
    
    const nav = (index) =>
    {
        navigate(`/projectpage/${index}`);
    };

    // Get unique project types for tabs
    const projectTypes = ['All', ...new Set(data.projects.map(project => project.type))];
    
    // Filter projects based on active tab
    const filteredProjects = activeTab === 'All' 
        ? data.projects 
        : data.projects.filter(project => project.type === activeTab);

    return (
        <>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                // bgcolor={'var(--color-secondary)'}
                color={'var(--color-heading)'}
                sx={{
                    // background: 'linear-gradient(135deg, var(--color-bg) 0%, var(--color-accent) 50%, var(--color-secondary) 100%)',
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 0,
                    },
                }}
            >
                <Container sx={{ width: '100%', position: 'relative', zIndex: 1 }}>
                    <AnimatedSectionHeading color={'var(--color-typewriter-border)'}>Projects</AnimatedSectionHeading>
                    
                    {/* Smooth Tabs */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '40px',
                            position: 'relative',
                            background: 'var(--color-card-bg)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '50px',
                            padding: '8px',
                            border: '1px solid var(--color-secondary)',
                            boxShadow: '0 8px 32px var(--color-particle-shadow)',
                            overflow: 'hidden',
                        }}
                    >
                        {projectTypes.map((type) => (
                            <Box
                                key={type}
                                component={motion.button}
                                onClick={() => setActiveTab(type)}
                                sx={{
                                    position: 'relative',
                                    padding: '12px 24px',
                                    margin: '0 4px',
                                    border: 'none',
                                    background: 'transparent',
                                    cursor: 'pointer',
                                    borderRadius: '25px',
                                    fontFamily: "var(--font-gilroy-bold)",
                                    fontSize: '14px',
                                    fontWeight: activeTab === type ? 'bold' : 'normal',
                                    color: activeTab === type ? '#fff' : 'var(--color-heading-hover)',
                                    transition: 'color 0.3s ease',
                                    zIndex: 2,
                                    minWidth: '80px',
                                    whiteSpace: 'nowrap',
                                    '&:hover': {
                                        color: activeTab === type ? 'black' : 'var(--color-heading-hover)',
                                    },
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {activeTab === type && (
                                    <motion.div
                                        layoutId="activeTab"
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: 'linear-gradient(135deg, #8a2be2, #dda0dd)',
                                            borderRadius: '25px',
                                            zIndex: -1,
                                            boxShadow: '0 8px 20px rgba(138, 43, 226, 0.3)',
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 30
                                        }}
                                    />
                                )}
                                {type}
                            </Box>
                        ))}
                    </Box>

                    {/* Animated Projects Container */}
                    <motion.div
                        layout
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <Box 
                            display={'flex'} 
                            flexWrap={'wrap'} 
                            justifyContent='space-evenly' 
                            bgcolor={'var(--color-bg)'}
                            color={'var(--color-heading)'}
                            borderRadius={'20px'} 
                            padding={'20px'}
                            sx={{
                                background: 'linear-gradient(145deg, var(--color-card-bg) 0%, var(--color-card-bg2) 100%)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid var(--color-secondary)',
                                boxShadow: '0 8px 32px var(--color-particle-shadow)',
                                minHeight: '400px',
                            }}
                        >
                            <AnimatePresence mode="wait">
                                {filteredProjects.map((item, index) => (
                                    <motion.div
                                        key={`${activeTab}-${item.title}`}
                                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.8, y: -20 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                            ease: [0.4, 0, 0.2, 1]
                                        }}
                                        layout
                                    >
                                        <Card 
                                            onClick={() => nav(data.projects.findIndex(p => p.title === item.title))} 
                                            sx={{ 
                                                maxWidth: 280, 
                                                padding: '15px', 
                                                margin: '20px', 
                                                borderRadius: '20px',
                                                // background: 'linear-gradient(135deg, var(--color-bg) 0%, var(--color-accent) 50%, var(--color-secondary) 100%)',
                                                border: '1px solid var(--color-secondary)',
                                                boxShadow: '0 8px 32px var(--color-particle-shadow)',
                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                ":hover": {
                                                    boxShadow: '0 8px 32px var(--color-particle-shadow)',
                                                    transform: 'translateY(-5px)',
                                                    borderColor: '1px solid var(--color-accent)',
                                                }
                                            }} 
                                            className="project-card cursor-view"
                                        >
                                            <CardActionArea sx={{ borderRadius: '15px' }}>
                                                <CardMedia
                                                    component="img"
                                                    height="200"
                                                    image={item.thumbnail}
                                                    sx={{ 
                                                        borderRadius: '15px',
                                                        transition: 'transform 0.3s ease',
                                                        '&:hover': {
                                                            transform: 'scale(1.05)',
                                                        }
                                                    }}
                                                />
                                                <CardContent sx={{ padding: '20px' }}>
                                                    <Typography 
                                                        fontFamily={'Gilroy Bold'} 
                                                        color={'#4a148c'} 
                                                        gutterBottom 
                                                        variant="h6" 
                                                        component="div" 
                                                        textAlign={'center'}
                                                        sx={{ 
                                                            marginBottom: '8px',
                                                            fontSize: '1.1rem'
                                                        }}
                                                    >
                                                        {item.title}
                                                    </Typography>
                                                    <Box
                                                        sx={{
                                                            display: 'inline-block',
                                                            padding: '4px 12px',
                                                            borderRadius: '15px',
                                                            // background: 'linear-gradient(135deg, var(--color-bg) 0%, var(--color-accent) 50%, var(--color-secondary) 100%)',
                                                            border: '1px solid var(--color-secondary)',
                                                            boxShadow: '0 8px 32px var(--color-particle-shadow)',
                                                            fontSize: '0.8rem',
                                                            fontFamily: "var(--font-gilroy-light)",
                                                            color: 'var(--color-typewriter)',
                                                            margin: '0 auto',
                                                            width: 'fit-content',
                                                        }}
                                                    >
                                                        {item.type}
                                                    </Box>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </Box>
                    </motion.div>
                </Container>
            </Box>
        </>
    );
}
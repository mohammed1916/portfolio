import React, { useEffect, useRef, useState } from 'react';
import { Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import '../../index.css';

const AnimatedSectionHeading = ({ children, ...props }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [isInView, hasAnimated]);

    // Split text into characters for animation
    const text = children.toString();
    const characters = text.split('');

    return (
        <div ref={ref} style={{ overflow: 'hidden' }}>
            <Typography
                component={motion.div}
                textAlign="center"
                textTransform="uppercase"
                fontFamily="var(--font-gilroy-bold)"
                fontSize="40px"
                color="var(--color-heading)"
                pt={{ xs: 1, sm: 2 }}
                {...props}
                style={{
                    display: 'inline-block',
                    position: 'relative',
                    background: 'transparent',
                }}
            >
                {characters.map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ 
                            opacity: 0, 
                            y: 50,
                            rotateX: -90,
                            scale: 0.8
                        }}
                        animate={hasAnimated ? { 
                            opacity: 1, 
                            y: 0,
                            rotateX: 0,
                            scale: 1
                        } : {}}
                        transition={{
                            delay: index * 0.05,
                            duration: 0.6,
                            ease: [0.2, 0.65, 0.3, 0.9],
                            type: "spring",
                            stiffness: 100,
                            damping: 12
                        }}
                        style={{
                            display: 'inline-block',
                            transformOrigin: 'center bottom',
                            transformStyle: 'preserve-3d',
                        }}
                        whileHover={{
                            scale: 1.1,
                            color: 'var(--color-heading-hover)',
                            textShadow: '0 0 8px var(--color-secondary)',
                            transition: { duration: 0.2 }
                        }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                ))}
                {/* Animated underline */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={hasAnimated ? { width: '80px', opacity: 1 } : {}}
                    transition={{ delay: characters.length * 0.05 + 0.3, duration: 0.8 }}
                    style={{
                        position: 'absolute',
                        bottom: '-8px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        height: '3px',
                        background: 'linear-gradient(90deg, var(--color-heading), var(--color-secondary), var(--color-heading))',
                        borderRadius: '2px',
                        boxShadow: '0 0 10px var(--color-secondary)',
                    }}
                />
            </Typography>
        </div>
    );
};

export default AnimatedSectionHeading;

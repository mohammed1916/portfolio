import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AnimatedSectionHeading from '../common/AnimatedSectionHeading';

import { data } from '../../data';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Skills()
{
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) =>
    {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor={'var(--color-footer-bg)'}
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
                        background: 'var(--color-particle-shadow)',
                        opacity: 0.05,
                        zIndex: 0,
                    },
                }}
            >
                <Container sx={{ width: '100%', position: 'relative', zIndex: 1 }}>
                    <AnimatedSectionHeading>Skills</AnimatedSectionHeading>
                    <Box 
                        bgcolor={'var(--color-card-bg)'} 
                        borderRadius={'20px'} 
                        padding={'10px'}
                        sx={{
                            background: 'linear-gradient(145deg, var(--color-card-bg) 0%, var(--color-card-bg2) 100%)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid var(--color-secondary)',
                            boxShadow: '0 8px 32px var(--color-particle-shadow)',
                        }}
                    >
                        {data.skills.map((object, index) => (
                            <Accordion 
                                key={index + object} 
                                expanded={expanded === `panel${index}`} 
                                onChange={handleChange(`panel${index}`)}
                                className="skills-item"
                            >
                                <AccordionSummary 
                                    aria-controls={`panel${index}d-content`} 
                                    id={`panel${index}d-header`}
                                    className="expandable skills-accordion-header"
                                >
                                    <Typography fontFamily="var(--font-gilroy-bold)" color={'var(--color-accent)'}>{object.type}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {/* Dynamically render all skill level categories */}
                                    {Object.entries(object).map(([key, value]) => {
                                        // Skip the 'type' key as it's used for the header
                                        if (key === 'type') return null;
                                        return (
                                            <Typography key={key} fontFamily="var(--font-gilroy-light)" color={'var(--color-text)'} sx={{ mb: 1 }}>
                                                {`${key}: ${value}`}
                                            </Typography>
                                        );
                                    })}
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </Container>
            </Box>
        </>


    );
}

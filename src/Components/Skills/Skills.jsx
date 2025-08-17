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
                    <AnimatedSectionHeading>Skills</AnimatedSectionHeading>
                    <Box 
                        bgcolor={'rgba(255, 255, 255, 0.8)'} 
                        borderRadius={'20px'} 
                        padding={'10px'}
                        sx={{
                            background: 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(225,190,231,0.3) 100%)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(225, 190, 231, 0.3)',
                            boxShadow: '0 8px 32px rgba(74, 20, 140, 0.1)',
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
                                    <Typography fontFamily={'Gilroy Bold'}>{object.type}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {/* Dynamically render all skill level categories */}
                                    {Object.entries(object).map(([key, value]) => {
                                        // Skip the 'type' key as it's used for the header
                                        if (key === 'type') return null;
                                        
                                        return (
                                            <Typography key={key} fontFamily={'Gilroy Light'} sx={{ mb: 1 }}>
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

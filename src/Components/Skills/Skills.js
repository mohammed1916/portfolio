import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

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
                color={'white'} >
                <Container sx={{ width: '100%' }}>
                    <Typography textAlign="center" fontFamily={'Gilroy Bold'} fontSize={'40px'} color={'black'} p={{ xs: 1, sm: 2 }}>Skills</Typography>
                    <Box bgcolor={'#eee'} borderRadius={'20px'} padding={'10px'}>
                        {data.skills.map((object, index) => (
                            <Accordion key={index + object} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                                <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
                                    <Typography fontFamily={'Gilroy Bold'}>{object.type}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography fontFamily={'Gilroy Light'}>
                                        {`Knowledge in Advance Topics: ${object['Knowledge in Advance Topics']}`}
                                    </Typography>
                                    <Typography fontFamily={'Gilroy Light'}>
                                        {`Knowledge in Main Concepts: ${object['Knowledge in Main Concepts']}`}
                                    </Typography>
                                    <Typography fontFamily={'Gilroy Light'}>
                                        {`Beginner: ${object['Beginner']}`}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </Container>
            </Box>
        </>


    );
}

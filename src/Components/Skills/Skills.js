import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { ref, child, get } from "firebase/database";
import { database } from '../../firebase-config';

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

var skillsItems = [];
export default function Skills() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const params = useParams();
    var user = params.username;

    const dbRef = ref(database);

    const [type, settype] = useState([]);
    const [KnowledgeInAdvanceTopics, setKnowledgeInAdvanceTopics] = useState([]);
    const [KnowledgeInMainConcepts, setKnowledgeInMainConcepts] = useState([]);
    const [Beginner, setBeginner] = useState([]);

    useEffect(() => {
        get(child(dbRef, `${user}/skillsinfo/skills`)).then((snapshot) => {
            console.log("UserID", user);
            if (snapshot.exists()) {
                snapshot.forEach(function (item) {
                    var itemVal = item.val();
                    skillsItems.push(itemVal);
                    console.log("val ...", itemVal);
                });
                // console.log("educationItems[0][Program]", educationItems[0]["Program"]);
                // console.log("educationItems", educationItems.length);
                skillsItems.map(
                    (object, index) => (
                        setValues(index)
                    )
                );
            } else {
                console.log("No data available in Skills.js");
            }
        }).catch((error) => {
            console.error("error ...", error);
        });
    }, []);

    function setValues(i) {
        settype(oldArray => [...oldArray, skillsItems[i]["type"]]);
        setKnowledgeInAdvanceTopics(oldArray => [...oldArray, skillsItems[i]["KnowledgeInAdvanceTopics"]]);
        setKnowledgeInMainConcepts(oldArray => [...oldArray, skillsItems[i]["KnowledgeInMainConcepts"]]);
        setBeginner(oldArray => [...oldArray, skillsItems[i]["Beginner"]]);
        console.log(type[i]);
    }


    return (
        <>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor={'white'}
                color={'white'} >
                <Container sx={{ width: '100%' }}>
                    <Typography textAlign="center" fontFamily={'Righteous'} fontSize={'40px'} color={'black'} pt={{ xs: 1, sm: 2 }}>Skills</Typography>
                    <Box bgcolor={'#eee'} borderRadius={'20px'} padding={'10px'}>

                        <Accordion key={0} expanded={expanded === `panel${0}`} onChange={handleChange(`panel${0}`)}>
                            <AccordionSummary aria-controls={`panel${0}d-content`} id={`panel${0}d-header`}>
                                <Typography>{type[0]}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {`Knowledge in Advance Topics: ${KnowledgeInAdvanceTopics[0]}`}
                                </Typography>
                                <Typography>
                                    {`Knowledge in Main Concepts: ${KnowledgeInMainConcepts[0]}`}
                                </Typography>
                                <Typography>
                                    {`Beginner: ${Beginner[0]}`}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion key={1} expanded={expanded === `panel${1}`} onChange={handleChange(`panel${1}`)}>
                            <AccordionSummary aria-controls={`panel${1}d-content`} id={`panel${1}d-header`}>
                                <Typography>{type[1]}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {`Knowledge in Advance Topics: ${KnowledgeInAdvanceTopics[1]}`}
                                </Typography>
                                <Typography>
                                    {`Knowledge in Main Concepts: ${KnowledgeInMainConcepts[1]}`}
                                </Typography>
                                <Typography>
                                    {`Beginner: ${Beginner[1]}`}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion key={2} expanded={expanded === `panel${2}`} onChange={handleChange(`panel${2}`)}>
                            <AccordionSummary aria-controls={`panel${2}d-content`} id={`panel${2}d-header`}>
                                <Typography>{type[2]}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {`Knowledge in Advance Topics: ${KnowledgeInAdvanceTopics[2]}`}
                                </Typography>
                                <Typography>
                                    {`Knowledge in Main Concepts: ${KnowledgeInMainConcepts[2]}`}
                                </Typography>
                                <Typography>
                                    {`Beginner: ${Beginner[2]}`}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </Box>
                </Container>
            </Box>
        </>


    );
}

import * as React from 'react';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
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
var educationItems = [];
export default function Education() {
    const params = useParams();
    var user = params.username;
    const dbRef = ref(database);
    const [InstitutionPlaceHolder, setInstitutionPlaceholder] = React.useState([]);
    const [ProgramPlaceHolder, setProgramPlaceholder] = React.useState([]);
    const [YearOfPassingPlaceHolder, setYearOfPassingPlaceholder] = React.useState([]);
    const [GradePlaceHolder, setGradePlaceholder] = React.useState([]);
    const [websitePlaceHolder, setwebsitePlaceholder] = React.useState([]);

    useEffect(() => {
        get(child(dbRef, `${user}/educationinfo/education`)).then((snapshot) => {
            console.log("UserID", user);
            if (snapshot.exists()) {
                snapshot.forEach(function (item) {
                    var itemVal = item.val();
                    educationItems.push(itemVal);
                    // console.log("val ...", itemVal);
                });
                // console.log("educationItems[0][Program]", educationItems[0]["Program"]);
                console.log("educationItems", educationItems.length);
                educationItems.map(
                    (object, index) => (
                        setValues(index)
                    )
                );
            } else {
                console.log("No data available in Education.js");
            }
        }).catch((error) => {
            console.error("error ...", error);
        });
    }, []);

    function setValues(i) {
        setInstitutionPlaceholder(oldArray => [...oldArray, educationItems[i]["Institution"]]);
        setProgramPlaceholder(oldArray => [...oldArray, educationItems[i]["Program"]]);
        setYearOfPassingPlaceholder(oldArray => [...oldArray, educationItems[i]["YearOfPassing"]]);
        setGradePlaceholder(oldArray => [...oldArray, educationItems[i]["Grade"]]);
        setwebsitePlaceholder(oldArray => [...oldArray, educationItems[i]["website"]]);
        // console.log(InstitutionPlaceHolder[i]);
    }


    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
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
                    <Typography textAlign="center" fontFamily={'Righteous'} fontSize={'40px'} color={'black'} pt={{ xs: 1, sm: 2 }}>Education</Typography>
                    <Box bgcolor={'#eee'} borderRadius={'20px'} padding={'10px'}>
                        {educationItems.map((item, index) => (
                            <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                                <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
                                    <Typography>{item.Program}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {`Institution: ${item.Institution}`}
                                    </Typography>
                                    <Typography>
                                        {`Grade: ${item.Grade}`}
                                    </Typography>
                                    <Typography>
                                        {`Year of Passing: ${item.YearOfPassing}`}
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

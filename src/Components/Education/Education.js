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
import { getDatabase, ref, child, get } from "firebase/database";

import { data } from '../../data'

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
    const dbRef = ref(getDatabase());
    const [InstitutionPlaceHolder, setInstitutionPlaceholder] = React.useState([]);
    const [ProgramPlaceHolder, setProgramPlaceholder] = React.useState([]);
    const [YearOfPassingPlaceHolder, setYearOfPassingPlaceholder] = React.useState([]);
    const [GradePlaceHolder, setGradePlaceholder] = React.useState([]);
    const [websitePlaceHolder, setwebsitePlaceholder] = React.useState([]);
    var data;
    // get(child(dbRef, `${user}/educationinfo`)).then((snapshot) => {
    //     console.log("UserID", user);
    //     if (snapshot.exists()) {
    //         console.log("val ...", snapshot.val());
    //         setInstitutionPlaceholder(snapshot.child("/education/Institution").val());
    //         setProgramPlaceholder(snapshot.child("/education/Program").val());
    //         setYearOfPassingPlaceholder(snapshot.child("/education/YearOfPassing").val());
    //         setGradePlaceholder(snapshot.child("/education/Grade").val());
    //         setwebsitePlaceholder(snapshot.child("/education/website").val());
    //         console.log("InstitutionPlaceHolder", InstitutionPlaceHolder);
    //     } else {
    //         console.log("No data available in Education.js");
    //     }
    // }).catch((error) => {
    //     console.error("error ...", error);
    // });
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

    const loop = (times, callback) => {
        for (let i = 0; i < times; i++) {
            callback(i);
        }
    };

    function setValues(i) {
        setInstitutionPlaceholder(oldArray => [...oldArray, educationItems[i]["Institution"]]);
        setProgramPlaceholder(oldArray => [...oldArray, educationItems[i]["Program"]]);
        setYearOfPassingPlaceholder(oldArray => [...oldArray, educationItems[i]["YearOfPassing"]]);
        setGradePlaceholder(oldArray => [...oldArray, educationItems[i]["Grade"]]);
        setwebsitePlaceholder(oldArray => [...oldArray, educationItems[i]["website"]]);
        // console.log(InstitutionPlaceHolder[i]);
    }

    // var ref = firebase.database().ref().child('/scenes/' + projId);
    // ref.once('value', function (snap) {
    //     snap.forEach(function (item) {
    //         var itemVal = item.val();
    //         keys.push(itemVal);
    //     });
    // });

    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    console.log(InstitutionPlaceHolder[0]);
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
                        <Accordion key={0} expanded={expanded === `panel${0}`} onChange={handleChange(`panel${0}`)}>
                            <AccordionSummary aria-controls={`panel${0}d-content`} id={`panel${0}d-header`}>
                                <Typography>{ProgramPlaceHolder[0]}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {`Institution: ${InstitutionPlaceHolder[0]}`}
                                </Typography>
                                <Typography>
                                    {`Grade: ${GradePlaceHolder[0]}`}
                                </Typography>
                                <Typography>
                                    {`Year of Passing: ${YearOfPassingPlaceHolder[0]}`}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion key={1} expanded={expanded === `panel${1}`} onChange={handleChange(`panel${1}`)}>
                            <AccordionSummary aria-controls={`panel${1}d-content`} id={`panel${1}d-header`}>
                                <Typography>{ProgramPlaceHolder[1]}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {`Institution: ${InstitutionPlaceHolder[1]}`}
                                </Typography>
                                <Typography>
                                    {`Grade: ${GradePlaceHolder[1]}`}
                                </Typography>
                                <Typography>
                                    {`Year of Passing: ${YearOfPassingPlaceHolder[1]}`}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion key={2} expanded={expanded === `panel${2}`} onChange={handleChange(`panel${2}`)}>
                            <AccordionSummary aria-controls={`panel${2}d-content`} id={`panel${2}d-header`}>
                                <Typography>{ProgramPlaceHolder[2]}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {`Institution: ${InstitutionPlaceHolder[2]}`}
                                </Typography>
                                <Typography>
                                    {`Grade: ${GradePlaceHolder[2]}`}
                                </Typography>
                                <Typography>
                                    {`Year of Passing: ${YearOfPassingPlaceHolder[2]}`}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Container>
            </Box>
        </>


    );
}

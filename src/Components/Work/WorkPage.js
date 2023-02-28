import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import {
    useNavigate
} from "react-router-dom";
import { ref, child, get } from "firebase/database";
import * as React from 'react';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { database } from '../../firebase-config';

var workItems = [];
export default function WorkPage() {
    const params = useParams();
    var user = params.username;

    let navigate = useNavigate();
    const nav = (index) => {
        navigate(`/${user}/home/workpage/${index}`)
    }

    const dbRef = ref(database);
    const [companyPlaceHolder, setcompanyPlaceholder] = React.useState([]);
    const [locationPlaceHolder, setlocationPlaceholder] = React.useState([]);
    const [titlePlaceHolder, settitlePlaceholder] = React.useState([]);
    const [thumbnailPlaceHolder, setthumbnailPlaceholder] = React.useState([]);
    const [datesPlaceHolder, setdatesPlaceholder] = React.useState([]);
    const [descriptionPlaceHolder, setdescriptionPlaceholder] = React.useState([]);

    useEffect(() => {
        get(child(dbRef, `${user}/workinfo/work/`)).then((snapshot) => {
            console.log("UserID", user);
            if (snapshot.exists()) {
                snapshot.forEach(function (item) {
                    var itemVal = item.val();
                    workItems.push(itemVal);
                });
                console.log("workItems", workItems.length);
                workItems.map(
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
        setcompanyPlaceholder(oldArray => [...oldArray, workItems[i]["company"]]);
        setlocationPlaceholder(oldArray => [...oldArray, workItems[i]["location"]]);
        settitlePlaceholder(oldArray => [...oldArray, workItems[i]["title"]]);
        setthumbnailPlaceholder(oldArray => [...oldArray, workItems[i]["thumbnail"]]);
        setdatesPlaceholder(oldArray => [...oldArray, workItems[i]["dates"]]);
        setdescriptionPlaceholder(oldArray => [...oldArray, workItems[i]["description"]]);
    }


    return (
        <>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor={'white'}
                color={'white'} >
                <Container sx={{ width: '100%' }}>
                    <Typography textAlign="center" fontFamily={'Righteous'} fontSize={'40px'} color={'black'} pt={{ xs: 1, sm: 2 }}>Work Experience</Typography>
                    <Box display={'flex'} flexDirection={'column'} bgcolor={'#eee'} borderRadius={'20px'} padding={'10px'}>
                        <img src={thumbnailPlaceHolder[params.i]} />
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {"Job: "}
                            </Typography>
                            <Typography color={'black'} gutterBottom variant="h6" component="div"  >
                                {`${titlePlaceHolder[params.i]}`}
                            </Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {"Company: "}
                            </Typography>
                            <Typography color={'black'} gutterBottom variant="h6" component="div"  >
                                {`${companyPlaceHolder[params.i]}`}
                            </Typography>
                        </Box>

                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`Location:`}
                            </Typography>
                            <Typography color={'black'} gutterBottom variant="h6" component="div"  >
                                {`${locationPlaceHolder[params.i]}`}
                            </Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`Date:`}
                            </Typography>
                            <Typography color={'black'} gutterBottom variant="h6" component="div"  >
                                {`${datesPlaceHolder[params.i]}`}
                            </Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`Description: `}
                            </Typography>
                            <Typography color={'black'} gutterBottom variant="h6" component="div"  >
                                {`${descriptionPlaceHolder[params.i]}`}
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
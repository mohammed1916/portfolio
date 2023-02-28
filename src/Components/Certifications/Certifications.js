import * as React from 'react';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea } from '@mui/material';
import Box from '@mui/material/Box'
import { ref, child, get } from "firebase/database";

import {
    useNavigate
} from "react-router-dom";
import { database } from '../../firebase-config';


var certificateItems = [];
export default function Certifications() {
    const params = useParams();
    var user = params.username;
    let navigate = useNavigate();
    const nav = (index) => {
        navigate(`/${user}/home/certificatepage/${index}`)
    }

    const dbRef = ref(database);
    const [titlePlaceHolder, settitlePlaceholder] = React.useState([]);
    const [datePlaceHolder, setdatePlaceholder] = React.useState([]);
    const [institutionPlaceHolder, setinstitutionPlaceholder] = React.useState([]);
    const [thumbnailPlaceHolder, setthumbnailPlaceholder] = React.useState([]);
    const [descriptionPlaceHolder, setdescriptionPlaceholder] = React.useState([]);

    useEffect(() => {
        get(child(dbRef, `${user}/certificatesinfo/certificates/`)).then((snapshot) => {
            console.log("UserID", user);
            if (snapshot.exists()) {
                snapshot.forEach(function (item) {
                    var itemVal = item.val();
                    certificateItems.push(itemVal);
                    // console.log("val ...", itemVal);
                });
                // console.log("certificateItems[0][date]", certificateItems[0]["date"]);
                console.log("certificateItems", certificateItems.length);
                certificateItems.map(
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
        settitlePlaceholder(oldArray => [...oldArray, certificateItems[i]["title"]]);
        setdatePlaceholder(oldArray => [...oldArray, certificateItems[i]["date"]]);
        setinstitutionPlaceholder(oldArray => [...oldArray, certificateItems[i]["institution"]]);
        setthumbnailPlaceholder(oldArray => [...oldArray, certificateItems[i]["thumbnail"]]);
        setdescriptionPlaceholder(oldArray => [...oldArray, certificateItems[i]["description"]]);
        // console.log(titlePlaceHolder[i]);
    }


    return (
        <>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor={'white'}
                color={'white'} >
                <Container sx={{ width: '100%' }}>
                    <Typography textAlign="center" fontFamily={'Righteous'} fontSize={'40px'} color={'black'} pt={{ xs: 1, sm: 2 }}>Certifications</Typography>
                    <Box display={'flex'} flexWrap={'wrap'} justifyContent='space-evenly' bgcolor={'#eee'} borderRadius={'20px'} padding={'10px'}>
                        {certificateItems.map((item, index) => (
                            <Card key={index} sx={{ maxWidth: 250, padding: '10px', margin: '20px', ":hover": "boxShadow: 0 15px 70px -12px rgba(0,0,0,0.3) " }} onClick={() => nav(index)}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={item.thumbnail}
                                    />
                                    <CardContent>
                                        <Typography color={'black'} gutterBottom variant="h6" component="div" textAlign={'center'}>
                                            {item.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))}
                    </Box>
                </Container>
            </Box>
        </>
    );
}
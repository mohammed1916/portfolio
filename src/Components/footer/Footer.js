import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import MailOutlineIcon from '@mui/icons-material/MailOutline';


import { ref, child, get } from "firebase/database";
import { useParams } from "react-router-dom";
import * as React from 'react';
import { useEffect } from 'react';
import { database } from '../../firebase-config';

var mediaItems = [];
var educationItems = [];
var educationItemsLength = 0;
export default function Footer() {

    const params = useParams();
    var user = params.username;
    const [mediaPlaceHolder, setmediaPlaceholder] = React.useState([]);
    const [urlPlaceHolder, seturlPlaceholder] = React.useState([]);
    const [iconPlaceHolder, seticonPlaceholder] = React.useState([]);
    const dbRef = ref(database);

    useEffect(() => {
        get(child(dbRef, `${user}/socialmediaprofilesinfo/profiles`)).then((snapshot) => {
            console.log("UserID", user);
            if (snapshot.exists()) {
                snapshot.forEach(function (item) {
                    var itemVal = item.val();
                    mediaItems.push(itemVal);
                });
                console.log("mediaItems", mediaItems.length);
                mediaItems.map(
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
        setmediaPlaceholder(oldArray => [...oldArray, mediaItems[i]["media"]]);
        seturlPlaceholder(oldArray => [...oldArray, mediaItems[i]["url"]]);
        seticonPlaceholder(oldArray => [...oldArray, mediaItems[i]["icon"]]);
    }

    //from About.js
    const [namePlaceHolder, setnamePlaceholder] = React.useState();
    const [whoamiPlaceHolder, setWhoamiPlaceholder] = React.useState();
    const [emailPlaceHolder, setemailPlaceholder] = React.useState();


    useEffect(() => {
        get(child(dbRef, `${user}/information`)).then((snapshot) => {
            console.log("UserID", params.username);
            if (snapshot.exists()) {
                console.log("val ...", snapshot.val());
                setnamePlaceholder(snapshot.child("name/").val());
                setWhoamiPlaceholder(snapshot.child("whoami/").val());
                setemailPlaceholder(snapshot.child("email/").val());
            } else {
                console.log("No data available in About.js");
            }
        }).catch((error) => {
            console.error("error ...", error);
        });
    }, []);

    return (
        <Box
            px={{ xs: 3, sm: 10 }}
            py={{ xs: 5, sm: 10 }}
            bgcolor={'slateblue'}
            color={'white'} >
            <Container sx={{ width: '100%' }}>
                <Divider pt={{ xs: 1, sm: 2 }}><Chip label={namePlaceHolder} /></Divider>
                <Grid container spacing={5} pt={{ xs: 2, sm: 4 }}>
                    <Grid item xs={12} sm={6}>
                        <Box borderBottom={2}>Contact</Box>
                        <Box pt={{ xs: 2, sm: 4 }}>
                            <Link href={`mailto:${emailPlaceHolder}`} color="inherit" underline="hover" style={{
                                alignItems: "center",
                                display: "flex"
                            }}>
                                <MailOutlineIcon style={{ paddingRight: "3px" }} />
                                {emailPlaceHolder}
                            </Link>
                        </Box>
                        {mediaItems.map((object, i) => (
                            <Box key={object.media + i} pt={{ xs: 2, sm: 4 }}>
                                <Link href={urlPlaceHolder[i]} color="inherit" underline="hover">
                                    {mediaPlaceHolder[i]}
                                </Link>
                            </Box>
                        ))}

                    </Grid>

                </Grid>
                <Divider />
                <Typography textAlign="center" color={'white'} pt={{ xs: 1, sm: 2 }}>Copyright {new Date().getFullYear()} by {namePlaceHolder}. All Rights Reserved</Typography>
            </Container>
        </Box >
    );
}
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ref, child, get } from "firebase/database";
import * as React from 'react';
import { database } from "../../firebase-config";

export default function About({ userID }) {
    const params = useParams();
    var user = params.username;
    const [imagePlaceHolder, setImagePlaceholder] = React.useState();
    const [whoamiPlaceHolder, setWhoamiPlaceholder] = React.useState();
    const [domainPlaceHolder, setDomainPlaceholder] = React.useState();
    const [descriptionPlaceHolder, setDescriptionPlaceholder] = React.useState();
    const dbRef = ref(database);

    get(child(dbRef, `${user}/information`)).then((snapshot) => {
        console.log("UserID", params.username);
        if (snapshot.exists()) {
            console.log("val ...", snapshot.val());
            setImagePlaceholder(snapshot.child("image/").val());
            setWhoamiPlaceholder(snapshot.child("whoami/").val());
            setDomainPlaceholder(snapshot.child("domain/").val());
            setDescriptionPlaceholder(snapshot.child("description/").val());
            console.log("whoamiPlaceHolder ...", whoamiPlaceHolder);
        } else {
            console.log("No data available in About.js");
        }
    }).catch((error) => {
        console.error("error ...", error);
    });

    return (
        <>
            <Typography textAlign="center" fontFamily={'Righteous'} fontSize={'40px'} color={'black'} bgcolor={'white'} pt={{ xs: 1, sm: 2 }}>About</Typography>
            <Box
                py={{ xs: 5, sm: 10 }}
                bgcolor={'white'}
                color={'black'}
                display={'flex'} flexWrap={'wrap'} flexDirection={'row'} justifyContent='space-evenly'
            >
                <Box padding={'10px'} alignItems={'center'}>

                    <img src={imagePlaceHolder} />
                </Box>

                <Box maxWidth={'500px'} bgcolor={'#eee'} borderRadius={'20px'} padding={'10px'}>
                    <Typography paddingBottom={'10px'}>
                        Hello There!
                    </Typography>
                    <Typography paddingBottom={'10px'}>
                        {whoamiPlaceHolder}
                    </Typography>
                    <Typography paddingBottom={'10px'}>
                        {`Domain: ${domainPlaceHolder}`}
                    </Typography>
                    <Typography paddingBottom={'10px'}>
                        {descriptionPlaceHolder}
                    </Typography>
                </Box>
            </Box >
        </>
    );
}
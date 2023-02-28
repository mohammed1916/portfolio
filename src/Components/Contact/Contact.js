import CardHeader from '@mui/material/CardHeader';
import { Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box'

import { ref, child, get } from "firebase/database";
import { useParams } from "react-router-dom";
import * as React from 'react';
import { useEffect } from 'react';
import { database } from '../../firebase-config';


var mediaItems = [];
export default function Contact() {
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

    return (
        <>
            <Divider sx={{ margin: "20px" }} />
            <Box marginBottom={'20px'} display={'flex'} flexWrap={'wrap'} justifyContent='center'>
                {mediaItems.map((object, index) => (
                    <Box key={index + object} margin={'10px'} bgcolor={'#eee'} borderRadius={'20px'} padding={'10px'}>
                        <a href={urlPlaceHolder[index]} >
                            <CardHeader
                                avatar={
                                    <Avatar src={iconPlaceHolder[index]} />
                                }
                                title={mediaPlaceHolder[index]}
                                subheader={urlPlaceHolder[index]}
                            />
                        </a>
                    </Box>
                ))
                }
            </Box>
        </>
    );
}
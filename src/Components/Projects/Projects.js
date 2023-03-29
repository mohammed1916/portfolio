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
import noImageAvailable from '../../img/icons/noImageAvailable.jpeg'

import {
    useNavigate
} from "react-router-dom";
import { database } from '../../firebase-config';

var projectItems = [];
var projectItemsLength = 0;
export default function Projects() {
    const params = useParams();
    var user = params.username;
    let navigate = useNavigate();
    const nav = (index) => {
        navigate(`/${user}/home/projectpage/${index}`)
    }

    const dbRef = ref(database);
    const [titlePlaceHolder, settitlePlaceholder] = React.useState([]);
    const [typePlaceHolder, settypePlaceholder] = React.useState([]);
    const [linkPlaceHolder, setlinkPlaceholder] = React.useState([]);
    const [thumbnailPlaceHolder, setthumbnailPlaceholder] = React.useState([]);
    const [descriptionPlaceHolder, setdescriptionPlaceholder] = React.useState([]);
    const [galleryPlaceHolder, setgalleryPlaceholder] = React.useState([]);

    useEffect(() => {
        fetch();
    }, []);

    function fetch() {
        get(child(dbRef, `${user}/projectsinfo/projects/`)).then((snapshot) => {
            console.log("UserID", user);
            if (snapshot.exists() && projectItemsLength == 0) {
                snapshot.forEach(function (item) {
                    var itemVal = item.val();
                    projectItems.push(itemVal);
                    // console.log("val ...", itemVal);
                });
                // console.log("projectItems[0][type]", projectItems[0]["type"]);
                console.log("projectItems", projectItems.length);
                projectItemsLength = projectItems.length;
                projectItems.map(
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
    }

    function setValues(i) {
        settitlePlaceholder(oldArray => [...oldArray, projectItems[i]["title"]]);
        settypePlaceholder(oldArray => [...oldArray, projectItems[i]["type"]]);
        setlinkPlaceholder(oldArray => [...oldArray, projectItems[i]["link"]]);
        setthumbnailPlaceholder(oldArray => [...oldArray, projectItems[i]["thumbnail"]]);
        setdescriptionPlaceholder(oldArray => [...oldArray, projectItems[i]["description"]]);
        setgalleryPlaceholder(oldArray => [...oldArray, projectItems[i]["gallery"]]);
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
                    <Typography textAlign="center" fontFamily={'Righteous'} fontSize={'40px'} color={'black'} pt={{ xs: 1, sm: 2 }}>Projects</Typography>
                    <Box display={'flex'} flexWrap={'wrap'} justifyContent='space-evenly' bgcolor={'#eee'} borderRadius={'20px'} padding={'10px'}>
                        {projectItems.map((item, index) => (
                            <Card key={index + index} sx={{ maxWidth: 250, padding: '10px', margin: '20px', ":hover": "boxShadow: 0 15px 70px -12px rgba(0,0,0,0.3)" }} onClick={() => nav(index)} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={item.thumbnail ? item.thumbnail : noImageAvailable}
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
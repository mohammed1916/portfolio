import * as React from 'react';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import { ref, child, get, increment } from "firebase/database";
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea } from '@mui/material';
import { database } from '../../firebase-config';
import noImageAvailable from '../../img/icons/noImageAvailable.jpeg'
import Modal from './Modal';

var projectItems = [];
var projectGalleryItems = [];
export default function ProjectPage() {
    const params = useParams();
    var user = params.username;

    const navigation = useNavigate();

    const dbRef = ref(database);
    const [titlePlaceHolder, settitlePlaceholder] = React.useState([]);
    const [typePlaceHolder, settypePlaceholder] = React.useState([]);
    const [linkPlaceHolder, setlinkPlaceholder] = React.useState([]);
    const [gitlinkPlaceHolder, setgitlinkPlaceholder] = React.useState([]);
    const [thumbnailPlaceHolder, setthumbnailPlaceholder] = React.useState([]);
    const [descriptionPlaceHolder, setdescriptionPlaceholder] = React.useState([]);
    const [galleryPlaceHolder, setgalleryPlaceholder] = React.useState([]);

    useEffect(() => {
        fetch();
    }, []);

    function fetch() {
        get(child(dbRef, `${user}/projectsinfo/projects/`)).then((snapshot) => {
            console.log("UserID", user);
            if (snapshot.exists()) {
                snapshot.forEach(function (item) {
                    var itemVal = item.val();
                    projectItems.push(itemVal);
                    // console.log("val ...", itemVal);
                });
                // console.log("projectItems[0][gallery]", projectItems[0]["gallery"]);
                // console.log("projectItems", projectItems.length);
                projectItems.map(
                    (object, index) => (
                        setValues(index)
                    )
                );
            } else {
                console.log("No data available in ProjectPage.js");
            }
        }).catch((error) => {
            console.error("error ...", error);
        });
        var increment = 0
        get(child(dbRef, `${user}/galleryinfo/gallery/`)).then((snapshot) => {
            console.log("UserID", user);
            if (snapshot.exists()) {
                snapshot.forEach(function (item, index) {
                    var itemVal = item.val();
                    console.log("Increment", increment);
                    if (increment == params.i) {
                        projectGalleryItems.push(itemVal);
                    }
                    increment += 1;

                    console.log("val g...", itemVal);
                });
                // console.log("projectItems[0][gallery]", projectItems[0]["gallery"]);
                // console.log("projectGalleryItems", projectGalleryItems.length);
                projectGalleryItems.map(
                    (object, index) => (
                        setGalleryValues(index)
                    )
                );
            } else {
                console.log("No data available in ProjectPage.js");
            }
        }).catch((error) => {
            console.error("error ...", error);
        });
    }

    function setValues(i) {
        settitlePlaceholder(oldArray => [...oldArray, projectItems[i]["title"]]);
        settypePlaceholder(oldArray => [...oldArray, projectItems[i]["type"]]);
        setlinkPlaceholder(oldArray => [...oldArray, projectItems[i]["link"]]);
        setgitlinkPlaceholder(oldArray => [...oldArray, projectItems[i]["gitlink"]]);
        setthumbnailPlaceholder(oldArray => [...oldArray, projectItems[i]["thumbnail"]]);
        setdescriptionPlaceholder(oldArray => [...oldArray, projectItems[i]["description"]]);
        setgalleryPlaceholder(oldArray => [...oldArray, projectItems[i]["gallery"]]);
    }
    function setGalleryValues(i) {
        setgalleryPlaceholder(oldArray => [...oldArray, projectGalleryItems[i][i]]);
        console.log("projectGalleryItems[i]] ", projectGalleryItems[i][i]);
    }


    return (
        <>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor={'white'}
                color={'white'} >
                <Container sx={{ width: '100%' }}>
                    <Typography textAlign="center" fontFamily={'Righteous'} fontSize={'40px'} color={'black'} pt={{ xs: 1, sm: 2 }}>Project</Typography>
                    <Box display={'flex'} flexDirection={'column'} bgcolor={'#eee'} borderRadius={'20px'} padding={'10px'}>
                        <Typography color={'black'} gutterBottom variant="h5" component="div" textAlign={'center'} paddingBottom={'8px'}>
                            {titlePlaceHolder[params.i]}
                        </Typography>

                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`Application Type:`}
                            </Typography>
                            <Typography color={'black'} gutterBottom variant="h6" component="div"  >
                                {`${typePlaceHolder[params.i]}`}
                            </Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`Link: `}
                            </Typography>
                            <a href={linkPlaceHolder[params.i]}>
                                <Typography color={'black'} gutterBottom variant="h6" component="div"  >
                                    {`${linkPlaceHolder[params.i]}`}
                                </Typography>
                            </a>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`Project Link: `}
                            </Typography>
                            <a href={gitlinkPlaceHolder[params.i]}>
                                <Typography color={'black'} gutterBottom variant="h6" component="div"  >
                                    {`${gitlinkPlaceHolder[params.i]}`}
                                </Typography>
                            </a>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`Description: `}
                            </Typography>
                            <Typography color={'black'} gutterBottom variant="h6" component="div"  >
                                {`${descriptionPlaceHolder[params.i]}`}
                            </Typography>
                        </Box>
                        {projectGalleryItems.length !== 0 && <Typography color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                            Sample Images:
                        </Typography>}
                        <Box display={'flex'} flexWrap={'wrap'} justifyContent='space-evenly' bgcolor={'#eee'} borderRadius={'20px'} padding={'10px'}>
                            {projectGalleryItems.map((item, index) => (
                                <Box display={'flex'} flexWrap={'wrap'} justifyContent='center' >
                                    <Card key={index} sx={{ maxWidth: 250, padding: '10px', margin: '20px', ":hover": "boxShadow: 0 15px 70px -12px rgba(0,0,0,0.3) " }} >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="480"
                                                image={item[0] ? item[0] : noImageAvailable}
                                            />
                                        </CardActionArea>
                                    </Card>
                                    <Card key={index} sx={{ maxWidth: 250, padding: '10px', margin: '20px', ":hover": "boxShadow: 0 15px 70px -12px rgba(0,0,0,0.3) " }} >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="480"
                                                image={item[1] ? item[1] : noImageAvailable}
                                            />
                                        </CardActionArea>
                                    </Card>
                                    <Card key={index} sx={{ maxWidth: 250, padding: '10px', margin: '20px', ":hover": "boxShadow: 0 15px 70px -12px rgba(0,0,0,0.3) " }} >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="480"
                                                image={item[2] ? item[2] : noImageAvailable}
                                            />
                                        </CardActionArea>
                                    </Card>
                                </Box>
                            ))}
                        </Box>

                    </Box>
                    {linkPlaceHolder[params.i] &&
                        <Box key={`${linkPlaceHolder[params.i]}`}>
                            <Modal key={linkPlaceHolder[params.i]} origin={"http://localhost:4000"} url={linkPlaceHolder[params.i]} />
                        </Box>
                    }
                    {gitlinkPlaceHolder[params.i] &&
                        <Box key={`${gitlinkPlaceHolder[params.i]}`}>
                            <Modal key={gitlinkPlaceHolder[params.i]} origin={"http://localhost:4001"} url={gitlinkPlaceHolder[params.i]} />
                        </Box>
                    }
                </Container>
            </Box>
        </>
    );
}
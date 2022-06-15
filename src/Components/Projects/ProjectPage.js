import * as React from 'react';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { getDatabase, ref, child, get } from "firebase/database";
import { useNavigate } from 'react-router-dom';

var projectItems = [];
var fetchData = false;
export default function ProjectPage() {
    const params = useParams();
    var user = params.username;

    const navigation = useNavigate();

    const dbRef = ref(getDatabase());
    const [titlePlaceHolder, settitlePlaceholder] = React.useState([]);
    const [typePlaceHolder, settypePlaceholder] = React.useState([]);
    const [linkPlaceHolder, setlinkPlaceholder] = React.useState([]);
    const [thumbnailPlaceHolder, setthumbnailPlaceholder] = React.useState([]);
    const [descriptionPlaceHolder, setdescriptionPlaceholder] = React.useState([]);
    const [galleryPlaceHolder, setgalleryPlaceholder] = React.useState([[]]);

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
                // console.log("projectItems[0][type]", projectItems[0]["type"]);
                console.log("projectItems", projectItems.length);
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
                                {`Description: `}
                            </Typography>
                            <Typography color={'black'} gutterBottom variant="h6" component="div"  >
                                {`${descriptionPlaceHolder[params.i]}`}
                            </Typography>
                        </Box>
                        <Typography color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                            Sample Images:
                        </Typography>
                        <ImageList variant="masonry" cols={3} gap={8} >

                            <ImageListItem display={'flex'} >
                                <img
                                    src={`${thumbnailPlaceHolder[params.i]}?w=248&fit=crop&auto=format`}
                                    srcSet={`${thumbnailPlaceHolder[params.i]}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    loading="lazy"
                                    alt='image'
                                    style={{ "alignSelf": 'center' }}
                                />
                            </ImageListItem>
                        </ImageList>

                    </Box>
                </Container>
            </Box>
        </>
    );
}
import * as React from 'react';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
// import puppeteer from 'puppeteer';
import { ref, child, get } from "firebase/database";
import { database } from '../../firebase-config';

// async function retrieve() {
//     const browser = await puppeteer.launch()
//     const page = await browser.newPage()
//     await page.goto(`${'https://developer.chrome.com/'}`)
//     // Set screen size
//     await page.setViewport({ width: 1080, height: 1024 });

//     // Type into search box
//     await page.type('.search-box__input', 'automate beyond recorder');

//     // Wait and click on first result
//     const searchResultSelector = '.search-box__link';
//     await page.waitForSelector(searchResultSelector);
//     await page.click(searchResultSelector);

//     // Locate the full title with a unique string
//     const textSelector = await page.waitForSelector(
//         'text/Customize and automate'
//     );
//     const fullTitle = await textSelector.evaluate(el => el.textContent);

//     // Print the full title
//     console.log('The title of this blog post is "%s".', fullTitle);
//     await browser.close()
// }

var certificateItems = [];
export default function CertificatePage() {
    // retrieve()
    const params = useParams();
    var user = params.username;

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
                    <Typography textAlign="center" fontFamily={'Righteous'} fontSize={'40px'} color={'black'} pt={{ xs: 1, sm: 2 }}>Certificate</Typography>
                    <Box display={'flex'} flexDirection={'column'} bgcolor={'#eee'} borderRadius={'20px'} padding={'10px'}>



                        <Typography color={'black'} gutterBottom variant="h5" component="div" textAlign={'center'} paddingBottom={'8px'}>
                            {titlePlaceHolder[params.i]}
                        </Typography>
                        <img src={thumbnailPlaceHolder[params.i]} />
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {"Date: "}
                            </Typography>
                            <Typography color={'black'} gutterBottom variant="h6" component="div"  >
                                {`${datePlaceHolder[params.i]}`}
                            </Typography>
                        </Box>

                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`Institution:`}
                            </Typography>
                            <Typography color={'black'} gutterBottom variant="h6" component="div"  >
                                {`${institutionPlaceHolder[params.i]}`}
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
import React, { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import { JsonForms } from '@jsonforms/react';
import { schema, uischema, initialdata } from './candidate';
import {
    materialRenderers,
    materialCells,
} from '@jsonforms/material-renderers';
import { Button, Grid, Paper } from '@mui/material';
import { getDatabase, ref, child, get, set } from "firebase/database";
import DownloadFooter from '../footer/Download/DownloadFooter';

function handleSave(data, user) {
    const db = getDatabase();
    console.log(data);
    console.log("username : ", user);
    set(ref(db, `${user}/information`), {
        name: data["name"],
        domain: data["domain"],
        image: data["image"],
        email: data["email"],
        whoami: data["whoami"],
        description: data["description"],
        location: data["location"],
    });
}

export default function Form() {
    const [data, setData] = useState(initialdata);
    const params = useParams();
    console.log("params.username: ", params.username);

    return (
        <Fragment>
            <div className='App'>
                <header style={{
                    "backgroundColor": "#222",
                    "padding": "20px",
                    "color": "white"
                }}>
                    <h1>Form</h1>
                    <p >Fill the required details to have a preview of the website</p>
                </header>
            </div>

            <Grid
                container
                justifyContent={'center'}
                spacing={1}
                style={{
                    padding: '3px',
                    width: '100%',
                    paddingTop: "25px",
                    paddingBottom: "100px"
                }}>
                <Paper style={{
                    "width": "90%",
                    paddingLeft: 15,
                    paddingTop: 25,
                    paddingBottom: 25
                }}>
                    <Grid
                        item sm={11}>
                        <div
                            className='Form'
                            style={{
                                margin: 'auto',
                                padding: '10px',
                            }} >
                            <JsonForms
                                schema={schema}
                                uischema={uischema}
                                data={data}
                                renderers={materialRenderers}
                                cells={materialCells}
                                onChange={({ data, _errors }) => setData(data)}
                            />
                        </div >
                        <Button
                            variant="contained"
                            sx={{ mt: 3, mb: 2, display: "flex", alignSelf: "center" }}
                            onClick={() => handleSave(data, params.username)}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Paper>
            </Grid >
            <DownloadFooter userID={params.username} />

        </Fragment>
    );
}
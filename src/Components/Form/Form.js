import React, { Fragment } from 'react';
import { JsonForms } from '@jsonforms/react';
import { informationschema, informationuischema, informationinitialdata } from './information';
import { socialprofilesschema, socialprofilesuischema, socialprofilesinitialdata } from './socialprofiles';
import { educationschema, educationuischema, educationinitialdata } from './education';
import { workschema, workuischema, workinitialdata } from './work';
import { skillsschema, skillsuischema, skillsinitialdata } from './skills';
import { certificatesschema, certificatesuischema, certificatesinitialdata } from './certificates';
import { projectsschema, projectsuischema, projectsinitialdata } from './projects';
import {
    materialRenderers,
    materialCells,
} from '@jsonforms/material-renderers';
import { Button, Grid, Paper } from '@mui/material';
import { getDatabase, ref, set } from "firebase/database";
import DownloadFooter from '../footer/Download/DownloadFooter';
import FormNav from '../Navbar/FormNav';

class Form extends React.Component {

    constructor(props) {
        super(props);
        console.log("this.props.userID", this.props.userID);
        this.state = {
            informationdata: informationinitialdata,
            socialprofilesdata: socialprofilesinitialdata,
            educationdata: educationinitialdata,
            workdata: workinitialdata,
            skillsdata: skillsinitialdata,
            certificatesdata: certificatesinitialdata,
            projectsdata: projectsinitialdata
        };

    }
    update() {
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            console.log(authToken);
        } else {
            alert('Please login first.');
            this.props.navigate('/')
            return;
        }
        const db = getDatabase();
        console.log(this.props.userID);
        set(ref(db, `${this.props.userID}/information`), {
            name: this.state.informationdata["name"],
            domain: this.state.informationdata["domain"],
            image: this.state.informationdata["image"],
            email: this.state.informationdata["email"],
            whoami: this.state.informationdata["whoami"],
            description: this.state.informationdata["description"],
            location: this.state.informationdata["location"],
        });
        console.log(this.state.socialprofilesdata.profiles.length);
        console.log(this.state.socialprofilesdata.profiles[0]["media"]);
        set(ref(db, `${this.props.userID}/socialmediaprofilesinfo`), {
            profiles: this.state.socialprofilesdata["profiles"],
        });
        set(ref(db, `${this.props.userID}/educationinfo`), {
            education: this.state.educationdata["education"],
        });


        set(ref(db, `${this.props.userID}/workinfo`), {
            work: this.state.workdata["work"],

        });

        set(ref(db, `${this.props.userID}/skillsinfo`), {
            skills: this.state.skillsdata["skills"],
        });


        set(ref(db, `${this.props.userID}/projectsinfo`), {
            projects: this.state.projectsdata["projects"],
        });


        set(ref(db, `${this.props.userID}/certificatesinfo`), {
            certificates: this.state.certificatesdata["certificates"],
        });
        alert("Submitted details successfully");
    }

    render() {
        return (
            <>
                <FormNav />
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
                                        schema={informationschema}
                                        uischema={informationuischema}
                                        data={this.state.informationdata}
                                        renderers={materialRenderers}
                                        cells={materialCells}
                                        onChange={({ _errors, data }) => {
                                            this.setState({
                                                informationdata: data
                                            })
                                            console.log("informationdata", this.state.informationdata);
                                        }}
                                    />
                                </div >
                                <div
                                    className='Form'
                                    style={{
                                        margin: 'auto',
                                        padding: '10px',
                                    }} >
                                    <JsonForms
                                        schema={socialprofilesschema}
                                        uischema={socialprofilesuischema}
                                        data={this.state.socialprofilesdata}
                                        renderers={materialRenderers}
                                        cells={materialCells}
                                        onChange={({ _errors, data }) => {
                                            this.setState({
                                                socialprofilesdata: data
                                            })
                                            console.log("socialprofilesdata", this.state.socialprofilesdata);
                                        }}
                                    />
                                </div >
                                <div
                                    className='Form'
                                    style={{
                                        margin: 'auto',
                                        padding: '10px',
                                    }} >
                                    <JsonForms
                                        schema={educationschema}
                                        uischema={educationuischema}
                                        data={this.state.educationdata}
                                        renderers={materialRenderers}
                                        cells={materialCells}
                                        onChange={({ _errors, data }) => {
                                            this.setState({
                                                educationdata: data
                                            })
                                            console.log("educationdata", this.state.educationdata);
                                        }}
                                    />
                                </div >
                                <div
                                    className='Form'
                                    style={{
                                        margin: 'auto',
                                        padding: '10px',
                                    }} >
                                    <JsonForms
                                        schema={workschema}
                                        uischema={workuischema}
                                        data={this.state.workdata}
                                        renderers={materialRenderers}
                                        cells={materialCells}
                                        onChange={({ _errors, data }) => {
                                            this.setState({
                                                workdata: data
                                            })
                                            console.log("workdata", this.state.workdata);
                                        }}
                                    />
                                </div >
                                <div
                                    className='Form'
                                    style={{
                                        margin: 'auto',
                                        padding: '10px',
                                    }} >
                                    <JsonForms
                                        schema={skillsschema}
                                        uischema={skillsuischema}
                                        data={this.state.skillsdata}
                                        renderers={materialRenderers}
                                        cells={materialCells}
                                        onChange={({ _errors, data }) => {
                                            this.setState({
                                                skillsdata: data
                                            })
                                            console.log("skillsdata", this.state.skillsdata);
                                        }}
                                    />
                                </div >
                                <div
                                    className='Form'
                                    style={{
                                        margin: 'auto',
                                        padding: '10px',
                                    }} >
                                    <JsonForms
                                        schema={certificatesschema}
                                        uischema={certificatesuischema}
                                        data={this.state.certificatesdata}
                                        renderers={materialRenderers}
                                        cells={materialCells}
                                        onChange={({ _errors, data }) => {
                                            this.setState({
                                                certificatesdata: data
                                            })
                                            console.log("certificatesdata", this.state.certificatesdata);
                                        }}
                                    />
                                </div >
                                <div
                                    className='Form'
                                    style={{
                                        margin: 'auto',
                                        padding: '10px',
                                    }} >
                                    <JsonForms
                                        schema={projectsschema}
                                        uischema={projectsuischema}
                                        data={this.state.projectsdata}
                                        renderers={materialRenderers}
                                        cells={materialCells}
                                        onChange={({ _errors, data }) => {
                                            this.setState({
                                                projectsdata: data
                                            })
                                            console.log("projectsdata", this.state.projectsdata);
                                        }}
                                    />
                                </div >
                                <Button
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, display: "flex", alignSelf: "center" }}
                                    // onChange={(data) => setInformationData(data)}
                                    onClick={() => this.update()}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Paper>
                    </Grid >
                    <DownloadFooter />
                </Fragment>
            </>
        );
    }
}
export default Form;
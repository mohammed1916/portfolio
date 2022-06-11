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
import {
    useParams
} from "react-router-dom";
import { Button, Grid, Paper, Typography } from '@mui/material';
import { getDatabase, ref, child, get, set, update } from "firebase/database";
import DownloadFooter from '../footer/Download/DownloadFooter';
import FormNav from '../Navbar/FormNav';
import { render } from '@testing-library/react';

class Form extends React.Component {

    constructor(props) {
        super(props);
        console.log("this.props.userID", this.props);
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
            this.navigate('/login')
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
        for (var i = 0; i < this.state.socialprofilesdata.profiles.length; i++) {
            set(ref(db, `${this.props.userID}/socialprofiles`), {
                media: this.state.socialprofilesdata.profiles[i]["media"],
                url: this.state.socialprofilesdata.profiles[i]["url"],
                icon: this.state.socialprofilesdata.profiles[i]["icon"],
            });
        };
        console.log(this.state.educationdata.education.length);
        for (var i = 0; i < this.state.educationdata.education.length; i++) {
            set(ref(db, `${this.props.userID}/education`), {
                Institution: this.state.educationdata.education[i]["Institution"],
                Program: this.state.educationdata.education[i]["Program"],
                YearOfPassing: this.state.educationdata.education[i]["YearOfPassing"],
                Grade: this.state.educationdata.education[i]["Grade"],
                website: this.state.educationdata.education[i]["website"],
            });
        };
        for (var i = 0; i < this.state.workdata.work.length; i++) {
            set(ref(db, `${this.props.userID}/work`), {
                company: this.state.workdata.work[i]["company"],
                location: this.state.workdata.work[i]["location"],
                title: this.state.workdata.work[i]["title"],
                thumbnail: this.state.workdata.work[i]["thumbnail"],
                dates: this.state.workdata.work[i]["dates"],
                description: this.state.workdata.work[i]["description"],
            });
        }
        for (var i = 0; i < this.state.skillsdata.skills.length; i++) {
            set(ref(db, `${this.props.userID}/skills`), {
                type: this.state.skillsdata.skills[i]["type"],
                KnowledgeInAdvanceTopics: this.state.skillsdata.skills[i]["KnowledgeInAdvanceTopics"],
                KnowledgeInMainConcepts: this.state.skillsdata.skills[i]["KnowledgeInMainConcepts"],
                Beginner: this.state.skillsdata.skills[i]["Beginner"],
            });
        }
        for (var i = 0; i < this.state.projectsdata.projects.length; i++) {
            set(ref(db, `${this.props.userID}/projects`), {
                title: this.state.projectsdata.projects[i]["title"],
                type: this.state.projectsdata.projects[i]["type"],
                thumbnail: this.state.projectsdata.projects[i]["thumbnail"],
                link: this.state.projectsdata.projects[i]["link"],
                description: this.state.projectsdata.projects[i]["description"],
                gallery: this.state.projectsdata.projects[i]["gallery"],
            });
        }
        for (var i = 0; i < this.state.certificatesdata.certificates.length; i++) {
            set(ref(db, `${this.props.userID}/certificates`), {
                title: this.state.certificatesdata.certificates[i]["title"],
                date: this.state.certificatesdata.certificates[i]["date"],
                institution: this.state.certificatesdata.certificates[i]["institution"],
                thumbnail: this.state.certificatesdata.certificates[i]["thumbnail"],
                description: this.state.certificatesdata.certificates[i]["description"],
            });
        }
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
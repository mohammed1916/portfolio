import React, { Fragment } from 'react';
import { JsonForms } from '@jsonforms/react';
import { originallinkedininitialdata, linkedinschema, linkedinuischema, linkedininitialdata } from './linkedin';
import { originalinformationinitialdata, informationschema, informationuischema, informationinitialdata } from './information';
import { originalsocialprofilesinitialdata, socialprofilesschema, socialprofilesuischema, socialprofilesinitialdata } from './socialprofiles';
import { originaleducationinitialdata, educationschema, educationuischema, educationinitialdata } from './education';
import { originalworkinitialdata, workschema, workuischema, workinitialdata } from './work';
import { originalskillsinitialdata, skillsschema, skillsuischema, skillsinitialdata } from './skills';
import { originalcertificatesinitialdata, certificatesschema, certificatesuischema, certificatesinitialdata } from './certificates';
import { originalprojectsinitialdata, projectsschema, projectsuischema, projectsinitialdata } from './projects';
import { originalgalleryinitialdata, galleryschema, galleryuischema, galleryinitialdata } from './gallery';
import {
    materialRenderers,
    materialCells,
} from '@jsonforms/material-renderers';
import { Button, Grid, Paper } from '@mui/material';
import { child, ref, set, get } from "firebase/database";
import DownloadFooter from '../footer/Download/DownloadFooter';
import FormNav from '../Navbar/FormNav';
import { database } from '../../firebase-config';

var originallinkedindata = originallinkedininitialdata;
var originalinformationdata = originalinformationinitialdata;
var originalsocialprofilesdata = originalsocialprofilesinitialdata;
var originaleducationdata = originaleducationinitialdata;
var originalworkdata = originalworkinitialdata;
var originalskillsdata = originalskillsinitialdata;
var originalcertificatesdata = originalcertificatesinitialdata;
var originalprojectsdata = originalprojectsinitialdata;
var originalgallerydata = originalgalleryinitialdata;

var user;
class Form extends React.Component {

    constructor(props) {
        super(props);
        console.log("this.props.userID", this.props.userID);
        user = this.props.userID;
        this.initializeData = this.initializeData.bind(this);
        this.handleReqAuthCode = this.handleReqAuthCode.bind(this);
        this.handleAuthCode = this.handleAuthCode.bind(this);
        this.handleLinkedinAuth = this.handleLinkedinAuth.bind(this);
        this.fillData = this.fillData.bind(this);
        this.state = {
            /**
             * informationinitialdata can be used later to cache data, for now it is static
             *  
             * */
            informationdata: (originalinformationdata !== undefined) ? originalinformationdata : informationinitialdata,
            socialprofilesdata: (originalsocialprofilesdata !== undefined) ? originalsocialprofilesinitialdata : socialprofilesinitialdata,
            educationdata: (originaleducationdata !== undefined) ? originaleducationinitialdata : educationinitialdata,
            workdata: (originalworkdata !== undefined) ? originalworkinitialdata : workinitialdata,
            skillsdata: (originalskillsdata !== undefined) ? originalskillsinitialdata : skillsinitialdata,
            certificatesdata: (originalcertificatesdata !== undefined) ? originalcertificatesinitialdata : certificatesinitialdata,
            projectsdata: (originalprojectsdata !== undefined) ? originalprojectsinitialdata : projectsinitialdata,
            gallerydata: (originalgallerydata !== undefined) ? originalgalleryinitialdata : galleryinitialdata,
            read: false,
            linkedindata: (originallinkedindata !== undefined) ? originallinkedininitialdata : linkedininitialdata,
            externalPopUp: null,
            linkedinAuth: ""
        };
    }

    componentDidMount() {
        this.initializeData()
    }
    componentDidUpdate() {

    }

    initializeData() {
        const dbRef = ref(database);
        get(child(dbRef, `${user}/linkedin/linkedin/`)).then((snapshot) => {
            if (snapshot.exists()) {
                this.setState({ linkedindata: snapshot.val() });
            }
        });
        get(child(dbRef, `${user}/information/`)).then((snapshot) => {
            if (snapshot.exists()) {
                this.setState({ informationdata: snapshot.val() });
            }
        });
        get(child(dbRef, `${user}/socialmediaprofilesinfo/`)).then((snapshot) => {
            if (snapshot.exists()) {
                this.setState({ socialprofilesdata: snapshot.val() });
            }
        });
        get(child(dbRef, `${user}/educationinfo/`)).then((snapshot) => {
            if (snapshot.exists()) {
                this.setState({ educationdata: snapshot.val() });
            }
        });
        get(child(dbRef, `${user}/workinfo/`)).then((snapshot) => {
            if (snapshot.exists()) {
                this.setState({ workdata: snapshot.val() });
            }
        });
        get(child(dbRef, `${user}/skillsinfo/`)).then((snapshot) => {
            if (snapshot.exists()) {
                this.setState({ skillsdata: snapshot.val() });
            }
        });
        get(child(dbRef, `${user}/certificatesinfo/`)).then((snapshot) => {
            if (snapshot.exists()) {
                this.setState({ certificatesdata: snapshot.val() });
            }
        });
        get(child(dbRef, `${user}/projectsinfo/`)).then((snapshot) => {
            if (snapshot.exists()) {
                this.setState({ projectsdata: snapshot.val() });
            }
        });
        get(child(dbRef, `${user}/galleryinfo/`)).then((snapshot) => {
            if (snapshot.exists()) {
                this.setState({ gallerydata: snapshot.val() });
            }
        });
    }
    fillData() {
        this.setState({
            linkedindata: linkedininitialdata,
            informationdata: informationinitialdata,
            socialprofilesdata: socialprofilesinitialdata,
            educationdata: educationinitialdata,
            workdata: workinitialdata,
            skillsdata: skillsinitialdata,
            certificatesdata: certificatesinitialdata,
            projectsdata: projectsinitialdata,
            gallerydata: galleryinitialdata
        });
    }

    update() {
        let authToken = sessionStorage.getItem('Auth Token')
        if (this.props.userID !== "") {
            if (authToken) {
                console.log("Auth", authToken);
            }
            const db = database;
            console.log("this.props.userID", this.props.userID);
            set(ref(db, `${this.props.userID}/linkedin`), {
                linkedin: this.state.linkedindata
            });
            set(ref(db, `${this.props.userID}/information`), {
                name: this.state.informationdata["name"],
                domain: this.state.informationdata["domain"],
                image: this.state.informationdata["image"],
                email: this.state.informationdata["email"],
                whoami: this.state.informationdata["whoami"],
                description: this.state.informationdata["description"],
                location: this.state.informationdata["location"],
            });
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

            set(ref(db, `${this.props.userID}/galleryinfo`), {
                gallery: this.state.gallerydata["gallery"],
            });


            set(ref(db, `${this.props.userID}/certificatesinfo`), {
                certificates: this.state.certificatesdata["certificates"],
            });
            alert("Submitted details successfully");
        }
        else {
            alert('Please login first.');
            this.props.navigate('/')
            return;
        }
    }
    async handleLinkedinAuth() {
        const client_id = "863yjvgqsfyyvq";
        const callback_url = "http://localhost:3000/form/callback";
        const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${client_id}&redirect_uri=${callback_url}&state=foo1123&scope=email%20profile`;

        const win = window.open(url, 'name', 'height=600,width=450');
        if (win) {
            win.focus();
            this.setState({ externalPopUp: win })
        }
        console.log("pressed")
        this.handleReqAuthCode()
    }
    handleReqAuthCode() {
        console.log("this.state.externalPopUp", this.state.externalPopUp)
        if (!this.state.externalPopUp) return;
        const timerhandler = setInterval(() => {
            if (!this.state.externalPopUp) {
                timerhandler && clearInterval(timerhandler);
                return;
            }
            const curURL = window.location.href;
            if (!curURL) return;
            const searchParams = new URL(curURL).searchParams;
            const code = searchParams.get('code');
            try {
                if (code) {
                    this.setState({ linkedinAuth: code })
                    this.state.externalPopUp.close();
                    console.log("URL: ", this.state.linkedinAuth)

                }
            } catch (err) {
                console.log(err);
            } finally {
                // this.state.externalPopUp.close();
                this.setState({
                    externalPopUp: null,
                    linkedinAuth: localStorage.getItem('linkedinAuthCode')
                });
                console.log("URL1: ", this.state.linkedinAuth)
                this.handleAuthCode(this.state.linkedinAuth)
                timerhandler && clearInterval(timerhandler);
            }
        });
    }

    handleAuthCode(code) {

    }

    // handleChange(data) {
    //     this.setState({ git: })
    // }

    render() {
        return (
            // (this.state.read === true) ?
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
                            <Button
                                variant="contained"
                                sx={{ mt: 3, mb: 2, display: "flex", alignSelf: "center" }}
                                // onChange={(data) => setInformationData(data)}
                                onClick={() => this.fillData()}
                            >
                                Fill Data
                            </Button>
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
                                    <Button
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2, display: "flex", alignSelf: "center" }}
                                        onClick={() => this.handleLinkedinAuth()} >Linkedin Authorization</Button>
                                </div >
                                <div
                                    className='Form'
                                    style={{
                                        margin: 'auto',
                                        padding: '10px',
                                    }} >
                                    <JsonForms
                                        schema={linkedinschema}
                                        uischema={linkedinuischema}
                                        data={this.state.linkedindata}
                                        renderers={materialRenderers}
                                        cells={materialCells}
                                        onChange={({ _errors, data }) => {
                                            this.setState({
                                                linkedindata: data
                                            })
                                            console.log("linkedindata", this.state.linkedindata);
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
                                <div
                                    className='Form'
                                    style={{
                                        margin: 'auto',
                                        padding: '10px',
                                    }} >
                                    <JsonForms
                                        schema={galleryschema}
                                        uischema={galleryuischema}
                                        data={this.state.gallerydata}
                                        renderers={materialRenderers}
                                        cells={materialCells}
                                        onChange={({ _errors, data }) => {
                                            this.setState({
                                                gallerydata: data
                                            })
                                            console.log("gallerydata", this.state.gallerydata);
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
            // :
            // <>
            //     <Typography>
            //         Loading
            //     </Typography>
            // </>


        );
    }
}
export default Form;
import React from 'react';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { app } from './firebase-config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import About from './Components/About/About';
import Work from './Components/Work/Work';
import Certifications from './Components/Certifications/Certifications';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Footer from './Components/footer/Footer';
import ResponsiveAppBar from './Components/Navbar/ResponsiveAppBar';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import CertificatePage from "./Components/Certifications/CertificatePage";
import ProjectPage from "./Components/Projects/ProjectPage";
import WorkPage from "./Components/Work/WorkPage";
import SignIn from "./Components/SignIn/SignIn";
import DownloadFooter from "./Components/footer/Download/DownloadFooter";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Home from './Components/Home/Home';

function App() {
  //Handle Snackbar
  const [open, setOpen] = React.useState(false);
  let navigate = useNavigate();
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(true);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={() => handleClose()}>
        Ok
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );


  //Handle Form Events
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const authentication = getAuth();
    console.log(1);

    signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        navigate('/home')
        console.log("signin ....")
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
      })
      .catch((error) => {
        console.log(error.code)
        if (error.code === 'auth/wrong-password') {
          setOpen(true)
        }
        if (error.code === 'auth/user-not-found') {
          setOpen(true)
        }
      })
  }

  useEffect(() => {
    //Get elements

    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/home')
      console.log(authToken);
    } else {
      navigate('/login')
    }

  }, [])


  return (
    <>
      <Routes>
        <Route
          path='/login'
          element={
            <SignIn
              title="Login"
              setEmail={setEmail}
              setPassword={setPassword}
              handleSubmit={() => handleSubmit()}
            />}
        />
        <Route
          path='/home/*'
          element={<Home />} />
      </Routes>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => handleClose()}
        message="Error Occured"
        action={action}
      />
    </>
  );
}

export default App;

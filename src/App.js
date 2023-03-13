import React from 'react';
import { useState } from 'react';
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

import SignIn from "./Components/SignIn/SignIn";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Home from './Components/Home/Home';
import Form from './Components/Form/Form';
import Register from './Components/Register/Register';
import CallbackHandler from './Components/Callback/CallbackHandler';

var emailOfUser = '';
function App() {
  //Handle Snackbar
  const [open, setOpen] = React.useState(false);
  let navigate = useNavigate();
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
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

  function getUsername(name) {
    const n = email.indexOf('.');
    return (n !== -1) ? email.substring(0, n) : email
  }

  //Handle Form Events
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function loginHandleSubmit() {
    const authentication = getAuth();
    console.log("loginHandleSubmit function");
    signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        emailOfUser = getUsername(email)
        setUsername(getUsername(email))
        navigate(`${getUsername(email)}/form`)
        console.log("signin ....")
        console.log(username)
        console.log(email)
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

  function registerHandleSubmit() {
    const authentication = getAuth();
    console.log("registerHandleSubmit function");
    createUserWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        emailOfUser = getUsername(email)
        setUsername(getUsername(email));
        navigate(`${getUsername(email)}/form`);
        console.log("register ....");
        console.log(username)
        console.log(email)
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <SignIn
              title="Login"
              setEmail={setEmail}
              setPassword={setPassword}
              loginHandleSubmit={loginHandleSubmit}
            />}
        />
        <Route
          path='/register'
          element={
            <Register
              title="Register"
              setEmail={setEmail}
              setPassword={setPassword}
              registerHandleSubmit={registerHandleSubmit}
            />}
        />
        <Route
          path='/:username/home/*'
          element={
            <Home
              userID={emailOfUser}
            />} />
        <Route path='/:username/form' element={
          <Form
            userID={emailOfUser}
            navigate={navigate}
          />}
        />
        <Route path='/form/callback' element={
          <CallbackHandler />}
        />

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

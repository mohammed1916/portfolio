import * as React from 'react'
export default function CallbackHandler() {
    const codeParam = new URL(window.location.href).searchParams;
    const code = codeParam.get('code');
    localStorage.setItem('linkedinAuthCode', code);
    const client_id = "863yjvgqsfyyvq";
    const client_secret = "dVfyZFbQ3zPMs4B5";
    const callback_url = "http://localhost:3000/form/callback";
    const url = `https://www.linkedin.com/oauth/v2/accessToken?code=${code}&grant_type=authorization_code&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${callback_url}`;
    const win = window.open(url, 'name', 'height=600,width=450');
    if (win) {
        win.focus();
        this.setState({ externalPopUp: win })
    }
    console.log("pressed")
    handleReqAuthCode()
    // fetch(url, {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": 'application/x-www-form-urlencoded'
    //     }
    // }).then((res) => console.log(res))
    return (
        <>
            {code.get('code')}
        </>
    );
}
function handleReqAuthCode() {
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
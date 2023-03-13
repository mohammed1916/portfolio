import * as React from 'react'
export default function CallbackHandler() {
    const codeParam = new URL(window.location.href).searchParams;
    let [code, setCode] = React.useState(codeParam.get('code'));
    localStorage.setItem('linkedinAuthCode', code);

    const client_id = "863yjvgqsfyyvq";
    const client_secret = "dVfyZFbQ3zPMs4B5";
    const callback_url = "http://localhost:3000";
    const dataJSON = {
        "Content-Type": "application/x-www-form-urlencoded",
        "grant_type": "authorization_code",
        "code": code,
        "client_id": client_id,
        "client_secret": client_secret,
        "redirect_uri": callback_url,
    }
    const url = `https://www.linkedin.com/oauth/v2/accessToken?code=${code}&grant_type=authorization_code&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${callback_url}`;
    const url1 = `http://localhost:8080/${code}`;
    if (code !== undefined)
        try {
            fetch(url1, {
                // method: 'POST',
                mode: 'cors',
                // body: JSON.stringify(code),
                // redirect: 'follow',
                // mode: 'cors',
            })
                .then(res => {
                    // let res = data.text();
                    // console.log("🎉 data ", res);
                    // localStorage.setItem('linkedinAccessCode', res)
                    // res = Promise.resolve(res.text());
                    res.text().then(res => {
                        console.log("🎉 data ", res);
                        if (res === "ERROR") {
                            setCode("🛠️ Error has occured, please retry after sometime.");
                            console.log("🛠️ code: ", code)
                        }
                        else
                            localStorage.setItem('linkedinAccessCode', res)
                    })

                })
        } catch (err) {
            setCode("🛠️ Error has occured, please retry after sometime." + err);
        }

    // .then(response => response.json())

    // localStorage.setItem('linkedinAccessCode', window.location.assign(url))
    // const win = window.open(url, 'name', 'height=600,width=450');
    // console.log("1win.document.body.innerText", win.document.body.innerHTML);
    // win.addEventListener('load', () => {
    //     localStorage.setItem('linkedinAccessCode', win.document.body.innerText);
    //     console.log("win.document.body.innerText", win.document.body.innerText);
    // })
    // try {
    //     if (win) {
    //         win.focus();
    //     }
    //     win.onload = function () {
    //         setTimeout(function () { localStorage.setItem('linkedinAccessCode', win.document.documentElement.outerHTML) }, 2000);
    //     }
    // } finally {
    //     console.log("pressed");
    //     handleReqAuthCode(win);
    // }

    return (
        <>
            {code}
        </>
    );
}
function handleReqAuthCode(win) {
    console.log("win", win);
    const curURL = win.location.href;
    if (!curURL) return;
    const searchParams = new URL(curURL).searchParams;
    const code = searchParams.get('access_token');
    localStorage.setItem('linkedinAccessCode', code);
    console.log("access_token: ", code)
    // win.close();
}
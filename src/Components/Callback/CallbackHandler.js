import * as React from 'react'
export default function CallbackHandler() {
    const codeParam = new URL(window.location.href).searchParams;
    const auth = codeParam.get('code');
    let [error, setError] = React.useState("");
    const errorCode = "🛠️ Error has occured, please retry after sometime.";

    localStorage.setItem('linkedinAuthCode', auth);
    let code = "";
    const url1 = `http://localhost:8080/auth/${auth}`;
    if (code !== undefined || code !== "") {
        try {
            fetch(url1, { mode: 'cors' })
                .then(res => {
                    res.text().then(res => {
                        console.log("🎉 res ", res);
                        if (res === "ERROR") {
                            setError(errorCode);
                            console.log("🛠️ code: ", code, "---", error)
                        }
                        else {
                            localStorage.setItem('linkedinAccessCode', res);
                            let win = window.open(`https://api.linkedin.com/v2/userinfo?oauth2_access_token=${res}`, "name", 'height=600,width=450');
                            if (win)
                                win.focus()
                            // fetch("https://api.linkedin.com/v2/me?oauth2_access_token=${res}", {
                            //     "headers": {
                            //         'Authorization': `Bearer ${res}`
                            //     }
                            // }).then(((data) => {
                            //     localStorage.setItem('linkedinAccessCode', data);
                            //     setError(data);
                            // }
                            // ))
                        }
                    })
                })
            // .then((data) => window.close())
        } catch (err) {
            setError(errorCode);
            console.log(error + err)
        }
    } else {
        console.log("skip")
    }
    const info = <>
        <center>
            <div>
                Redirecting
            </div>
            <br />
            <div>
                This window will close automatically
                {error}
            </div>
        </center>
    </>
    return (
        <>
            {error !== errorCode ? info : errorCode}
        </>
    );
}
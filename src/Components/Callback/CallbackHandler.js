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
                            localStorage.setItem('linkedinAccessCode', res)
                            window.close();
                        }
                    })
                })
        } catch (err) {
            setError(errorCode);
            console.log(error + err)
        }
    } else {
        console.log("skip")
    }
    return (
        <>
            {error !== errorCode ? "Redirecting" : errorCode}
        </>
    );
}
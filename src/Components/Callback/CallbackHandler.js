import * as React from 'react'
export default function CallbackHandler() {
    const codeParam = new URL(window.location.href).searchParams;
    let [code, setCode] = React.useState(codeParam.get('code'));

    localStorage.setItem('linkedinAuthCode', code);

    const url1 = `http://localhost:8080/${code}`;
    if (code !== undefined || code !== "ERROR")
        try {
            fetch(url1, { mode: 'cors' })
                .then(res => {
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

    return (
        <>
            {code}
        </>
    );
}
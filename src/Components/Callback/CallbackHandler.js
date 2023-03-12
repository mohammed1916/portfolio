import * as React from 'react'
export default function CallbackHandler() {
    const code = new URL(window.location.href).searchParams
    return (
        <>
            {code.get('code')}
        </>
    );
}
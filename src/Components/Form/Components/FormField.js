import * as React from 'react'
import { JsonForms } from '@jsonforms/react';

export default function FormField(props) {

    return (
        <>
            <JsonForms
                schema={props.schema}
                uischema={props.uischema}
                data={props.Flag == true ? infoData : props.data}
                renderers={materialRenderers}
                cells={materialCells}
                onChange={({ _errors, data }) => {
                    handleChange
                    console.log("data", props.data);
                }}
            />
        </>
    );
}
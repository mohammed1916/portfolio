import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';


export default function DownloadFooter() {
    return (

        <Box
            component="footer"
            sx={{
                py: 2,
                px: 1,
                mt: 'auto',

            }}
            style={{ position: 'fixed', left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
            <Container maxWidth="sm" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'true', justifyContent: "center", alignItems: "center", backgroundColor: "white", borderRadius: 10, padding: "7px", opacity: 1 }}>
                <Typography variant="body1" paddingRight={"5px"} >
                    Download Build Files to be deployed in hosting server
                </Typography>
                <Button href='http://localhost:3000/' download style={{ backgroundColor: "purple", color: "white", borderRadius: 6 }}>
                    Here
                </Button>
            </Container>
        </Box >

    );
}
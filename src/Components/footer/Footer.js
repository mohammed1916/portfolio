import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { data } from '../../data'



export default function Footer() {

    return (
        <Box
            px={{ xs: 3, sm: 10 }}
            py={{ xs: 5, sm: 10 }}
            bgcolor={'slateblue'}
            color={'white'} >
            <Container sx={{ width: '100%' }}>
                <Divider pt={{ xs: 1, sm: 2 }}><Chip label="Mohammed Abdullah" /></Divider>
                <Grid container spacing={5} pt={{ xs: 2, sm: 4 }}>
                    <Grid item xs={12} sm={6} pb={{ xs: 2, sm: 4 }}>
                        <Box borderBottom={2}>Useful Links</Box>
                        {data.education.map((object) => (
                            <Box pt={{ xs: 2, sm: 4 }}>
                                <Link href={object.website} color="inherit" underline="hover">
                                    {object.Type}
                                </Link>
                            </Box>
                        ))}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box borderBottom={2}>Contact</Box>
                        <Box pt={{ xs: 2, sm: 4 }}>
                            <Link href={`mailto:${data.information.email}`} color="inherit" underline="hover" style={{
                                alignItems: "center",
                                display: "flex"
                            }}>
                                <MailOutlineIcon style={{ paddingRight: "3px" }} />
                                {data.information.email}
                            </Link>
                        </Box>
                        {data.information.profiles.map((object) => (
                            <Box pt={{ xs: 2, sm: 4 }}>
                                <Link href={object.url} color="inherit" underline="hover">
                                    {object.media}
                                </Link>
                            </Box>
                        ))}

                    </Grid>

                </Grid>
                <Divider />
                <Typography textAlign="center" color={'white'} pt={{ xs: 1, sm: 2 }}><Link href="#" color="inherit" underline="hover">Copyright {new Date().getFullYear()} by {data.information.name}. All Rights Reserved</Link></Typography>
            </Container>
        </Box >
    );
}
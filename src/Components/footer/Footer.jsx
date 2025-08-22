import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { Grid } from '@mui/material' // Standard MUI Grid import
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import { data } from '../../data'
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate();

    return (
        <Box
            px={{ xs: 3, sm: 10 }}
            py={{ xs: 5, sm: 10 }}
            bgcolor={'var(--color-footer-bg)'}
            color={'var(--color-bg)'} >
            <Container sx={{ width: '100%' }}>
                <Divider pt={{ xs: 1, sm: 2 }}><Chip label="Mohammed Abdullah" sx={{ fontFamily: "var(--font-gilroy-bold)", color: 'var(--color-heading)' }} /></Divider>
                <Grid container spacing={5} pt={{ xs: 2, sm: 4 }}>
                    <Grid size={{ xs: 12, sm: 4 }} pb={{ xs: 2, sm: 4 }}>
                        <Box borderBottom={2} fontFamily="var(--font-gilroy-bold)" color={'var(--color-heading)'}>Useful Links</Box>
                        {data.education.map((object, index) => (
                            <Box key={object.Type + index * 3} pt={{ xs: 2, sm: 4 }}>
                                <Link href={object.website} color="var(--color-heading)" underline="hover" className="footer-link font-gilroy-light">
                                    {object.Type}
                                </Link>
                            </Box>
                        ))}
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                        <Box borderBottom={2} fontFamily="var(--font-gilroy-bold)" color={'var(--color-heading)'}>Contact</Box>
                        {data.information.profiles.map((object, index) => (
                            <Box key={object.url + index + 4 * index} pt={{ xs: 2, sm: 4 }}>
                                <Link href={object.url} color="var(--color-heading)" underline="hover" className="social-link font-gilroy-light">
                                    {object.media}
                                </Link>
                            </Box>
                        ))}

                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                        <Box borderBottom={2} fontFamily="var(--font-gilroy-bold)" color={'var(--color-heading)'}>Legal</Box>
                        <Box pt={{ xs: 2, sm: 4 }}>
                            <Link 
                                onClick={() => navigate('/privacy')} 
                                color="var(--color-heading)" 
                                underline="hover"
                                sx={{ cursor: 'pointer', fontFamily: "var(--font-gilroy-light)" }}
                                className="footer-link"
                            >
                                Privacy Policy
                            </Link>
                        </Box>
                    </Grid>

                </Grid>
                <Divider />
                <Typography textAlign="center" color={'var(--color-heading)'} pt={{ xs: 1, sm: 2 }} fontFamily="var(--font-gilroy-light)"><Link href="#" color="var(--color-heading)" underline="hover">Copyright {new Date().getFullYear()} by {data.information.name}. All Rights Reserved</Link></Typography>
            </Container>
        </Box >
    );
}
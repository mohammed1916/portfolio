import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { data } from '../../data';

export default function Privacy() {
    return (
        <>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor={'white'}
                color={'black'}>
                <Container sx={{ width: '100%' }}>
                    <Typography 
                        textAlign="center" 
                        fontFamily={'Gilroy Bold'} 
                        fontSize={'40px'} 
                        color={'black'} 
                        p={{ xs: 1, sm: 2 }}
                    >
                        Privacy Policy
                    </Typography>
                    
                    <Box 
                        bgcolor={'#eee'} 
                        borderRadius={'20px'} 
                        padding={'20px'}
                        sx={{ '& p': { marginBottom: 2 }, '& h3': { marginTop: 3, marginBottom: 1 } }}
                    >
                        <Typography variant="body1" fontFamily={'Gilroy Light'}>
                            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                        </Typography>

                        <Typography variant="h5" fontFamily={'Gilroy Bold'} sx={{ mt: 3, mb: 2 }}>
                            Introduction
                        </Typography>
                        <Typography variant="body1" fontFamily={'Gilroy Light'}>
                            Welcome to my portfolio website. I am Mohammed Abdullah, an independent software developer. 
                            This Privacy Policy explains how I collect, use, and protect your information when you visit 
                            my portfolio website.
                        </Typography>

                        <Typography variant="h5" fontFamily={'Gilroy Bold'} sx={{ mt: 3, mb: 2 }}>
                            Information I Collect
                        </Typography>
                        <Typography variant="body1" fontFamily={'Gilroy Light'}>
                            This portfolio website is primarily informational and does not collect personal data directly. 
                            However, the following may apply:
                        </Typography>
                        <Box component="ul" sx={{ pl: 3 }}>
                            <Typography component="li" variant="body1" fontFamily={'Gilroy Light'}>
                                <strong>Analytics Data:</strong> Basic usage statistics may be collected through web analytics 
                                to understand how visitors interact with the site.
                            </Typography>
                            <Typography component="li" variant="body1" fontFamily={'Gilroy Light'}>
                                <strong>Contact Information:</strong> If you contact me through the provided links or email, 
                                any information you share will be used solely for responding to your inquiry.
                            </Typography>
                        </Box>

                        <Typography variant="h5" fontFamily={'Gilroy Bold'} sx={{ mt: 3, mb: 2 }}>
                            Third-Party Services
                        </Typography>
                        <Typography variant="body1" fontFamily={'Gilroy Light'}>
                            This portfolio contains links to external platforms and projects:
                        </Typography>
                        <Box component="ul" sx={{ pl: 3 }}>
                            <Typography component="li" variant="body1" fontFamily={'Gilroy Light'}>
                                <strong>Social Media Links:</strong> Links to LinkedIn, GitHub, and Medium are provided 
                                for professional networking. These platforms have their own privacy policies.
                            </Typography>
                            <Typography component="li" variant="body1" fontFamily={'Gilroy Light'}>
                                <strong>Project Websites:</strong> The websites mentioned in my projects section are 
                                hosted on Firebase and are subject to{' '}
                                <Link 
                                    href="https://firebase.google.com/support/privacy" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    color="primary"
                                >
                                    Firebase's Privacy Policy
                                </Link>.
                            </Typography>
                            <Typography component="li" variant="body1" fontFamily={'Gilroy Light'}>
                                <strong>External Links:</strong> This site contains links to external websites and 
                                repositories. I am not responsible for the privacy practices of these external sites.
                            </Typography>
                        </Box>

                        <Typography variant="h5" fontFamily={'Gilroy Bold'} sx={{ mt: 3, mb: 2 }}>
                            Data Usage
                        </Typography>
                        <Typography variant="body1" fontFamily={'Gilroy Light'}>
                            Any information collected is used solely for:
                        </Typography>
                        <Box component="ul" sx={{ pl: 3 }}>
                            <Typography component="li" variant="body1" fontFamily={'Gilroy Light'}>
                                Improving the website experience
                            </Typography>
                            <Typography component="li" variant="body1" fontFamily={'Gilroy Light'}>
                                Responding to inquiries and professional communications
                            </Typography>
                            <Typography component="li" variant="body1" fontFamily={'Gilroy Light'}>
                                Understanding website usage patterns
                            </Typography>
                        </Box>

                        <Typography variant="h5" fontFamily={'Gilroy Bold'} sx={{ mt: 3, mb: 2 }}>
                            Data Security
                        </Typography>
                        <Typography variant="body1" fontFamily={'Gilroy Light'}>
                            As an independent developer, I take reasonable measures to protect any information 
                            associated with this website. However, no method of transmission over the internet 
                            is 100% secure.
                        </Typography>

                        <Typography variant="h5" fontFamily={'Gilroy Bold'} sx={{ mt: 3, mb: 2 }}>
                            Cookies
                        </Typography>
                        <Typography variant="body1" fontFamily={'Gilroy Light'}>
                            This website may use cookies for basic functionality and analytics. You can control 
                            cookie settings through your browser preferences.
                        </Typography>

                        <Typography variant="h5" fontFamily={'Gilroy Bold'} sx={{ mt: 3, mb: 2 }}>
                            Your Rights
                        </Typography>
                        <Typography variant="body1" fontFamily={'Gilroy Light'}>
                            You have the right to:
                        </Typography>
                        <Box component="ul" sx={{ pl: 3 }}>
                            <Typography component="li" variant="body1" fontFamily={'Gilroy Light'}>
                                Request information about any data collected
                            </Typography>
                            <Typography component="li" variant="body1" fontFamily={'Gilroy Light'}>
                                Request deletion of any personal information
                            </Typography>
                            <Typography component="li" variant="body1" fontFamily={'Gilroy Light'}>
                                Opt out of any data collection
                            </Typography>
                        </Box>

                        <Typography variant="h5" fontFamily={'Gilroy Bold'} sx={{ mt: 3, mb: 2 }}>
                            Contact Information
                        </Typography>
                        <Typography variant="body1" fontFamily={'Gilroy Light'}>
                            If you have any questions about this Privacy Policy or your data, please contact me:
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="body1" fontFamily={'Gilroy Light'}>
                                <strong>Email:</strong> {data.information.email}
                            </Typography>
                            <Typography variant="body1" fontFamily={'Gilroy Light'}>
                                <strong>LinkedIn:</strong>{' '}
                                <Link 
                                    href="https://www.linkedin.com/in/curious-mohammed-abdullah/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    color="primary"
                                >
                                    Mohammed Abdullah
                                </Link>
                            </Typography>
                        </Box>

                        <Typography variant="h5" fontFamily={'Gilroy Bold'} sx={{ mt: 3, mb: 2 }}>
                            Changes to This Policy
                        </Typography>
                        <Typography variant="body1" fontFamily={'Gilroy Light'}>
                            I may update this Privacy Policy from time to time. Any changes will be posted on this page 
                            with an updated "Last updated" date.
                        </Typography>

                        <Typography variant="h5" fontFamily={'Gilroy Bold'} sx={{ mt: 3, mb: 2 }}>
                            Independent Developer Notice
                        </Typography>
                        <Typography variant="body1" fontFamily={'Gilroy Light'}>
                            This website is maintained by Mohammed Abdullah as an independent software developer. 
                            This is a personal portfolio website showcasing my work, skills, and professional experience.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
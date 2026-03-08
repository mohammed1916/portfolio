import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AnimatedSectionHeading from '../common/AnimatedSectionHeading';

const RESUME_URL = 'https://drive.google.com/file/d/1yyAr4mOykMD3jgLzWjLzK8VYjuLNHJkg/view?usp=sharing';

export default function Resume() {
    return (
        <Box
            px={{ xs: 3, sm: 10 }}
            py={{ xs: 5, sm: 10 }}
            bgcolor={'var(--color-bg)'}
            sx={{
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'var(--color-primary)',
                    opacity: 0.04,
                    zIndex: 0,
                },
            }}
        >
            <Container sx={{ position: 'relative', zIndex: 1 }}>
                <AnimatedSectionHeading color={'var(--color-typewriter-border)'}>Resume</AnimatedSectionHeading>

                <Box
                    sx={{
                        mt: 2,
                        p: { xs: 3, sm: 4 },
                        borderRadius: '20px',
                        background: 'linear-gradient(145deg, var(--color-card-bg) 0%, var(--color-card-bg2) 100%)',
                        border: '1px solid var(--color-secondary)',
                        boxShadow: '0 12px 40px var(--color-particle-shadow)',
                        textAlign: 'center',
                    }}
                >
                    <DescriptionOutlinedIcon sx={{ fontSize: 44, color: 'var(--color-typewriter-border)', mb: 1 }} />
                    <Typography
                        variant="h5"
                        sx={{
                            fontFamily: 'var(--font-gilroy-bold)',
                            color: 'var(--color-heading)',
                            mb: 1,
                        }}
                    >
                        View My Latest Resume
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'var(--font-gilroy-light)',
                            color: 'var(--color-text)',
                            mb: 3,
                        }}
                    >
                        Open the full resume in a new tab.
                    </Typography>

                    <Button
                        variant="contained"
                        endIcon={<OpenInNewIcon />}
                        href={RESUME_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            px: 3,
                            py: 1.2,
                            borderRadius: '999px',
                            textTransform: 'none',
                            fontFamily: 'var(--font-gilroy-bold)',
                            background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 60%, #d81b60 100%)',
                            boxShadow: '0 10px 24px rgba(106, 27, 154, 0.35)',
                            '&:hover': {
                                background: 'linear-gradient(135deg, #8e24aa 0%, #ad1457 100%)',
                                boxShadow: '0 14px 30px rgba(106, 27, 154, 0.45)',
                            },
                        }}
                    >
                        Open Resume
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

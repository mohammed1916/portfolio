import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AnimatedSectionHeading from '../common/AnimatedSectionHeading';
import { data } from '../../data';

const primaryButtonSx = {
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
};

const outlinedButtonSx = {
    px: 3,
    py: 1.2,
    borderRadius: '999px',
    textTransform: 'none',
    fontFamily: 'var(--font-gilroy-bold)',
    color: 'var(--color-typewriter-border)',
    borderColor: 'var(--color-typewriter-border)',
    '&:hover': {
        borderColor: 'var(--color-typewriter-border)',
        backgroundColor: 'rgba(106, 27, 154, 0.08)',
    },
};

export default function Resume() {
    const [showViewer, setShowViewer] = useState(false);
    const resume = data.resume;

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
                        {data.information.name} — {data.information.role}
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: 'var(--font-gilroy-light)',
                            color: 'var(--color-text)',
                            maxWidth: 760,
                            mx: 'auto',
                            mb: 2,
                        }}
                    >
                        {resume.summary}
                    </Typography>

                    <Chip
                        label={`Last updated: ${resume.updated}`}
                        size="small"
                        sx={{
                            mb: 3,
                            fontFamily: 'var(--font-gilroy-light)',
                            color: 'var(--color-typewriter)',
                            border: '1px solid var(--color-secondary)',
                            background: 'transparent',
                        }}
                    />

                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 1.5,
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            variant="contained"
                            startIcon={showViewer ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            onClick={() => setShowViewer((open) => !open)}
                            sx={primaryButtonSx}
                        >
                            {showViewer ? 'Hide Resume' : 'View Resume'}
                        </Button>

                        <Button
                            variant="outlined"
                            startIcon={<DownloadIcon />}
                            href={resume.file}
                            download={resume.fileName}
                            sx={outlinedButtonSx}
                        >
                            Download PDF
                        </Button>

                        <Button
                            variant="outlined"
                            endIcon={<OpenInNewIcon />}
                            href={resume.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={outlinedButtonSx}
                        >
                            Open in New Tab
                        </Button>
                    </Box>

                    <Collapse in={showViewer} timeout={400} unmountOnExit>
                        <Box
                            sx={{
                                mt: 4,
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: '1px solid var(--color-secondary)',
                                boxShadow: '0 8px 32px var(--color-particle-shadow)',
                                background: '#fff',
                            }}
                        >
                            <Box
                                component="iframe"
                                src={`${resume.file}#view=FitH`}
                                title="Mohammed Abdullah Resume"
                                sx={{
                                    width: '100%',
                                    height: { xs: '70vh', sm: '85vh' },
                                    border: 'none',
                                    display: 'block',
                                }}
                            />
                        </Box>
                        <Typography
                            variant="caption"
                            sx={{
                                display: 'block',
                                mt: 1.5,
                                fontFamily: 'var(--font-gilroy-light)',
                                color: 'var(--color-text)',
                            }}
                        >
                            Preview not loading on your device? Use <strong>Download PDF</strong> or <strong>Open in New Tab</strong>.
                        </Typography>
                    </Collapse>
                </Box>
            </Container>
        </Box>
    );
}

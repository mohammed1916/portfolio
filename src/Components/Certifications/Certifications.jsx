import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import AnimatedSectionHeading from '../common/AnimatedSectionHeading';

import { data } from '../../data';

import
{
    useNavigate
} from "react-router-dom";



export default function Certifications()
{
    let navigate = useNavigate();
        const nav = (index) =>
    {
        navigate(`/certificatepage/${index}`);
    };


    return (
        <>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor={'var(--color-bg)'}
                color={'var(--color-heading)'}
                sx={{
                    background: 'linear-gradient(135deg, var(--color-bg) 0%, var(--color-accent) 50%, var(--color-secondary) 100%)',
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'var(--color-primary)',
                        opacity: 0.05,
                        zIndex: 0,
                    },
                }}
            >
                <Container sx={{ width: '100%', position: 'relative', zIndex: 1 }}>
                    <AnimatedSectionHeading>Certifications</AnimatedSectionHeading>
                    <Box 
                        display={'flex'} 
                        flexWrap={'wrap'} 
                        justifyContent='space-evenly' 
                        bgcolor={'var(--color-card-bg)'} 
                        borderRadius={'20px'} 
                        padding={'10px'}
                        sx={{
                            background: 'linear-gradient(145deg, var(--color-card-bg) 0%, var(--color-card-bg2) 100%)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid var(--color-secondary)',
                            boxShadow: '0 8px 32px var(--color-particle-shadow)',
                        }}
                    >
                        {data.certifications.map((item, index) => (
                            <Card 
                                onClick={() => nav(index)} 
                                key={index} 
                                sx={{ maxWidth: 250, padding: '10px', margin: '20px', boxShadow: '0 8px 32px var(--color-particle-shadow)',background: 'var(--color-accent)', ':hover': { boxShadow: '0 15px 70px -12px var(--color-particle-shadow)', background: 'var(--color-primary)' } }} 
                                className="certificate-card cursor-view"
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={item.thumbnail}
                                    />
                                    <CardContent>
                                        <Typography fontFamily="var(--font-gilroy-light)" color={'var(--color-heading)'} gutterBottom variant="h6" component="div" textAlign={'center'}>
                                            {item.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))}
                    </Box>
                </Container>
            </Box>
        </>
    );
}
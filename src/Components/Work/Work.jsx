
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



export default function Work()
{
    let navigate = useNavigate();
    const nav = (index) =>
    {
        navigate(`/workpage/${index}`);
    };

    return (
        <>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor={'white'}
                color={'white'}
                sx={{
                    background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 50%, #ce93d8 100%)',
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(74, 20, 140, 0.05)',
                        zIndex: 0,
                    },
                }}
            >
                <Container sx={{ width: '100%', position: 'relative', zIndex: 1 }}>
                    <AnimatedSectionHeading>Work Experience</AnimatedSectionHeading>
                    <Box 
                        display={'flex'} 
                        flexWrap={'wrap'} 
                        justifyContent='space-evenly' 
                        bgcolor={'rgba(255, 255, 255, 0.8)'} 
                        borderRadius={'20px'} 
                        padding={'10px'}
                        sx={{
                            background: 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(225,190,231,0.3) 100%)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(225, 190, 231, 0.3)',
                            boxShadow: '0 8px 32px rgba(74, 20, 140, 0.1)',
                        }}
                    >
                        {data.work.map((item, index) => (
                            <Card 
                                onClick={() => nav(index)} 
                                key={index} 
                                sx={{ maxWidth: 250, padding: '10px', margin: '20px', ":hover": "boxShadow: 0 15px 70px -12px rgba(0,0,0,0.3)" }} 
                                className="work-card cursor-expand"
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={item.thumbnail}
                                    />
                                    <CardContent>
                                        <Typography fontFamily={'Gilroy Light'} color={'black'} gutterBottom variant="h6" component="div" textAlign={'center'}>
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
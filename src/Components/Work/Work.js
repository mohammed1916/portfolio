
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea } from '@mui/material';
import Box from '@mui/material/Box'
import { data } from '../../data'

import {
    useNavigate
} from "react-router-dom";



export default function Work() {
    let navigate = useNavigate();
    const nav = (index) => {
        navigate(`/workpage/${index}`)
    }

    return (
        <>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor={'white'}
                color={'white'} >
                <Container sx={{ width: '100%' }}>
                    <Typography textAlign="center" fontFamily={'Righteous'} fontSize={'40px'} color={'black'} pt={{ xs: 1, sm: 2 }}>Work</Typography>
                    <Box display={'flex'} flexWrap={'wrap'} justifyContent='space-evenly' bgcolor={'#eee'} borderRadius={'20px'} padding={'10px'}>
                        {data.work.map((item, index) => (
                            <Card onClick={() => nav(index)} key={index} sx={{ maxWidth: 250, padding: '10px', margin: '20px', ":hover": "boxShadow: 0 15px 70px -12px rgba(0,0,0,0.3)" }}  >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={item.thumbnail}
                                    />
                                    <CardContent>
                                        <Typography color={'black'} gutterBottom variant="h6" component="div" textAlign={'center'}>
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
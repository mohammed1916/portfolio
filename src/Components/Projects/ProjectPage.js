import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { data } from '../../data'

import { useParams } from "react-router-dom";


export default function ProjectPage() {
    let params = useParams();

    return (
        <>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor={'white'}
                color={'white'} >
                <Container sx={{ width: '100%' }}>
                    <Typography textAlign="center" fontFamily={'Righteous'} fontSize={'40px'} color={'black'} pt={{ xs: 1, sm: 2 }}>Project</Typography>
                    <Box display={'flex'} flexDirection={'column'} bgcolor={'#eee'} borderRadius={'20px'} padding={'10px'}>
                        <Typography color={'black'} gutterBottom variant="h5" component="div" textAlign={'center'} paddingBottom={'8px'}>
                            {data.projects[params.i].title}
                        </Typography>

                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`Application Type:`}
                            </Typography>
                            <Typography color={'black'} gutterBottom variant="h6" component="div"  >
                                {`${data.projects[params.i].type}`}
                            </Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`Link: `}
                            </Typography>
                            <a href={data.projects[params.i].link}>
                                <Typography color={'black'} gutterBottom variant="h6" component="div"  >
                                    {`${data.projects[params.i].link}`}
                                </Typography>
                            </a>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`Description: `}
                            </Typography>
                            <Typography color={'black'} gutterBottom variant="h6" component="div"  >
                                {`${data.projects[params.i].description}`}
                            </Typography>
                        </Box>
                        <Typography color={'black'} gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                            Sample Images:
                        </Typography>
                        <ImageList variant="masonry" cols={3} gap={8} display={'flex'} aligncontents={'center'}>
                            {data.projects[params.i].gallery.map((item) => (
                                <ImageListItem key={item}>
                                    <img
                                        src={`${item}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>

                    </Box>
                </Container>
            </Box>
        </>
    );
}
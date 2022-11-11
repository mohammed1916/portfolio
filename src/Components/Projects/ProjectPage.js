import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'

import ImageGallery from 'react-image-gallery';

import { data } from '../../data'

import { useParams } from "react-router-dom";


export default function ProjectPage() {
    let params = useParams();

    return (
        <>
            <Typography textAlign="center" fontFamily={'Be Vietnam Pro'} fontSize={'40px'} color={'black'} pt={{ xs: 1, sm: 2 }}>PROJECT</Typography>
            <Box
                mx={{ xs: 1, sm: 2, lg: 5, xl: 10 }}
                my={{ xs: 2, sm: 5, lg: 5, xl: 10 }}
                py={{ xs: 2, sm: 5, lg: 5, xl: 10 }}
                px={{ xs: 1, sm: 2, lg: 5, xl: 10 }}
                // bgcolor={'#333333'}
                color={'white'}
                borderRadius={5}
                className="bgimg"
            >
                <Container className='w-full boxShadow'>
                    <Box className="mt-8 rounded-t-2xl flex flex-col flex-wrap justify-center" boxShadow={10} padding={{ xs: 1, lg: 2 }} paddingBottom={'30px'} bgcolor={'#540033ff'}>

                        <Typography fontFamily={'ZCOOL XiaoWei'} gutterBottom variant="h3" component="div" textAlign={'center'} paddingBottom={'8px'}>
                            {data.projects[params.i].title}
                        </Typography>

                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`APPLICATION TYPE:`}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div"  >
                                {`${data.projects[params.i].type}`}
                            </Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`LINK: `}
                            </Typography>
                            <a href={data.projects[params.i].link} className='link'>
                                <Typography color={'white'} gutterBottom variant="h6" component="div"  >
                                    {`${data.projects[params.i].link}`}
                                </Typography>
                            </a>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} >
                            <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                                {`DESCRIPTION: `}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div"  >
                                {`${data.projects[params.i].description}`}
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="mt-8 rounded-t-2xl flex flex-col flex-wrap justify-center" boxShadow={10} padding={{ xs: 1, lg: 2 }} paddingBottom={'30px'} bgcolor={'#540033ff'}>
                        <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }} paddingRight={'5px'}>
                            SAMPLE IMAGES:
                        </Typography>
                    </Box>
                    <Box className="rounded-b-2xl p-7 bg-white w-full">
                        <Box padding={'20px'}>
                            <ImageGallery items={data.projects[params.i].gallery} />
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
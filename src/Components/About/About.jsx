import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { data } from "../../data";
import AnimatedSectionHeading from "../common/AnimatedSectionHeading";

export default function About()
{

    return (
        <>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor={'white'}
                color={'white'}
            >
                <Container sx={{ width: '100%' }}>
                    <AnimatedSectionHeading>About</AnimatedSectionHeading>
                    <Box
                        display={'flex'} 
                        flexWrap={'wrap'} 
                        flexDirection={'row'} 
                        justifyContent='space-evenly'
                        bgcolor={'#eee'} 
                        borderRadius={'20px'} 
                        padding={'20px'}
                        alignItems={'center'}
                    >
                        <Box padding={'10px'} alignItems={'center'}>
                            <img src={data.information.image} alt="" />
                        </Box>

                        <Box maxWidth={'500px'} bgcolor={'white'} borderRadius={'20px'} padding={'20px'} boxShadow={2}>
                            <Typography 
                                paddingBottom={'10px'}
                                fontFamily={'Gilroy Light'}
                                color={'black'}
                            >
                                Hi There!
                            </Typography>
                            <Typography 
                                paddingBottom={'10px'}
                                fontFamily={'Gilroy Light'}
                                color={'black'}
                            >
                                {data.information.whoami}
                            </Typography>
                            <Typography 
                                paddingBottom={'10px'}
                                fontFamily={'Gilroy Light'}
                                color={'black'}
                            >
                                {data.information.description}
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

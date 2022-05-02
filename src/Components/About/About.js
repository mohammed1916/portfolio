import { Image } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { data } from "../../data";

export default function About() {

    return (
        <>
            <Typography textAlign="center" fontFamily={'Righteous'} fontSize={'40px'} color={'black'} bgcolor={'white'} pt={{ xs: 1, sm: 2 }}>About</Typography>
            <Box
                py={{ xs: 5, sm: 10 }}
                bgcolor={'white'}
                color={'black'}
                display={'flex'} flexWrap={'wrap'} flexDirection={'row'} justifyContent='space-evenly'
            >
                <Box padding={'10px'} alignItems={'center'}>
                    <img src={data.information.image} />
                </Box>

                <Box maxWidth={'500px'} bgcolor={'#eee'} borderRadius={'20px'} padding={'10px'}>
                    <Typography paddingBottom={'10px'}>
                        Hello There!
                    </Typography>
                    <Typography paddingBottom={'10px'}>
                        {data.information.whoami}
                    </Typography>
                    <Typography paddingBottom={'10px'}>
                        {`Domain: ${data.information.domain}`}
                    </Typography>
                    <Typography paddingBottom={'10px'}>
                        {data.information.description}
                    </Typography>
                </Box>
            </Box >
        </>
    );
}
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { data } from "../../data";

export default function About()
{

    return (
        <>
            <Typography textAlign="center" fontFamily={'Gilroy Bold'} fontSize={'40px'} color={'black'} bgcolor={'white'} pt={{ xs: 1, sm: 2 }}>About</Typography>
            <Box
                py={{ xs: 5, sm: 10 }}
                bgcolor={'white'}
                color={'black'}
                fontFamily={'Gilroy Light'}
                display={'flex'} flexWrap={'wrap'} flexDirection={'row'} justifyContent='space-evenly'
            >
                <Box padding={'10px'} alignItems={'center'}>
                    <img src={data.information.image} alt="" />
                </Box>

                <Box maxWidth={'500px'} bgcolor={'#eee'} borderRadius={'20px'} padding={'20px'}>
                    <Typography paddingBottom={'10px'}
                        fontFamily={'Gilroy Light'}
                    >
                        Hi There!
                    </Typography>
                    <Typography paddingBottom={'10px'}
                        fontFamily={'Gilroy Light'}
                    >
                        {data.information.whoami}
                    </Typography>
                    <Typography paddingBottom={'10px'}
                        fontFamily={'Gilroy Light'}
                    >
                        {data.information.description}
                    </Typography>
                </Box>
            </Box >
        </>
    );
}

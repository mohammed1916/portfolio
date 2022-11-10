import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box'

import { data } from '../../data'
import { Divider } from '@mui/material';

export default function Contact() {

    return (
        <>
            <Divider sx={{ margin: "20px" }} />
            <Box marginBottom={'20px'} display={'flex'} flexWrap={'wrap'} justifyContent='center'>
                {data.information.profiles.map((object, index) => (
                    <Box key={object.url + 1 * index} margin={'10px'} bgcolor={'#eee'} borderRadius={'20px'} padding={'10px'}>
                        <a href={object.url} className='link'>
                            <CardHeader
                                avatar={
                                    <Avatar src={object.icon} />

                                }
                                title={object.media}
                                subheader={object.url}
                            />
                        </a>
                    </Box>
                ))
                }
            </Box>
        </>
    );
}
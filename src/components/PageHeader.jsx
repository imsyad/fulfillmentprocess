import React from 'react';
import { Box, Heading } from 'grommet';

class PageHeader extends React.Component{

    render(){
        return(
            <Box
                align='start'
                justify='between'
                fill='horizontal'
                direction='row'
                overflow='hidden'
                background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
                height='70px'
            >
                <Box
                    fill  
                    align='center'
                    justify='center'
                > 
                    <Heading margin ='0' alignSelf='center' level='3' color="white">Kelompok 3</Heading>
                </Box>
            </Box>

        );
    }
}

export default PageHeader;
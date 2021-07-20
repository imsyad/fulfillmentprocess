import React from 'react';
import { Box, Heading, Menu, Text } from 'grommet';
import { navigate } from '@reach/router';

class PageHeader extends React.Component{

    render(){
        return(
            <Box
                pad={{horizontal:'40px'}}
                align='start'
                justify='between'
                fill='horizontal'
                direction='row'
                flex='shrink'
                overflow='hidden'
            >
                <Box
                    fill='vertical'
                > 
                    <Heading level='3'>Kelompok 4</Heading>
                </Box>
                {/* <Box
                    fill='vertical'
                    direction='row'
                >
                    <Box>
                        <Menu
                            label='Daftar LH'
                            items={[
                                {label:'LH 1 Analisis Permasalahan dan Kebutuhan', onclick:()=>{navigate(-1)}},
                                {label:'LH 2 Perancangan Interface', onClick:()=>{navigate(-1)}},
                                {label:'LH 3 Prototyping', onClick:()=>{navigate(-1)}}
                            ]}
                        />
                    </Box>
                    <Box

                    >
                        <Text>Tentang Kami</Text>
                    </Box>
                </Box> */}
            </Box>

        );
    }
}

export default PageHeader;
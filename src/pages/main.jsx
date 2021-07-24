import React, {useState} from 'react';
import { Box, Button, Sidebar } from 'grommet';
import { Helmet } from 'react-helmet';
import Page from '../components/Page';
import LH0 from './lh0'
import LH1 from './lh1'
import LH2 from './lh2'
import LH3 from './lh3'

const Main = () => {

    const titleName = [
        'LH 0 Buku Laporan Projek',
        'LH 1 Analisis Permasalahan dan Kebutuhan', 
        'LH 2 Perancangan Interface', 
        'LH 3 Prototyping'
    ];

    const [title, setTitle] = useState(titleName[0]);

    function contentSwitch(param) {
        switch (param) {
            case titleName[1]:
                return <LH1/>;
            case titleName[2]:
                return <LH2/>;
            case titleName[3]:
                return <LH3/>;
            default:
                return <LH0/>;
        }
    }

    return(
        <Page>
            <Helmet>
                <title>Proses Order Fulfillment | Kelompok 3</title>
                </Helmet>
            <Box 
                pad={{horizontal:'40px'}}
                fill='horizontal'
                direction='row'
                justify='between'  
            >
                <Box align='start'>
                    <Sidebar
                        pad={{horizontal:'12px'}}
                        responsive={false}
                    >
                        <Box align='start' gap='medium' fill='horizontal'>
                            <Box flex='grow' pad='8px' fill='horizontal' background={title===titleName[0]?"linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)":null}>
                                <Button color={title===titleName[0]?"white":'black'} plain label={titleName[0]} onClick={()=>setTitle(titleName[0])}/>
                            </Box>
                            <Box flex='grow' pad='8px' fill='horizontal' background={title===titleName[1]?"linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)":null}>
                                <Button color={title===titleName[1]?"white":'black'} plain label={titleName[1]} onClick={()=>setTitle(titleName[1])}/>
                            </Box>
                            <Box flex='grow' pad='8px' fill='horizontal' background={title===titleName[2]?"linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)":null}>
                                <Button color={title===titleName[2]?"white":'black'} plain label={titleName[2]} onClick={()=>setTitle(titleName[2])}/>                            
                            </Box>
                            <Box pflex='grow' pad='8px' fill='horizontal' background={title===titleName[3]?"linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)":null}>
                                <Button color={title===titleName[3]?"white":'black'} plain label={titleName[3]} onClick={()=>setTitle(titleName[3])}/>
                            </Box>
                        </Box>
                    </Sidebar>
                </Box>
                <Box width='75%'>
                    <Box border fill='horizontal' pad='16px' wrap={true}>
                        {contentSwitch(title)}
                    </Box>
                </Box>
            </Box>
        </Page>
    )
}

export default Main;
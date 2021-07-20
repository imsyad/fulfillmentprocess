import React, {useState} from 'react';
import { Box, Button, Heading, Sidebar } from 'grommet';
import Page from '../components/Page';
import LH0 from './lh0'

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
                return titleName[1];
            case titleName[2]:
                return titleName[2];
            case titleName[3]:
                return titleName[3];
            default:
                return <LH0/>;
        }
    }

    return(
        <Page>
            <Box 
                pad={{horizontal:'40px'}}
                fill='horizontal'
                direction='row'
                justify='between'  
            >
                <Box align='start'>
                    <Sidebar
                        responsive={false}
                    >
                        <Box align='start' gap='medium' fill='horizontal'>
                            <Box pflex='grow' pad='8px' fill='horizontal' background={{color:title===titleName[0]?'whitesmoke':null}}>
                                <Button plain label={titleName[0]} onClick={()=>setTitle(titleName[0])}/>
                            </Box>
                            <Box flex='grow' pad='8px' fill='horizontal' background={{color:title===titleName[1]?'whitesmoke':null}}>
                                <Button plain label={titleName[1]} onClick={()=>setTitle(titleName[1])}/>
                            </Box>
                            <Box flex='grow' pad='8px' fill='horizontal' background={{color:title===titleName[2]?'whitesmoke':null}}>
                                <Button plain label={titleName[2]} onClick={()=>setTitle(titleName[2])}/>                            
                            </Box>
                            <Box pflex='grow' pad='8px' fill='horizontal' background={{color:title===titleName[3]?'whitesmoke':null}}>
                                <Button plain label={titleName[3]} onClick={()=>setTitle(titleName[3])}/>
                            </Box>
                        </Box>
                    </Sidebar>
                </Box>
                <Box width='75%'>
                    <Heading level='2' margin='0'>{title}</Heading>
                    <Box border fill='horizontal' pad='16px' wrap={true}>
                        {contentSwitch(title)}
                    </Box>
                </Box>
            </Box>
        </Page>
    )
}

export default Main;
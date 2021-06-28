import React from 'react';
import { Box } from 'grommet';

class Page extends React.PureComponent{

    render(){
        return(

            <Box
                align='start'
                fill='vertical'
                background={{color:'blue'}}
            >
                {this.props.children}
            </Box>

        );
    }
}

export default Page;
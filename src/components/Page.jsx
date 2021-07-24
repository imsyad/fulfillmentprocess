import React from 'react';
import { Box } from 'grommet';
import PageHeader from './PageHeader';

class Page extends React.PureComponent{

    render(){
        return(

            <Box
                margin="0"
                align='start'
                justify='start'
                flex='grow'
                fill
                gap="40px"
            >
                <PageHeader/>
                {this.props.children}
            </Box>

        );
    }
}

export default Page;
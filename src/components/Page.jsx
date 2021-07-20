import React from 'react';
import { Box } from 'grommet';
import PageHeader from './PageHeader';

class Page extends React.PureComponent{

    render(){
        return(

            <Box
                align='start'
                justify='start'
                flex='grow'
                fill
            >
                <PageHeader/>
                {this.props.children}
            </Box>

        );
    }
}

export default Page;
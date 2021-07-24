import { Grommet, Box, Spinner } from 'grommet';
import Loadable from 'react-loadable';


const loading = <Box fill='vertical' align='center' margin='40px'><Spinner/></Box> 

const Home = Loadable({loader:()=>import('./pages/main'),loading(){return loading}});

const theme = {
  global: {
    focus: {
      outline: {
        color: 'transparent',
      },
    },
    colors: {
      brand: '#0284c2',
      background: {
        light: '#ffffff',
        dark: '#000000',
      },
    },
    font: {
      family:
        '-apple-system,\n         BlinkMacSystemFont, \n         "Segoe UI", \n         Roboto, \n         Oxygen, \n         Ubuntu, \n         Cantarell, \n         "Fira Sans", \n         "Droid Sans",  \n         "Helvetica Neue", \n         Arial, sans-serif,  \n         "Apple Color Emoji", \n         "Segoe UI Emoji", \n         "Segoe UI Symbol"',
    },
  },
};

function App() {
  return (
    <Grommet fulll theme={theme}>
      <Home/>
    </Grommet>
  );
}

export default App;

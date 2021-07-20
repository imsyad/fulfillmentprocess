import { Router } from '@reach/router';
import { Grommet, Box } from 'grommet';
import Loadable from 'react-loadable';

function RouterComponent({ children }) {
  return <>{children}</>;
}

const loading = <Box fill='vertical' align='center' margin='40px'><h1>loading</h1></Box> 

const Home = Loadable({loader:()=>import('./pages/main'),loading(){return loading}});

function App() {
  return (
    <Grommet>
      <Router primary={false} component={RouterComponent}>
        <Home path='/' />
      </Router>
    </Grommet>
  );
}

export default App;

import {Provider} from 'react-redux'
import store from './store/store'
import './App.css';
import RouterContainer from './RouterContainer';

const App = () => {
  return (
  <Provider store={store}>
    <RouterContainer />
  </Provider>
  );
}

export default App;

import Router from '../../../config/router';
import { store } from '../../../config/redux';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App;
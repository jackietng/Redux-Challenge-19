import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import store from './utils/store';
import App from './App.jsx';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <NoMatch />,
    children: [
      {
        index: true, 
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/success',
        element: <Success />
      }, {
        path: '/orderHistory',
        element: <OrderHistory />
      }, {
        path: '/products/:id',
        element: <Detail />
      }
    ]
  }
]);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);


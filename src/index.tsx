import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store/store'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <Layout/>
  <Provider store={store}>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </Provider>
);

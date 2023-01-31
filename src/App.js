import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './routers/routes';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
      <Toaster />
    </div>
  );
};

export default App;
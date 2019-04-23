import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import Main from './screens/Main';
import Sidebar from './components/Sidebar';

const styles = {
  wrapper: {
    height: '100%',
  },
};

export default function App(props) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <div className="container-fluid" style={styles.wrapper}>
            <div className="row" style={styles.wrapper}>
              <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                  <Sidebar {...props} />
                </div>
              </nav>
              <Main {...props} />
            </div>
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

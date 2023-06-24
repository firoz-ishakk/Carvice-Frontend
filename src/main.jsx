import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './pages/redux/configureStore.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import {persistor} from "./pages/redux/configureStore.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate  persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>,
)
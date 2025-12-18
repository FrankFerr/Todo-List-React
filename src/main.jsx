import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from "./router/Router.jsx"
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "./redux/Store.js"
import { TodoProvider } from './context/TodoProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <TodoProvider>
        <RouterProvider router={router} />
      </TodoProvider>
    </Provider>
  </StrictMode>,
)

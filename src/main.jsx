
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPro from './Components/ErrorPro.jsx';
import AboutContent from './Components/About/AboutContent.jsx';
import MenuContent from './Components/MenuBar/MenuContent.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Layout from './Components/Loyout.jsx';
import {Provider} from 'react-redux'
import {store} from './redux/store'
import BasketAdds from './Components/Basket/BasketAdds.jsx';




const router = createBrowserRouter([
  {
    path: '/home',
    element: <App/>,
    errorElement: <ErrorPro/>
  },
{
  
  path:'/',
  element: <Layout/>,
  children:[
    {
      path: '/home',
      element: <App/>,
      errorElement: <ErrorPro/>
    },

    {

      path:'/about',
      element: <AboutContent/>,
      errorElement: <ErrorPro/>
    },
    {
      path:'/menu',
      element: <MenuContent/>,
      errorElement: <ErrorPro/>
    },
    {
      path:'/contact',
      element: <Contact/>,
      errorElement: <ErrorPro/>
    },
    {
      path:'/basket',
      element: <BasketAdds/>,
      errorElement: <ErrorPro/>
    },
    {
      future: { v7_relativeSplatPath: true }, // ✅ Додаємо майбутню опцію
      v7_startTransition: true,
    }
  ] 
}




]);

createRoot(document.getElementById('root')).render(
  

<Provider store={store}>
<RouterProvider router={router} />


</Provider>
  
)



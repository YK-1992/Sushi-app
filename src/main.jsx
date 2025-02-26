import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPro from "./Components/ErrorPro.jsx";
import AboutContent from "./Components/About/AboutContent.jsx";
import MenuContent from "./Components/MenuBar/MenuContent.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Layout from "./Components/Loyout.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import BasketAdds from "./Components/Basket/BasketAdds.jsx";

const router = createBrowserRouter([
  {
    path: "/", // Корневой маршрут
    element: <Layout />,
    errorElement: <ErrorPro />,
    children: [
      {
        path: '/home',
        element: <App />,
      },
      {
        path: "about",
        element: <AboutContent />,
      },
      {
        path: "menu",
        element: <MenuContent />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "basket",
        element: <BasketAdds />,
      },
      {
        index: true, // Перенаправление с "/" на "/home"
        element: <App />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

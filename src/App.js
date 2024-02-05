import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Contact from './Pages/Contact/Contact';
import Portfolio from './Pages/Portfolio/Portfolio';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Main from './Pages/Home/Main';


function App() {

  let routes = createBrowserRouter([{
    path: "", element:<Layout/>, children:[
      {index: true, element: <Main/>},
      {path: "about", element: <About/>},
      {path: "portfolio", element: <Portfolio/>},
      {path: "contact", element: <Contact/>},


      {path: "*", element:<NotFound/>},
    ] 
    }])

  return (

    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
    
  );
}

export default App;


import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Homepage from './Homepage';
import Table from './components/Table';
import Form from './components/Form';

function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Homepage />, children:
        [
          { index: true, element: <Form /> },
          { path: 'viewShipment', element: <Table /> },
        ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App

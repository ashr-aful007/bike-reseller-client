import './App.css';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routs/Routs';

function App() {
  return (
    <div className="App">
     <RouterProvider router={router}>     
     </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;

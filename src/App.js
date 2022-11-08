import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes';

function App() {
  return (
    <div data-theme="retro" className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router} >

      </RouterProvider>

    </div>
  );
}

export default App;

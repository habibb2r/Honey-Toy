

import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './Shared/NavFoot/Navbar'

function App() {


  return (
    <div className='container mx-auto'>
      <Navbar></Navbar>
      <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
                {/* Same as */}
                <ToastContainer />
      
    </div>
  )
}

export default App

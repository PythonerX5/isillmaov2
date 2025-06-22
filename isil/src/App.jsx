import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [evetSize, setEvetSize] = useState(16); // Initial font size for EVET
  const [hayirSize, setHayirSize] = useState(16); // Initial font size for HAYIRRRR
  const [showForm, setShowForm] = useState(false); // Control form visibility

  const handleHayirClick = () => {
    setEvetSize(evetSize * 1.2); // Grow EVET by 20%
    setHayirSize(hayirSize * 0.8); // Shrink HAYIRRRR by 20%
  };

  const handleEvetClick = () => {
    setShowForm(true); // Show form when EVET is clicked
  };

  return (
    <>
      <h1>BENI SEVIYON MU??????</h1>
      <div style={{ position: 'relative', height: '100px' }}>
        <button 
          id='evetbtn' 
          style={{ 
            fontSize: `${evetSize}px`,
            position: 'absolute',
            zIndex: 2,
            left: '50%',
            transform: 'translateX(-50%)'
          }}
          onClick={handleEvetClick}
        >
          EVET
        </button>
        <br />
        <br />
        <button 
          id='hayirbtn' 
          style={{ 
            fontSize: `${hayirSize}px`,
            position: 'absolute',
            zIndex: 1,
            left: '50%',
            transform: 'translateX(-50%)'
          }}
          onClick={handleHayirClick}
        >
          HAYIRRRR
        </button>
      </div>
      {showForm && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <p>Bende seni portakalli ordegim</p>
        </div>
      )}
    </>
  )
}

export default App
import { useState } from "react";
import "./App.css";
function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showImages, setShowImages] = useState (false);

  const handleMouseEnter = () => {
    const randomX = Math.random() * 500 - 100;
    const randomY = Math.random() * 500 - 100;
    setPosition({ x: randomX, y: randomY });
  };



  return (
    <>
      <body className=" bg-pink-300 flex-col ">
        <div className=" duration-150 ease-in-out   hover:bg-pink-500 font-[Bad-Script]  p-10  max-w-sm mx-auto bg-pink-400 rounded-xl shadow-md text-center space-x-4">
          <h1 className="text-2xl font-medium text-black ">
            Aceita Namorar Comigo?
          </h1>
        </div>
        
        <div className="font-[Bad-Script] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10   max-w-sm mx-auto bg-pink-600 rounded-xl shadow-md text-center space-x-10 ">
          <button className="bg-green-400 rounded-xl shadow-md p-3 cursor-pointer"
          onClick={() => setShowImages(true)}
          >
            Sim
          </button>
          
          <button
            className="bg-red-600 rounded-xl shadow-md p-3 cursor-pointer transition-transform duration-50"
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
            }}
            onMouseEnter={handleMouseEnter}
            

            
          >
            Não
          </button>
        </div>
<div>
          {showImages && (

            <div>

            <div className="absolute left-10 top-1/2 transform -translate-y-1/2 p-4 bg-white rounded-xl shadow-md">
              <img src="https://i.ibb.co/tMhG2GLD/img1.png" alt="" />
            </div>

            <div className="absolute right-10 top-1/2 transform -translate-y-1/2 p-4 bg-white rounded-xl shadow-md">
              <img src="https://i.ibb.co/QvPh4fY6/img3.png" alt="" />
            </div>

            </div>

            
          )}
        </div>

      </body>
    </>
  );
}

export default App;

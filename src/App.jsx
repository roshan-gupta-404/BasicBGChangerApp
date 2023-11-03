import { useState } from "react"
import './index.css';

function App() {
  const [color, setColor] = useState('olive')
  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl mx-1">

            <button
            onClick={()=>setColor('#ff9933')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:'#ff9933'}}
            >Saffron</button>

            <button 
            onClick={()=>setColor('#0096FF')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:'#0096FF'}}
            >Blue</button>

            <button
            onClick={()=>setColor('#DAF7A6')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:'#DAF7A6'}}
            >Green</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
// in onClick we can directly write setColor but then we won't be able to pass the color value, it's becoz of syntax. so we need to call a either a call back function or a reference of function.
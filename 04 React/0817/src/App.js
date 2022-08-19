import { useState } from "react";
import Paint from "./components/Paint";
import { DashPlugin, EraserPlugin, PenPlugin } from "./components/Paint/plugins";

function App() {
  const [command, setCommand] = useState('pen')
  const [lineWidth, setLineWidth] = useState(1)
  const [color, setColor] = useState('#000000')
  return (
    <div>
      <div>
      <button onClick={() => setCommand('pen')} >Pen</button>
      <button onClick={() => setCommand('eraser')} >Eraser</button>
      <button onClick={() => setCommand('dash')} >Dash</button>
      <input type="range" min={1} max={10} defaultValue={1} onChange={e => setLineWidth(e.target.value)} />
      <input type="color" onChange={(e) => setColor(e.target.value)}/>
      </div>
      <Paint command={command} lineWidth={lineWidth} color={color} plugins={[new PenPlugin(), new EraserPlugin(), new DashPlugin()]} style={{ border: "1px solid black" }} />
    </div>
  );
}

export default App;

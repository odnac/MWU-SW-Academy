import { useCallback, useEffect, useRef, useState } from "react"
import Box2 from "./components/Box2"
import Checkbox from "./components/Checkbox";
import useToggle from "./components/hooks/useToggle";
import Checkbox2 from "./components/Checkbox2";
import Box3 from "./components/Box3";
import useHover from "./components/hooks/useHover";
import useKeyPress from "./components/hooks/useKeyPress";

function App() {
  /*
     * React.memo
     */

    const [count, setCount] = useState(0)

    return ( 
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
        <Box2 />
      </div> 
    )


    /*
     * useCallback
    */

    // const [foodOn, setFoodOn] = useState(false)
    // const [clothesOn, setClothesOn] = useState(false)
    // const [shelterOn, setShelterOn] = useState(false)

    // const foodChange = useCallback((e) => setFoodOn(e.target.checked), [])
    // const clothesChange =useCallback((e) => setClothesOn(e.target.checked), [])
    // const shelterChange =useCallback((e) => setShelterOn(e.target.checked), [])
 
    // return ( 
    //   <div>
    //     <Checkbox label="Food" on={foodOn} onChange={foodChange}/>
    //     <Checkbox label="Clothes" on={clothesOn}  onChange={clothesChange}/>
    //     <Checkbox label="Shelter" on={shelterOn}  onChange={shelterChange}/>
    //   </div>
    // )


    /*
    * Custom Hook
    */

    // const [on, toggle] = useToggle()
    // const [ref, isHover] = useHover()
    // const keyPressed = useKeyPress("a")

    // return (
    //   <div>
    //     <Checkbox2 checked={on} onChange={toggle} />
        
    //     {isHover ? 'hover' : 'mouseout'}
    //     <Box3 ref={ref}/>

    //     {keyPressed && "Pressed"}
    //   </div>
    // )
}

export default App;

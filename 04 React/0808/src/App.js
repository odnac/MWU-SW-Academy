import Counter from "./components/Counter";
import { useEffect, useState } from "react"
import Board from "./components/Board"

function App() {
    /*
     * 분기와 반복
    */
    // const [visible, setVisible] = useState(false);
    // const [visible2, setVisible2] = useState(false);
    // const [visible3, setVisible3] = useState(false);

    // const Data = [
    //   {
    //     id: 1,
    //     title: 'hawee',
    //     author: 'kim'
    //   }, {
    //     id: 2,
    //     title: 'hawee2',
    //     author: 'kim2'
    //   }, {
    //     id: 3,
    //     title: 'hawee3',
    //     author: 'kim3'
    //   }, {
    //     id: 4,
    //     title: 'hawee4',
    //     author: 'kim4'
    //   },
    // ]

    // return (
    //   <div>
    //     <button onClick={() => setVisible(!visible)}>Toggle1</button>
    //     {visible && (
    //       <h1>논리곱 연산자를 통해 쉽게 JSX 렌더링 여부를 결정할 수 있습니다.</h1>
    //     )}
    //     <button onClick={() => setVisible2(!visible2)}>Toggle2</button>
    //     {visible2 ? (
    //       <h1>삼항 연산자를 통해 쉽게 JSX 렌더링 여부를 결정할 수 있습니다.</h1>
    //     ) : null}
    //     <button onClick={() => setVisible3(!visible3)}>게시판</button>
    //     {visible3 ? (
    //       <h1>게시판</h1>
    //     ) : null}

    //     { visible ? <Board articles={Data}/> : <p>게시판을 보려면 게시판 버튼을 클릭해주세요</p> }
    //   </div>
    // )
    
    /*
     * 상태와 이벤트 바인딩
    */
    // const [totalCount, setTotalCount] = useState(0);

    // return (
    //   <div>
    //     TotalCount: {totalCount}
    //     <Counter 
    //       onIncrease={(count) => setTotalCount(totalCount + 1)}
    //       onDecrease={(count) => setTotalCount(totalCount - 1)}
    //     />
    //     <Counter 
    //       onIncrease={(count) => setTotalCount(totalCount + 1)}
    //       onDecrease={(count) => setTotalCount(totalCount - 1)}
    //     />
    //     <Counter 
    //       onIncrease={(count) => setTotalCount(totalCount + 1)}
    //       onDecrease={(count) => setTotalCount(totalCount - 1)}
    //     />
    //   </div>
    // )

    /*
     * useEffect
     * 무언가 변화가 있을 때 감지하여 반응하는 Hook
    */
    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log(`Clicked ${count} times.`)
    }, [count]); // count의 변화를 감지한다.

    useEffect(() => {
      console.log('Component Loaded')
      const handleScroll = () => {
        console.log(window.scrollY)
      }

      document.addEventListener('scroll', handleScroll) // 전역적인 이벤트를 사용할 때 쓸 수 있다.
      return () => document.removeEventListener('scroll', handleScroll) // return으로 반환한 함수는 컴포넌트가 제거될 때 실행된다.
    }, []) // 컴포넌트가 처음 로드될 때 실행된다.

    return ( 
    <div>
      <div>You clicked {count} times.</div>
      <button onClick={() => setCount(count + 1)}>+</button>

      <div style={{height: 100000}}></div>
    </div>
    )
}

export default App;

import Counter from "./components/Counter";
import { useCallback, useEffect, useRef, useState } from "react"
import Board from "./components/Board"
import Input from "./components/input";
import AutoCounter from "./components/AutoCounter";
import Pagination from "./components/Pagination";
import Box from "./components/Box";
import ShowSum from "./components/ShowSum";


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

    // const [count, setCount] = useState(0);

    // useEffect(() => {
    //   console.log(`Clicked ${count} times.`)
    // }, [count]); // count의 변화를 감지한다.

    // useEffect(() => {
    //   console.log('Component Loaded')
    //   const handleScroll = () => {
    //     console.log(window.scrollY)
    //   }

    //   document.addEventListener('scroll', handleScroll) // 전역적인 이벤트를 사용할 때 쓸 수 있다.
    //   return () => document.removeEventListener('scroll', handleScroll) // return으로 반환한 함수는 컴포넌트가 제거될 때 실행된다.
    // }, []) // 컴포넌트가 처음 로드될 때 실행된다.

    // return ( 
    // <div>
    //   <div>You clicked {count} times.</div>
    //   <button onClick={() => setCount(count + 1)}>+</button>

    //   <div style={{height: 100000}}></div>
    // </div>
    // )


    /*
     * useRef
     * 1. DOM에 직접 전근할 때 사용한다.
     * 2. 지역 변수로 사용할 때 사용한다.
     * useState는 값이 변경될 때 다시 렌더링을 한다.
     * useRef는 값이 변경되더라도 다시 렌더링을 하지 않는다.
    */

    // const inputRef = useRef();

    // return (
    //   <div>
    //     <Input ref={inputRef}/>
    //     <button onClick={() => inputRef.current.focus()}>Focus</button>

    //     <AutoCounter />
    //   </div>
    // )

    
    /*
     * 페이지네이션
    */

    // const [page, setPage] = useState(0)
    // const articles = new Array(100).fill().map((_, i) => ({
    //   id: i,
    //   title: `${i}번 게시물`
    // }))

    // const limit = 10;
    // const offset =  page * limit;

    // return (
    //   <div>
    //     <Pagination defaultPage={0} limit={limit} total={articles.length} onChange={setPage} />
    //     <Board2 articles={articles.slice(offset, offset + limit)}/>
    //   </div>
    // )
    
    
    /*
     * 컴포넌트 스타일링
     * 스타일을 적용하는 법
     * 1. 스타일시트를 이용하는 것
     * 2. Inline style을 적용하는 것
     * 3. CSS in JS - emotion
    */
    // return (
    //   <div>
    //     <Box bgColor="red"/>
    //   </div>
    // )


    /*
     * useMemo
     * 1. 함수 컴포넌트는 자신의 상태가 변경될 때 리렌더링된다.
     * 2. 부모 컴포넌트로 부터 받는 prop이 변경될 때 리렌더링된다.
     * 3. 부모 컴포넌트의 상태가 변경되면 리렌더링된다.
     * 만약 연산의 속도가 느린 컴포넌트라면?
     */

    const [label, setLabel] = useState('Result')
    
    return (
      <div>
        <button onClick={() => setLabel(label + ":")}>Change Label</button>
        <ShowSum label={label} n={10000000} />
      </div>
    )
}

export default App;

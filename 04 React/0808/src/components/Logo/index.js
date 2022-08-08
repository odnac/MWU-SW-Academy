import logo from './logo.svg';
import PropTypes from "prop-types"

// 방법 1
function Logo(props) {
    return (
        <img 
        src={logo} 
        className="App-logo" 
        alt="logo" 
        style={{width: props.size, heightL: props.size}}
        />
    )
}

// defualt값을 넘겨받을 때
Logo.defaultProps = {
    size: 200,
}

// 받고싶은 타입 설정
Logo.propsTypes = {
    size: PropTypes.number,
}

/*
    방법 2
*/
// function Logo({ size = 200 }) {
//     return (
//         <img 
//         src={logo} 
//         className="App-logo" 
//         alt="logo" 
//         style={{width: size, heightL: size}}
//         />
//     )
// }

// // 받고싶은 타입 설정
// Logo.propsTypes = {
//     size: PropTypes.number,
// }

export default Logo;
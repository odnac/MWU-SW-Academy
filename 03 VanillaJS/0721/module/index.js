/* // 방법 1
import * as constans from './constants.js'
import App from './App.js'

const $body = document.querySelector('body')

$body.innerHTML = $body.innerHTML + JSON.stringify(constans)

new App()
*/

/* // 방법 2
import  {DOMAIN_NAME, PORT } from './constants.js'
// as
// import  {DOMAIN_NAME as DN, PORT as P } from './constants.js'

const $body = document.querySelector('body')

$body.innerHTML = $body.innerHTML + `<div>${DOMAIN_NAME}</div>`
// $body.innerHTML = $body.innerHTML + `<div>${DN}</div>`
$body.innerHTML = $body.innerHTML + `<div>${PORT}</div>`
//$body.innerHTML = $body.innerHTML + `<div>${P}</div>`
*/

// 방법 3
import App, {printToday} from "./App.js";

printToday()
new App()
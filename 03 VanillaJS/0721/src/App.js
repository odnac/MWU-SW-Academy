 export default function() {
    this.render = () =>{
        alert('hello!')
    }
    this.render()
 }

 export const printToday = () => {
    console.log(new Date().toLocaleString())
 }
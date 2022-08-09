import React from "react"

const Box2 = React.memo(() => {
    console.log("Render box")
    const style = {
        width: 100,
        height: 100,
        backgroundColor: "red",
    }
    return <div style={style} />
})

export default Box2
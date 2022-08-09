import React from "react"

const Checkbox = React.memo(({ label, on, onChange }) => {
    console.log(label, on)
    return (
        <label>
            {label}
            <input type="checkbox" defaultChecked={on} onChange={onChange} />
        </label>
    )
})

export default Checkbox
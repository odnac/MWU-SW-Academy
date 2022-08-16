import styled from "@emotion/styled"
import useToggle from "../hooks/useToggle"

const ToggleContainer = styled.label`
    display: inline-block;
    cursor: pointer;
    user-select: none;
`

const ToggleSwitch = styled.div`
    width: 64px;
    height: 30px;
    padding: 2px;
    border-radius: 15px;
    background-color: #ccc;
    box-sizing: border-box;
    transition: background-color 0.2s ease-out;

    &:after{
        content: '';
        position: relative;
        left: 0;
        display: block;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background-color: white;
        transition: left 0.2s ease-out;
    }
`

const ToggleInput = styled.input`
    dispaly: none;

    &:checked + div {
        background: lightgreen;
    }

    &:checked + div:after {
        left: calc(100% - 26px);
    }
`

const Toggle = ({ on = false, onChange, ...props }) => {
    const [checked, toggle] = useToggle(on)

    const handleChange = (e) => {
        toggle()
        onChange && onChange()
    }

    return (
        <ToggleContainer {...props}>
            <ToggleInput type="checkbox" onChange={handleChange} checked={checked} />
            <ToggleSwitch />
        </ToggleContainer>
    )
}

export default Toggle
import styled from '@emotion/styled'

const Icon = styled.i`
    display: inline-block
    vertical-align: middle
`

const Spinner = ({ size = 24, color = '#919EAB', loading = true, ...props }) => {
    const sizeStyle = {
        width: size,
        height: size
    }

    return loading ? <></> : null
}

export default Spinner
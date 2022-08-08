import PropTypes from "prop-types"

function Paragraph({ children, size = 16, color = "white" }) {
    return (
        <p style={{fontSize: size, color}}>{children}</p>
    )
}

Paragraph.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
}

export default Paragraph
import styled from "@emotion/styled"
import PropTypes from 'prop-types'
import Text from './Text'

const TabItemWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 60px;
    background-color: ${({ active }) => active ? '#ddf' : '#eee'};
    cursor: pointer;
`

const TabItem = ({ title, index, active, ...props }) => {
    return (
        <TabItemWrapper active={active} {...props}>
            <Text string={active}>{title}</Text>
        </TabItemWrapper>
    )
}

TabItem.defaultProps = {
    __TYPE: 'Tab.item'
}

TabItem.propTypes = {
    __TYPE: PropTypes.oneOf(['Tab.item'])
}

export default TabItem
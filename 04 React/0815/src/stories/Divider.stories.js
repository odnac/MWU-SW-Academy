import Divider from "../components/Divider";
import Text from "../components/Text"

export default {
    title: 'Component/Divider',
    component: Divider
}

export const Horizontal = () => {
    return (
        <>
            <Text>위</Text>
            <Divider type="horizontal" />
            <Text>위</Text>
        </>
    )
}

export const Vertical = () => {
    return (
        <>
            <Text>왼</Text>
            <Divider type="vertical" />
            <Text>오</Text>
        </>
    )
}
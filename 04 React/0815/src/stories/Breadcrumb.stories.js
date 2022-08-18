import Breadcrumb from "../components/Breadcrumb";

export default {
    title: 'Component/Breadcrumb',
    component: Breadcrumb
}

export const Default = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="/Home">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/level1">Level 1</Breadcrumb.Item>
            <Breadcrumb.Item href="/level2">Level 2</Breadcrumb.Item>
        </Breadcrumb>
    )
}
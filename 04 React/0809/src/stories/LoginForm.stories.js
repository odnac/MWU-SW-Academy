import LoginForm from "../components/LoginForm";

export default {
    title: 'component/LoginForm',
    Component: LoginForm,
    argTypes: {
        onSubmit: { action: "onSubmit"},
    }
}

export const Default = (args) => {
    return <LoginForm {...args} />
}
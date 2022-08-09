import SignUpForm from "../components/SignUpForm";

export default {
    title: 'component/SignUpForm',
    Component: SignUpForm,
    argTypes: {
        onSubmit: { action: "onSubmit"},
    }
}

export const Default = (args) => {
    return <SignUpForm {...args} />
}
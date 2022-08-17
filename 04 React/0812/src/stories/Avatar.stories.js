import Avatar from "../components/Avatar";

export default {
    title: 'Component/Avatar',
    component: Avatar,
    argTypes: {
        src: {defaultValue: 'https://picsum.photos/200'},
        shape: {
            defaultValue: 'circle',
            control: 'inline-radio',
            options: ['circle', 'round', 'sqaure']
        },
        size: {
            defaultValue: 70,
            control: { type: 'range', min: 40, max: 200},
        },
        mode: {
            defaultValue: 'cover',
            control: 'inline-radio',
            options: ['contain', 'cover', 'fill'],
        }
    }
}

export const Default = (args) => <Avatar {...args} />

export const Group = () => {
    return (
        <Avatar.Group size={40}>
            <Avatar src="https://picsum.phtos/200?1" />
            <Avatar src="https://picsum.phtos/200?2" />
            <Avatar src="https://picsum.phtos/200?3" />
            <Avatar src="https://picsum.phtos/200?4" />
        </Avatar.Group>
    )
}
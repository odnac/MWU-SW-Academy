export default function UserList({
    $target,
    initialState,
    onSelect
}) {
    const $userList = document.createElement('div')
    $target.appendChild($userList)

    this.state = initialState

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        $userList.innerHTML = `
            <h1>Users</h1>
            <ul>
                ${this.state.map(username => `
                    <li>${username}</li>
                `).join('')}
            </ul>
        `
    }

    this.render()
}
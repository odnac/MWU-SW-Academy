import { ReactNode } from "react"
import Menu from "../Menu"

interface Props {
    children: ReactNode
}

const DefaultTemplate = ({ children }: Props) {
    return (
        <div>
            <Menu />
            <main>{children}</main>
        </div>
    )
}

export default DefaultTemplate
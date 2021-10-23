type Props = {
    name: string
}

export const Header = ({name}: Props) => {
    return (
        <header>
            <h1>{name}</h1>
        </header>
    )
}

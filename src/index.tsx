import React from 'react'
import ReactDOM from 'react-dom/client'

function List() {
    return (
        <>
            <ul>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
            </ul>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                tenetur nisi quae consequatur magni et, fugit, quisquam nam
                aperiam, voluptate adipisci consectetur aspernatur placeat earum
                tempore repellat quia libero odio.
            </p>
        </>
    )
}

type TitleProps = {
    name: string
    text: string
    year: number
}

const Title = ({ name, text, year }: TitleProps) => {
    return (
        <>
            <h1>Hello {name}</h1>
            <p>{text}</p>
            <div>Year: {year}</div>
        </>
    )
}

const App = () => {
    return (
        <div className="app">
            <Title
                name="App"
                text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                year={2023}
            />
            <Title
                name="React"
                text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                year={2022}
            />
            <Title
                name="TS"
                text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                year={2021}
            />
            <List />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

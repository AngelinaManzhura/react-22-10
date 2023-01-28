import React from 'react'
import ReactDOM from 'react-dom/client'
import { List } from './List'

type TitleProps = {
    name?: string
    text: string
    year: number
}

const Title = ({ name = 'Jack', text, year }: TitleProps) => {
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

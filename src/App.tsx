import { useState } from 'react'
import './App.css'
import { MarkdownViewer } from './component/MarkdownViewer'

const exampleMarkdown = `
# Title001

## title

string

- one
- two
- three

## table

|header1|header2|header3|
|:------|:-----:|------:|
|hoge   |fuga   |piyo   |
|>      |fuga   |piyo   |
|hoge   |fuga   |       |
|hoge   |>      |piyo   |
|hoge   |       |       |
|>      |fuga   |       |
|>      |>      |piyo   |

## link

[anker link](#Title001)

`

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>React Markdown Example</p>
      </header>
      <MarkdownViewer markdown={exampleMarkdown} />
    </div>
  )
}

export default App

import { VFC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export type Props ={
  markdown: string,  
}

export const MarkdownViewer: VFC<Props> = (props: Props) => {
  return <div>aaaa
    <ReactMarkdown
      components={{
        h1: ({node, ...props}) => <h1 id={props.children.toString()} {...props}>aa{props.level}</h1>,
        a: ({node, ...props}) => <a href={props.href} {...props}>{props.children}</a>,
      }}
      children={props.markdown}
      remarkPlugins={[remarkGfm, ]} />
  </div>

}
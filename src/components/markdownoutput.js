import React,{Component} from 'react'
import ReactMarkdown from 'react-markdown';
import '../index.css'
export default class MarkdownOutput extends Component{
    render(){
        return (
            <div className="card prev" >
            <div class="card-header">
                Preview
            </div>
            <div id="preview" class=" card-body" >
                <ReactMarkdown  source={this.props.source} />
            </div>
            </div>

        )
    }
}
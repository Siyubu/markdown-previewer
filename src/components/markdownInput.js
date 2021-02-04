 import React, {Component} from 'react'
 import '../index.css'
export default class MarkdownInput extends Component{

    handleChange=(evt)=>{
        this.props.handleChange(evt)
    }
    render(){
        return (
            <div className="card" >
                <div class="card-header">
                    Editor
                </div>
            <textarea  id="editor" class=" card-body md-textarea form-control edit" value={this.props.initialState} onChange={this.handleChange}>    
            </textarea>
            </div>
        )
    }

}
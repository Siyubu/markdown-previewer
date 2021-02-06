 import React, {Component} from 'react'
 import '../index.css'
export default class MarkdownInput extends Component{

    constructor(props) {
        super(props);
        this.state = {
            expand:false
        };
        this.toggle = this.toggle.bind(this);
      }
    handleChange=(evt)=>{
        this.props.handleChange(evt)
    }
    toggle=(e)=>{
        e.preventDefault();
        var element2=document.getElementById("editor").style;
        let localLiked = this.state.expand;
        localLiked = !localLiked;
        this.setState({
            ...this.state, expand:localLiked
        })
        if(this.state.expand==false)
        {
            element2.width="96%";
            element2.height ="100vh";
            element2.margin = "auto"

        }
        else{
            element2.width="100%";
            element2.height ="200px";
            element2.margin = "auto"

        }

    }
    render(){
        return (
            <div className="card edit" >
                <div className="card-header row">
                    Editor
                   <div className="expansion" onClick={(e) => this.toggle(e)}> 
                    {this.state.expand == false ? (<i className="fa fa-arrows-alt"></i> ) : (<i className="fa fa-compress"></i> )}
                    </div>
                    </div>
            <textarea  id="editor" class=" card-body md-textarea form-control edit" value={this.props.initialState} onChange={this.handleChange}>    
            </textarea>
            </div>
        )
    }

}
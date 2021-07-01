import React from 'react'

class EditorItem extends React.Component {
    state = {
        choisen: true,
        isBlock: false,
    }

    onClickChoise = () => {
        this.props.updateData(this.state.choisen)
        this.setState({choisen: !this.state.choisen})
        // this.setState({isBlock: this.props.isBlock})
        
        
    }
    

    render () {
        
        return (  
            <li className="editor__item"> <span className="editor__text">{this.props.label}</span>
                <button className={this.state.choisen ? 'editor__button editor__button--false' : 'editor__button editor__button--true'} onClick={this.onClickChoise}></button>
                
            </li>
            
            
        )
    }
}

export default EditorItem;
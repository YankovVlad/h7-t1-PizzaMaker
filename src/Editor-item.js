import React from 'react'

class EditorItem extends React.Component {
    state = {
        choisen: true,
    }

    onClickChoise = () => {
        this.props.updateData(this.state.choisen)
        this.setState({choisen: !this.state.choisen})
    }
    

    render () {
        
        return (  
            <li className={this.state.choisen ? "editor__item item-default" : "editor__item item-active"}> <span className="editor__text">{this.props.label}</span>
                <button disabled={this.props.disabled} 
                        className={this.state.choisen ? 'editor__button editor__button--false' : 'editor__button editor__button--true'} 
                        onClick={this.onClickChoise}>
                </button> 
            </li>
        )
    }
}

export default EditorItem;
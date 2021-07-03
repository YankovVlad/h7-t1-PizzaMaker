import React from 'react'

class EditorItemDisable extends React.Component {
    state = {
        choisen: true,
        isBlock: false,
    }

    onClickChoise = () => {
        this.props.updateData(this.state.choisen)
        this.setState({choisen: !this.state.choisen})  
    }
    

    render () {
        return (  
            <li key={this.props.key} className="editor__item item-disabled" > <span className="editor__text text-disable">{this.props.label}</span>
                <button disabled className="editor__button editor__button--false button-disabled"></button> 
            </li>
        )
    }
}

export default EditorItemDisable;
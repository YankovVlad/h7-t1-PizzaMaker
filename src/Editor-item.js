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
            <li className="editor__item" key={this.props.key}> <span className="editor__text">{this.props.label}</span>
                <button className={this.state.choisen ? 'editor__button editor__button--false' : 'editor__button editor__button--true'} onClick={this.onClickChoise}></button> 
            </li>
        )
    }
}

export default EditorItem;
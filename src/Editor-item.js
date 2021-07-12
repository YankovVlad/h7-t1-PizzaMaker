import React from 'react'


class EditorItem extends React.Component {
    state = {
        choisen: true,
        currentCount: 1,
    }

    onClickChoise = () => {
        this.setState({choisen: !this.state.choisen, currentCount: this.props.count})
        this.props.updateData(this.state.choisen)
    }
    
    render () {
        
        return (  
            // Тут тернарник, делающий проверку состояния - заблокирован ли? Если нет, то активен ли? И присваиваются соответсвующие классы css.
            <li className={this.props.disable && this.state.choisen ?  ("editor__item item-disabled"
                ) : (
                    !this.state.choisen ? ("editor__item item-active"
                    ) : (
                        "editor__item item-default"))}>

                <span className="editor__text">{this.props.ingredient.label}</span>
                <button disabled={this.props.disable && this.state.choisen ? true : false} 
                        className={!this.state.choisen ? 'editor__button editor__button--true' : 'editor__button editor__button--false'} 
                        onClick={this.onClickChoise}>
                </button>
                
            </li>
        )
        
    }
}

export default EditorItem;
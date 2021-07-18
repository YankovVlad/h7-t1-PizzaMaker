import React from 'react'


export class BgPizza extends React.Component {

    render () {
       
        return (
            <div className={this.props.ingredient.isActive ? this.props.ingredient.class : ''}></div>
        )
    }
}
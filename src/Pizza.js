import React from 'react'

import EditorItem from './Editor-item'

import { BgPizza } from './Bg'


class Pizza extends React.Component {
    state = {
        choiseLimit: 5,
        counter: 0,

        ingredientState: {
            cheese: false,
            pepperoni: false,        
            jalapeno: false,
            pineapple: false,        
            onion: false,
            cucumber: false,
            bacon: false,
        },
    }
    
    setCounter = (value) => {
        this.setState({counter: value ? this.state.counter + 1 : this.state.counter - 1})
    }
    // Метод принимает массив, идентификатор компонента, целевой ключ и целевое значение. Перебирает массив и сравнивает id объектов в массиве с id компонета и если true, то мутирует данный объект.
    // Это нужно для присваивания ключа в нужный объект по клику. Иначе значение статично и не пинимает в себя state динамично.
    checkAndChangeById = (arr, id, targetKey, targetValue) => {
        arr.forEach((elem) => {
            if (elem.id === id) {
                elem[targetKey] = targetValue
            }})
    }
    setValue = (obj, key, value) => {
        const newObj = obj
        newObj[key] = value
        return newObj
    }
    
    veg = [
        {
            id: 1,
            label: 'Cheese',
            class: 'ingredient cheese',
            isActive: false,
            update: (value, id) => {
                this.setState({ingredientState: this.setValue(this.state.ingredientState, 'cheese', value)})
                this.setCounter(value)
                this.checkAndChangeById(this.veg, id, 'isActive', value)
            },
        },
    
        {
            id: 2,
            label: 'Pepperoni',
            class: 'ingredient pepperoni',
            isActive: false,
            update: (value, id) => {
                this.setState({ingredientState: this.setValue(this.state.ingredientState, 'pepperoni', value)})
                this.setCounter(value)
                this.checkAndChangeById(this.veg, id, 'isActive', value)
                
            }
            
        },
    
        {
            id: 3,
            label: 'Jalapeno',
            class: 'ingredient jalapeno',
            isActive: false,
            update: (value, id) => {
                this.setState({ingredientState: this.setValue(this.state.ingredientState, 'jalapeno', value)})
                this.setCounter(value)
                this.checkAndChangeById(this.veg, id, 'isActive', value)
                
            }
            
        },
    
        {
            id: 4,
            label: 'Pineapple',
            class: 'ingredient pineapple',
            isActive: false,
            update: (value, id) => {
                this.setState({ingredientState: this.setValue(this.state.ingredientState, 'pineapple', value)})
                this.setCounter(value)
                this.checkAndChangeById(this.veg, id, 'isActive', value)
                
            }
            
        },
    
        {
            id: 5,
            label: 'Onion',
            class: 'ingredient onion',
            isActive: false,
            update: (value, id) => {
                this.setState({ingredientState: this.setValue(this.state.ingredientState, 'onion', value)})
                this.setCounter(value)
                this.checkAndChangeById(this.veg, id, 'isActive', value)
                
            }
            
        },
    
        {
            id: 6,
            label: 'Cucumber',
            class: 'ingredient cucumber',
            isActive: false,
            update: (value, id) => {
                this.setState({ingredientState: this.setValue(this.state.ingredientState, 'cucumber', value)})
                this.setCounter(value)
                this.checkAndChangeById(this.veg, id, 'isActive', value)
                
            },

        },
        {
            id: 7,
            label: 'Bacon',
            class: 'ingredient bacon',
            isActive: false,
            update: (value, id) => {
                this.setState({ingredientState: this.setValue(this.state.ingredientState, 'bacon', value)})
                this.setCounter(value)
                this.checkAndChangeById(this.veg, id, 'isActive', value)
                
            },
        }
    ]

    render () {
        
        return (
            <div className="wrap">
                <div className="pizza__body">
                    <h2 className="pizza__title">Create your perfect Pizza</h2>
                    <div className="pizza__img">
                    
                        {this.veg.map((elem) => {
                            return <BgPizza key={elem.id} ingredient={elem}/>
                        })}
    
                    </div>
                    <ul className="pizza__editor">
                        <p className={this.state.counter >= this.state.choiseLimit ? 'editor__warning' : 'editor__warning warning-hidden'}>{'You can select up to 5 items'}</p>

                        {this.veg.map((elem) => {
                            return <EditorItem key={elem.id} id={elem.id} ingredient={elem} updateData={elem.update} disable={this.state.counter >= 5 ? true : false}/>
                            
                        })}
                                              
                    </ul>
                </div>
            </div>
            
        )
        
    }
}
export default Pizza;
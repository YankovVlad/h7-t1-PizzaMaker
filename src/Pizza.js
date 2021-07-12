import React from 'react'
import EditorItem from './Editor-item'

import { BgPizza } from './Bg'


class Pizza extends React.Component {
    state = {
        choiseLimit: 5,
        counter: 0,

        stateChildCheese: false,
        stateChildPepperoni: false,        
        stateChildJalapeno: false,
        stateChildPineapple: false,        
        stateChildOnion: false,
        stateChildCucumber: false,
        stateChildBacon: false,    }
    
    veg = [
        {
            id: 1,
            label: 'Cheese',
            class: 'ingredient cheese',
            update: (value) => {
                this.setState({stateChildCheese:value})
                this.setState({counter: value ? this.state.counter + 1 : this.state.counter - 1}
                )
                this.veg.forEach(obj => {
                    obj.count = this.state.counter
                })
                
            },
        },
    
        {
            id: 2,
            label: 'Pepperoni',
            class: 'ingredient pepperoni',
            update: (value) => {
                this.setState({stateChildPepperoni:value})
                this.setState({counter: value ? this.state.counter + 1 : this.state.counter - 1})
                this.veg.forEach(obj => {
                    obj.count = this.state.counter
                })
            }
            
        },
    
        {
            id: 3,
            label: 'Jalapeno',
            class: 'ingredient jalapeno',
            update: (value) => {
                this.setState({stateChildJalapeno:value})
                this.setState({counter: value ? this.state.counter + 1 : this.state.counter - 1})
                this.veg.forEach(obj => {
                    obj.count = this.state.counter
                })
            }
            
        },
    
        {
            id: 4,
            label: 'Pineapple',
            class: 'ingredient pineapple',
            update: (value) => {
                this.setState({stateChildPineapple:value})
                this.setState({counter: value ? this.state.counter + 1 : this.state.counter - 1})
                this.veg.forEach(obj => {
                    obj.count = this.state.counter
                })
            }
            
        },
    
        {
            id: 5,
            label: 'Onion',
            class: 'ingredient onion',
            update: (value) => {
                this.setState({stateChildOnion:value})
                this.setState({counter: value ? this.state.counter + 1 : this.state.counter - 1})
                this.veg.forEach(obj => {
                    obj.count = this.state.counter
                })
            }
            
        },
    
        {
            id: 6,
            label: 'Cucumber',
            class: 'ingredient cucumber',
            update: (value) => {
                this.setState({stateChildCucumber:value})
                this.setState({counter: value ? this.state.counter + 1 : this.state.counter - 1})
                this.veg.forEach(obj => {
                    obj.count = this.state.counter
                })
            },

        },
        {
            id: 7,
            label: 'Bacon',
            class: 'ingredient bacon',
            update: (value) => {
                this.setState({stateChildBacon:value})
                this.setState({counter: value ? this.state.counter + 1 : this.state.counter - 1})
                this.veg.forEach(obj => {
                    obj.count = this.state.counter
                })
            },
        }
    ]

    render () {
        
        return (
            <div className="wrap">
                <div className="pizza__body">
                    <h2 className="pizza__title">Create your perfect Pizza</h2>
                    <div className="pizza__img">
                        {/* Согласно state рендерится нужный бэкграунд на div. Делал попытку рендера циклом, но столкнулся с проблемами: 
                        1) Как изменить state некликабельного элемента?(Нет никакой функции, которая сделает setState) Как тригеррить state такого компонента?
                        2) Можно ли указать, в какой элемент DOM будет рендерится компонент? Это другой вариент, который подрузамевает внедрение этой фичи в цикл компонентов-ингредиентов, но оттуда нужно тогда рендерить div с бэкграундом в совершенно другом месте.
                        
                        Максимальное достижение - рендер сразу всех комопнентовю.*/}

                        {this.state.stateChildCheese ? <BgPizza ingredient='ingredient cheese'/> : ''}
                        {this.state.stateChildPepperoni ? <BgPizza ingredient='ingredient peperoni'/> : ''}
                        {this.state.stateChildJalapeno ? <BgPizza ingredient='ingredient jalapeno'/> : ''}
                        {this.state.stateChildPineapple ? <BgPizza ingredient='ingredient pineapple'/> : ''}
                        {this.state.stateChildOnion ? <BgPizza ingredient='ingredient onion'/> : ''}
                        {this.state.stateChildCucumber ? <BgPizza ingredient='ingredient cucumber'/> : ''}
                        {this.state.stateChildBacon ? <BgPizza ingredient='ingredient bacon'/> : ''}
                    </div>
                    <ul className="pizza__editor">
                        <p className={this.state.counter >= this.state.choiseLimit ? 'editor__warning' : 'editor__warning warning-hidden'}>{'You can select up to 5 items'}</p>

                        {this.veg.map((elem) => {
                            return <EditorItem key={elem.id} ingredient={elem} updateData={elem.update} disable={this.state.counter >= 5 ? true : false}/>
                            
                        })}
                                              
                    </ul>
                </div>
            </div>
            
        )
        
    }
}
export default Pizza;
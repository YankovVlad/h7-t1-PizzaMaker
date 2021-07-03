import React from 'react'
import EditorItem from './Editor-item'
import EditorItemDisable from './EditorItemDisable'
import { BgPizza } from './Bg'


class Pizza extends React.Component {
    state = {
        choiseLimit: 5,
        counter: 0,

        stateChildCheese: false,
        isBlockCheese: false,
        
        stateChildPepperoni: false,
        isBlockPepperoni: false,
        
        stateChildJalapeno: false,
        isBlockJalapeno: false,

        stateChildPineapple: false,
        isBlockPineapple: false,
        
        stateChildOnion: false,
        isBlockOnion: false,

        stateChildCucumber: false,
        isBlockCucumber: false,
    }

    updateCheese = (value) => {
        this.setState({stateChildCheese:value})
        this.setState({counter: this.state.stateChildCheese ? this.state.counter - 1 : this.state.counter + 1})
    }
    updatePepperoni = (value) => {
        this.setState({stateChildPepperoni:value})
        this.setState({counter: this.state.stateChildPepperoni ? this.state.counter - 1 : this.state.counter + 1})
    }
    updateJalapeno = (value) => {
        this.setState({stateChildJalapeno:value})
        this.setState({counter: this.state.stateChildJalapeno ? this.state.counter - 1 : this.state.counter + 1})
    }
    updatePineapple = (value) => {
        this.setState({stateChildPineapple:value})
        this.setState({counter: this.state.stateChildPineapple ? this.state.counter - 1 : this.state.counter + 1})
    }
    updateOnion = (value) => {
        this.setState({stateChildOnion:value})
        this.setState({counter: this.state.stateChildOnion ? this.state.counter - 1 : this.state.counter + 1}) 
    }
    updateCucumber = (value) => {
        this.setState({stateChildCucumber:value})
        this.setState({counter: this.state.stateChildCucumber ? this.state.counter - 1 : this.state.counter + 1}) 
    }

    veg = [
        {
            id: 1,
            label: 'Cheese',
            class: 'ingredient cheese',
            isBlock: this.state.isBlockCheese,
            update: (value) => {
                this.setState({stateChildCheese:value})
                this.setState({counter: this.state.stateChildCheese ? this.state.counter - 1 : this.state.counter + 1}
                )
                this.setState({isBlockCheese: !this.state.isBlockCheese})  
            },
        },
    
        {
            id: 2,
            label: 'Pepperoni',
            class: 'ingredient pepperoni',
            isBlock:this.state.isBlockPepperoni,
            update: (value) => {
                this.setState({stateChildPepperoni:value})
                this.setState({counter: this.state.stateChildPepperoni ? this.state.counter - 1 : this.state.counter + 1})
                this.setState({isBlockPepperoni: !this.state.isBlockPepperoni})
            },
            
        },
    
        {
            id: 3,
            label: 'Jalapeno',
            class: 'ingredient jalapeno',
            isBlock:this.state.isBlockJalapeno,
            update: (value) => {
                this.setState({stateChildJalapeno:value})
                this.setState({counter: this.state.stateChildJalapeno ? this.state.counter - 1 : this.state.counter + 1})
                this.setState({isBlockJalapeno: !this.state.isBlockJalapeno})
            }
            
        },
    
        {
            id: 4,
            label: 'Pineapple',
            class: 'ingredient pineapple',
            isBlock:this.state.isBlockPineapple,
            update: (value) => {
                this.setState({stateChildPineapple:value})
                this.setState({counter: this.state.stateChildPineapple ? this.state.counter - 1 : this.state.counter + 1})
                this.setState({isBlockPineapple: !this.state.isBlockPineapple})
            }
            
        },
    
        {
            id: 5,
            label: 'Onion',
            class: 'ingredient onion',
            isBlock: this.state.isBlockOnion,
            update: (value) => {
                this.setState({stateChildOnion:value})
                this.setState({counter: this.state.stateChildOnion ? this.state.counter - 1 : this.state.counter + 1})
                this.setState({isBlockOnion: !this.state.isBlockOnion})
            }
            
        },
    
        {
            id: 6,
            label: 'Cucumber',
            class: 'ingredient cucumber',
            isBlock: this.state.isBlockCucumber,
            update: (value) => {
                this.setState({stateChildCucumber:value})
                this.setState({counter: this.state.stateChildCucumber ? this.state.counter - 1 : this.state.counter + 1})
                this.setState({isBlockCucumber: !this.state.isBlockCucumber}) 
            },
            
        }
    
    ]

    // filterBlock = (arr) => {
    //     return arr.filter((elem) => elem.isBlock === true)
    // }
    // filterNotBlock = (arr) => {
    //     return arr.filter((elem) => elem.isBlock === false)
    // }

    render () {
        return (
            <div className="wrap">
                <div className="pizza__body">
                    <h2 className="pizza__title">Create your perfect Pizza</h2>
                    <div className="pizza__img">
                        {this.state.stateChildCheese ? <BgPizza ingredient='ingredient cheese'/> : ''}
                        {this.state.stateChildPepperoni ? <BgPizza ingredient='ingredient peperoni'/> : ''}
                        {this.state.stateChildJalapeno ? <BgPizza ingredient='ingredient jalapeno'/> : ''}
                        {this.state.stateChildPineapple ? <BgPizza ingredient='ingredient pineapple'/> : ''}
                        {this.state.stateChildOnion ? <BgPizza ingredient='ingredient onion'/> : ''}
                        {this.state.stateChildCucumber ? <BgPizza ingredient='ingredient cucumber'/> : ''}
                    </div>
                    <ul className="pizza__editor">
                        <p className={this.state.counter >= this.state.choiseLimit ? 'editor__warning' : 'editor__warning warning-hidden'}>{'You can select up to 5 items'}</p>

                        {/* {this.veg.map((elem) => {
                            return <EditorItem key={elem.key} label={elem.label} disabled={(elem.isBlock && this.state.counter >= 5) ? true : false} updateData={elem.update} />
                            
                        })} */}

                        
                        {!this.state.stateChildCheese && this.state.counter >= this.state.choiseLimit ? (
                            <EditorItemDisable label='Cheese'/> 
                            ) : (
                            <EditorItem label='Cheese' updateData={this.updateCheese}/>)}

                        {!this.state.stateChildPepperoni && this.state.counter >= this.state.choiseLimit ? (
                            <EditorItemDisable label='Pepperoni'/> 
                            ) : (
                            <EditorItem label='Peperoni' updateData={this.updatePepperoni} />)}

                        {!this.state.stateChildJalapeno && this.state.counter >= this.state.choiseLimit ? (
                            <EditorItemDisable label='Jalapeno'/> 
                            ) : (
                            <EditorItem label='Jalapeno' updateData={this.updateJalapeno}/>)}

                        {!this.state.stateChildPineapple && this.state.counter >= this.state.choiseLimit ? (
                            <EditorItemDisable label='Pineapple'/> 
                            ) : (
                            <EditorItem label='Pineapple' updateData={this.updatePineapple}/>)}

                        {!this.state.stateChildOnion && this.state.counter >= this.state.choiseLimit ? (
                            <EditorItemDisable label='Onion'/> 
                            ) : (
                            <EditorItem label='Onion' updateData={this.updateOnion}/>)}

                        {!this.state.stateChildCucumber && this.state.counter >= this.state.choiseLimit ? (
                            <EditorItemDisable label='Cucumber'/> 
                            ) : (
                            <EditorItem label='Cucumber' updateData={this.updateCucumber}/>)}

                        
                        
                        
                        {/* {(this.veg.map((elem) => {
                            return (elem.isBlock && this.state.counter >= 5) ? (
                                <EditorItemDisable key={elem.id} label={elem.label}/> 
                                ) : (
                                <EditorItem key={elem.id} label={elem.label} updateData={elem.update}/>)
                        }))} */}

                        
                        {/* {this.filterNotBlock(this.veg).map((elem) => <EditorItem key={elem.id} label={elem.label} updateData={elem.update}/>)}

                        {this.filterBlock(this.veg).map((elem) => <EditorItemDisable key={elem.id} label={elem.label}/> )}
                         */}
                    </ul>
                </div>
            </div>
            
        )
        
    }
}
export default Pizza;
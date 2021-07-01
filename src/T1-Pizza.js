import React from 'react'
import EditorItem from './T1-Editor-item'
import { Bg } from './T1-Bg'

class Pizza extends React.Component {
    state = {
        choiseLimit: 5,
        counter: 0,
        trigger: false,

        stateChildCheese: false,
        isBlockCheese:false,

        stateChildPepperoni: false,
        isBlockPepperoni:false,

        stateChildJalapeno: false,
        isBlockJalapeno:false,

        stateChildPineapple: false,
        isBlockPineapple:false,

        stateChildOnion: false,
        isBlockOnion:false,

        stateChildCucumber: false,
        isBlockCucumber:false,
        
    }

    // updateBlock = () => {
    //     if(this.state.counter >= 5) {
    //         this.setState({isBlockCheese: true})
            
    //     }
    //     if(this.state.counter >= 5) {
    //         this.setState({isBlockPepperoni: true})
    //     }
    //     if(this.state.counter >= 5) {
    //         this.setState({isBlockJalapeno: true})
    //     }
    //     if(this.state.counter >= 5) {
    //         this.setState({isBlockPineapple: true})
    //     }
    //     if(this.state.counter >= 5) {
    //         this.setState({isBlockOnion: true})
    //     }
    //     if(this.state.counter >= 5) {
    //         this.setState({isBlockCucumber: true})
    //     }
    
    // }

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




    render () {
        return (
            <div className="wrap">
                <div className="pizza__body">
                    <h2 className="pizza__title">Create your perfect Pizza</h2>
                    <div className="pizza__img">
                        {this.state.stateChildCheese ? <Bg ingredient='ingredient cheese'/> : ''}
                        {this.state.stateChildPepperoni ? <Bg ingredient='ingredient peperoni'/> : ''}
                        {this.state.stateChildJalapeno ? <Bg ingredient='ingredient jalapeno'/> : ''}
                        {this.state.stateChildPineapple ? <Bg ingredient='ingredient pineapple'/> : ''}
                        {this.state.stateChildOnion ? <Bg ingredient='ingredient onion'/> : ''}
                        {this.state.stateChildCucumber ? <Bg ingredient='ingredient cucumber'/> : ''}
                    </div>
                    <ul className="pizza__editor">
                        <EditorItem label='Cheese' updateData={this.updateCheese}/>
                        <EditorItem label='Peperoni' updateData={this.updatePepperoni} />
                        <EditorItem label='Jalapeno' updateData={this.updateJalapeno} />
                        <EditorItem label='Pineaple' updateData={this.updatePineapple} />
                        <EditorItem label='Onion' updateData={this.updateOnion} />
                        <EditorItem label='Cucumber' updateData={this.updateCucumber} />
                    </ul>
                </div>
            </div>
            
        )
        
    }
}
export default Pizza;
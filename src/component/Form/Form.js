import React,{Component,express,ReactNode} from 'react';
import axios from 'axios'

export default class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            input:'',
            stuff:[]
        }
        this.handleInput=this.handleInput.bind(this);
        this.addInventory=this.addInventory.bind(this);
        this.deleteStuff=this.deleteStuff.bind(this);
        
    }

    componentDidMount(){
        axios
            .get('/api/stuff')
            .then((res)=>{
                this.setState({
                    stuff:res.data
                })
            })
    }

    addInventory(){
        let addTo = {item:this.state.input}
        axios
            .post('/api/stuff',addTo)
            .then(res=>{
                this.setState({
                    stuff: res.data,
                    input:''
                })
            })
    }

    handleInput(event){
        console.log(event);
        this.setState({
            input:event.target.value
        })
    }

    deleteStuff(indexToDelete){
        axios
            .delete(`/api/stuff${indexToDelete}`)
            .then(res=>{
                this.setState({stuff:res.data})
            })
    }

    render(){
        console.log(this.state.input);

        let allTheStuff=this.state.stuff.map((item,i)=>{
            return(
                <div className='item' key={i}>
                    <p>{item}</p>
                    <button onClick={()=>this.deleteStuff(i)}>No</button>
                </div>
            )
        })

    return(
        <div>
            <h1>Form</h1>
            <input value={this.state.handleInput} onChange={this.handleInput}></input>
            <input></input>
            <input></input>
            <button>Cancel</button>
            <button>Add To Inventory</button>

            <div className='all-the-stuff'>{allTheStuff}</div>
        </div>
    )
}

}


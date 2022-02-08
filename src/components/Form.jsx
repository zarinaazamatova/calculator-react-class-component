import React from "react";
import Message from "./Message";

class Form extends React.Component{
    constructor(){
        super()
        this.state=({
            message: "",
            messageToSend:"",
            name:""
        })
    }
    handlerSubmit(event){
        event.preventDefault();
        this.setState({messageToSend:this.state.message, nameToSend:this.state.name, message: "", name:""})

    }
    
    handlerInput(e){
        console.log(e);
        this.setState({message:e.target.value});
        this.message.value="";
    }
    handlerInputName(e){
        console.log(e);
        this.setState({name:e.target.value});
        this.name.value="";
    }
    render(){
        return(
            <>
            <form >
                <fieldset>
                    <label>A Message You Would Like To Pass: </label>
                    <input type='text' placeholder='Write your massage' value={this.state.message} onChange={(e)=>this.handlerInput(e)}></input>
                    <input type='text' placeholder='Write your name' value={this.state.name} onChange={(e)=>this.handlerInputName(e)}></input>
                </fieldset>
                <button type='submit' onClick={(event)=> this.handlerSubmit(event)} >Send massege</button>
                <button type='submit'>Send</button>
                </form>
                <Message text={this.state.messageToSend} name={this.state.nameToSend}/>
          
            </>
        )
    }
}
export default Form
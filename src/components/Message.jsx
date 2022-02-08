const Message =(props)=>{
    const  {text, name} = props
    return(
        <>
        
        <h2>my message: {text}</h2>
        <h2>my name: {name}</h2>
        </>
    )
}
export default Message

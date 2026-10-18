function Price({oldprice, newprice}){

    let styles = { backgroundColor : "blue", padding: "3px", borderRadius : "5px"};
    let oldstyle = {textDecoration : "line-through", marginRight : "10px"}
    
    
    return(
        <>  
            <div style={styles}>

            <span style={oldstyle}>₹{oldprice}</span>
            
            <span>₹ {newprice}</span>
            </div>
        </>
    )
}

export default Price;
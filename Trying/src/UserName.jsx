function UserName({name, color}){
    let style = {color : color}
    console.log(name);
    console.log(color);
    return (
        <>
        <h1 style={style}>{name}</h1>

            
        </>
    )
}

export default UserName;
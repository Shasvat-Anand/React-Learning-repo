import Price from "./Price"

function Product({title, id}){
    let styles = {borderRadius : "5px", border : "1px solid white",  width : "400px",height : "200px" ,   backgroundColor : "" , marginTop: "15px"}
    let desc = ["hi-tech", "flexible ", " affordable"];

    let desct = [["he", "buddy"], ["hewllo", "budddy"], ["hewllo" , "world"]];

    let oldprice =  [50, 300, 499];

    let newprice = [20, 275, 299];


    return (
        <>
        <div style={styles}>
            <h3>{title}</h3>
            <p style={{textAlign: "left", marginLeft : "10px"}}>Description :</p>
            <ul style={{textAlign: "left"}}>

            <li>{desct[id][0]}</li>
            <li>{desct[id][1]}</li>
             
            </ul>

            <Price oldprice={oldprice[id]} newprice= {newprice[id]} />
        </div>
        </>
    )
}

export default Product

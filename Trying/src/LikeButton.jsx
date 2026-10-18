import { useState } from "react"

export default function LikeButton(){

    const [like , setLike] = useState(false);

    function toggle (){
        setLike(!like);
        console.log(like);
    }

    let style = {color : "red"}

    return(
        <>

        <p onClick={toggle} >

            {like == true ? <i class="fa-solid fa-heart" style={style}></i> : <i className="fa-regular fa-heart"></i> }

            
        
        </p>
        </>
    )
}
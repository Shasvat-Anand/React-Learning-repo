import {useNavigate} from 'react-router-dom'
function About(){
    const nav = useNavigate();

    function handleClick(){
        nav('/dashboard')
    }

    return (
        <>

        <div>this is about page

            <br/>
            
            <button onClick = {handleClick}>Go to DashBoard</button>
        </div>


    

        </>
    )
}

export default About;
import {useNavigate} from 'react-router-dom'


function Home() {
    const nav = useNavigate()

    function handleClick(){
        nav('/about')
    }
    return (
        <>
        <div>
            This is home page
            <br/>

            <button onClick={handleClick}>Go to About</button>
        </div>


        </>
    )
}


export default Home;

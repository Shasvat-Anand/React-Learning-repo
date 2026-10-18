import {useEffect,useState} from "react"

function useCurrencyinfo(currency){
    const [data , setdata] = useState({})
    useEffect(()=>{
       fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`)
        .then((res)=> res.json())
        .then((res)=> setdata(res[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()]))
         
    },[currency])
    
    return data
    
}

export default useCurrencyinfo;
import React from "react";
import {useEffect , useState} from "react";
import Name from "../../Componant/Name/Name";
const Api = ()=>{
    const [data,setData] = useState([]);
    const dataShow = data.map((item)=><Name name={item}/>)
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res)=>res.json())
        .then((item)=> setData(item.meals.map((data)=>data.strMeal)))
    }, [])
    return(
        <div>
            {dataShow}
        </div>
    )
}
export default Api;
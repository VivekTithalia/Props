import Home from "./Home";
import "./index.css";

const App=()=>{
    const emp=[
        {
            name:"vivek",
            age:21,
            city:"valsad"
        },
        {
            name:"jaypatel",
            age:44,
            city:"valsad"
        }
        
    ]
    return(
        <>
        <h1 className='firstcenter'>props tutorial</h1>
       <Home
       name={emp[0].name}
       age={emp[0].age}
       city={emp[0].city}
       name1="jayname"
       age1="33"
       city1="vapi"
       name3="vinay"
       age3="55"
       city3="surat"
       
      
       />
       <Home
       name={emp[1].name}
       age={emp[1].age}
       city={emp[1].city}
       name1="diya"
       age1="33"
       city1="mumbai"
       name3="vijay"
       age3="55"
       city3="vapi"
       
       />
        
        </>
    )
}

export default App;
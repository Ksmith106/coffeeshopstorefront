import {useState, useEffect} from 'react'
import PageTitle from "../components/PageTitle/PageTitle";
import {Button} from "../components/Button"
import {User} from '../components/User'
/* 
      CRA version of data loading
      assessment 4
      loading data=====>api   Firebase SDK   ref,  get(ref)
*/

export default function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState([])
     
    useEffect(()=>{
     
        async function loadExternalDataTheCRAWay(){
          const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
          const data = await res.json()
          setUserData(data)
        }
        loadExternalDataTheCRAWay()
    },[])
           
 
  return (
     <>
     <PageTitle title="StoreFront" tagline="Featured Coffee"/> 
     <div style={{textAlign:"center"}}>
     <Button 
     style={{margin:"2rem 0 0",}}
     onClick={()=>setIsLoading(true)}
     >Order Some Coffee</Button>
     {
       isLoading && <p style={{padding:"1rem"}}>This Is My Output</p>
     }
     </div>
     <main>
        {
          userData.map(({id, name, email, username}) => <User key={id} name={name} email={email} username={username}/>)
        }
     </main>
     </>
     )
}



 import {PageTitle} from './../components/PageTitle'

export default function Home() {
 

  return (
   
     <>
       <PageTitle title="StoreFront" tagline="featured products"/>
     
     </>
  )
}

function ListItem({number, key,  props}){
  return <li>{number} <span>{key}</span></li>
}
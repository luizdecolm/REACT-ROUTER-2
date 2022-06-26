//
import  React, {useEffect} from 'react'

import data from '../Data'


import {Link, useRouterMatch } from 'react-router-dom'


export default function Aulas(props) {

 const match = useRouterMatch()
  useEffect(()=>{
    console.log(match)
})

 
 return(
      <div className="page">
        <h1>Aulas</h1>
        <ul className="aulas">
            {data.map(aula=>
              
              
                
               <li key={aula.id}><Link to ={`${match.url}${aula.id}`} className="link">{aula.title}</Link></li>
               
                )}
        </ul>
      </div> )

}
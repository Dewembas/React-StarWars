import React, { useEffect} from 'react';
import PlanetsConten from '../Elements/PlanetsContent'
function PlanetPage() {
 
  return (
    <div>
      <PlanetsConten />
    </div>)
  }
  
   export default PlanetPage; 
  
  // useEffect(()=>{
  //   fetch(`${api}planet/`)
  //   .then(res=>res.json())
  //   .then(res => SetData(res.results))
  //   .catch(error => console.log(error))
  // },[Planets])
  // return (
  //   <div>
  //   <ul>
  //     {Data.map(el=><li>{el.name} </li>)}
  //           </ul>
  //   </div>
  // );
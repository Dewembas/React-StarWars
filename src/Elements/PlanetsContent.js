import React, {useState, useEffect} from 'react';
import PlanetsItem from './PlanetsItem'
import Pagination from 'react-bootstrap/Pagination'




const api = 'https://swapi.dev/api/'
function PlanetsContent() {
  const [data, setData] = useState([])
  const [planetsNumber, setplanetsNumber] = useState(`https://swapi.dev/api/planets/`)
 
  const apiFunc = (btnNum) => setplanetsNumber(`https://swapi.dev/api/planets/?page=${btnNum}`)

  useEffect(()=>{
    fetch(planetsNumber)
    .then(res=>res.json())
    .then(res=>setData(res.results))
    .catch(error=>console.log(error))
  },[planetsNumber])

  let planetsElements = data
  .map(planet => <PlanetsItem key={planet.name} name={planet.name} rotation_period={planet.rotation_period} orbital_period={planet.orbital_period}/>)

  
let newPlanetsArr = planetsElements.filter((item, index) => index % 2 )


let crutch = (d) => setplanetsNumber(d.selected + 1);
let active = 0;
let items = [];


for (let number = 1; number <= 6; number++) {
    items.push(
    <Pagination.Item planetsElements >
      {number}
    </Pagination.Item>,
  );
}


return (
    
  <div className="content-wrap planets">
      <div className="text-wrap">
      
          <ul>
          {newPlanetsArr}
          <Pagination >{items}</Pagination>
          
    <br />

          </ul>
          <button onClick={() => apiFunc(1)}>
              1
          </button>
          <button onClick={() => apiFunc(2)}>
              2
          </button>
          <button onClick={() => apiFunc(3)}>
              3
          </button>
          <button onClick={() => apiFunc(4)}>
              4
          </button>
          <button onClick={() => apiFunc(5)}>
              5
          </button>
          <button onClick={() => apiFunc(6)}>
              6
          </button>
      </div>
  </div>
)
}


export default PlanetsContent;
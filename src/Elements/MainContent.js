import React, {useState, useEffect} from 'react';

const api = 'https://swapi.dev/api/'

const MainContent = (props) => {
    const [data, setData] = useState(null)
    let {shipNumber} = props

    useEffect(() => {
        
            fetch(`${api}starships/${shipNumber}/`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(error => console.error(error))
        
    }, [shipNumber])

if(data?.name){
  return (
    <>
      Name: {data?.name} <br /><br />
      Model: {data?.model} <br /><br />
      Manufacturer: {data?.manufacturer} <br /><br />
      Starship class: {data?.starship_class}
    </>
  );
}else {
  return (
      <div className="noStarShip">
          <div className="noStarShipIn"><h1>No ship</h1></div>
      </div>
  )
}
}
export default MainContent;
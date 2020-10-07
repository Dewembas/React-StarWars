import React, {useState} from 'react';
 
function MainMenu(props) {
    let {setShipNumber} = props
    let searcCor = (e)=>setShipNumber(e.target.value)
    let [val, setVal] = useState(0)
  return (
    <div className="main-menu">
      
      <input type="number"
             placeholder="search"
             onChange={(e) => setVal(e.target.value)}
            />
             
             <input type="submit" value="Seatch" onClick={() => { setShipNumber(val) }} />
           
    </div>
  );
  
}

export default MainMenu;

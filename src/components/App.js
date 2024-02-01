
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const indianCities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Ahmedabad",
  "Pune",
  "Jaipur",
  "Surat",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Pimpri-Chinchwad",
  "Patna",
  "Vadodara",
];

const App = () => {

  const [cities, setCities] = useState(indianCities)
  const [search, setSearch] = useState("")
  const [click, setClick] = useState(false)

  useEffect(()=>{
    search && setCities(indianCities.filter(city => city.toLowerCase().includes(search.trim().toLowerCase())))
  },[search])
  
  function updateSearch(city){
    setSearch(city)
    setClick(true)
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Search cities of India</h1>
        <form>
          <input type="text" placeholder="Search..."
          value={search}
          onChange={e=>{setSearch(e.target.value)
            setClick(false)}
          }/>
        </form>

        {!click &&
          <ul>
            {cities && cities.map((city,index) => (
              <li onClick={()=>updateSearch(city)} key={index}>{city}</li>)
            )}
          </ul>}
    </div>
  )
}

export default App

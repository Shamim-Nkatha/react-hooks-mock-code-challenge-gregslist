import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [gregsData, setGregsData] = useState([])
  const [search, setSearch] = useState("")
  const [filtered, setFiltered] = useState(null)
  
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(r => r.json())
      .then(data => {setGregsData(data)})
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    const filteredListings = 
      (gregsData.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase())))
    if (filteredListings.length === 0 && search.length > 0) {setFiltered(filteredListings)}
    else if (filteredListings.length > 0) {setFiltered(filteredListings)}
    else (setFiltered(null))
  }

  return (
    <div className="app">
      <Header 
        search={search} 
        setSearch={setSearch} 
        handleSubmit = {handleSubmit}
      />
      <ListingsContainer 
        data={gregsData} 
        setData={setGregsData} 
        filtered={filtered}
      />
    </div>
  );
}

export default App;
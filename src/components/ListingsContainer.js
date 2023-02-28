import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({data, setData, filtered}) {

  let stuffToDisplay; 
    if(filtered) {
      stuffToDisplay =
      filtered.map(listing => 
        <ListingCard 
        data={data} 
        listing={listing} 
        key={listing.id} 
        id={listing.id} 
        setData={setData} />)} 
    else{
      stuffToDisplay =
      data.map(listing => 
        <ListingCard 
        data={data} 
        listing={listing} 
        key={listing.id} 
        id={listing.id} 
        setData={setData} />)
    }
    
 return (
    <main>
      <ul className="cards">
        {stuffToDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
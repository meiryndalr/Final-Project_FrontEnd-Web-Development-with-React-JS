import { SimpleGrid, Center, Container, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Cards from "./Cards"

function Home() {
  const [card, setCards] = useState([])
  const [loading, setLoading] = useState(true);
  const [sortCard, setSortCard] = useState("sort")
  

  useEffect(() => {

    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4")
    .then((response) => response.json())
    .then((card) => {
      setCards(card.data);
      setLoading(false);
    });
    

  }, []);
  

  if (loading === true) {
    return<div><h1>Loading...</h1></div>
  }

  function sortData(type) {
    // const getValue = type.target.value;
    if (type === "nama") {
      setCards([...card].sort((a, b) => a.name.localeCompare(b.name)));
    } else if (type === "attack") {
      setCards([...card].sort((a, b) => a.atk - b.atk));
    } else if (type === "defence") {
      setCards([...card].sort((a, b) => a.def - b.def));
    }
  }

  return (
    <>
    
        <Select name="sort" onChange={(i) => sortData(i.target.value)}>
          <option>Sort by</option>
          <option value="attack">Attack</option>
          <option value="defence">Defence</option>
          <option value="nama">Name</option>
        </Select>
      
    
          <SimpleGrid columns={4} spacing={5} >
            <Cards card={card}/>
          </SimpleGrid>

 
    
      
    </>) // TODO: replace this
}

export default Home;

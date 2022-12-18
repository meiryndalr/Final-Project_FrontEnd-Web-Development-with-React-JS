
import {
  Card, 
  Image, 
  HStack,
  CardHeader,
  CardBody,
  Heading,
  Box,
  Badge,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


function Cards({ card }) {
  return (
    card && card.length > 0  && (
      <Box marginX="auto" >
          {card.map((cards) => (
            
                <Link key={cards.id} to={`/card/${cards.id}`}>
                    <Box className="yugioh-card">
                    <Image src={cards.card_images[0].image_url} />
                    
                    <Heading as="h2" size="md">
                        {cards.name}
                    </Heading>
                    </Box>
                    

                </Link>     
          ))}
          
      </Box>
      
    )
    
  ) 
  // TODO: replace this
}


export default Cards;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Center, Tr, Td, HStack, VStack, Heading, Box, Button, Image, Text } from "@chakra-ui/react";

const Item = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate(-1)}>Back</Button>
    </>
  )
}

const Isi = ({detail}) => {
  return (
    <>
      <Item />
      {detail && detail.length > 0  && (
        
        <Center>
          <Box> 
           {detail.map((details) => (
            <Box key={details.id} >
                
                
                  <Image src={details.card_images[0].image_url} />
                
                
                <Heading as="h2" size="md">
                  {details.name}
                </Heading>
                <Text>Level: {details.level}</Text>
                <Text>{details.attribute}</Text>
                <Text>ATK/{details.atk} DEF/{details.def}</Text>
                <Text>[ {details.type} / {details.race} ]</Text>
                <Text>{details.desc}</Text>
            </Box>
      ))}
        </Box>
            
          <hr />  
              {detail.map((details) =>
                details.card_sets.map((item) => (
                  <Box>
                    <table>
                      <td>
                        <Text>Name: {item.set_name}</Text>
                        <Text>Code: {item.set_code}</Text>
                        <Text>Rarity: {item.set_rarity}</Text>
                        <Text>Price: {item.set_price}</Text>
                      </td>
                    </table>
                    
                    
                  </Box>
                
                ))
              )}
              
      

            
            
        </Center>
        
      )}

</>
  )
}



const Detail = () => {

  const { id } = useParams(); // TODO: replace this
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCard = async (id) => {
    const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=/`+ id);
    const data = await response.json();
    setDetail(data.data);
    setLoading(false)
    
  };

  useEffect(() => {
    fetchCard(id);
    
  }, [id]);

  if (loading === true) {
    return<div><h1>Loading...</h1></div>
  }

  return <Isi detail={detail} /> // TODO: replace this
}

export default Detail;

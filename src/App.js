import { Box, Heading, Center } from "@chakra-ui/react";
import Home from "./Home";
import Detail from "./Detail"
import NotFound from "./NotFound"
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  
  const MyRouter = () => 
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card/:id" element={<Detail />}/>
      <Route path="*" element={<NotFound />} />
  </Routes>;
  return (
    <div className="App">
      {/* Navbar */}
      <Box w="100vw" bg="#b25819" p={6}>
        <Center>
          <Heading as="h1" color="#e2ded5">
            Yugi-Oh Card Deck
          </Heading>
        </Center>
      </Box>

      

      {/* Route */}
      <MyRouter />
      
    </div>
  );
};

export default App;

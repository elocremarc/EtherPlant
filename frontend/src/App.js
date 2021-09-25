import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';
import { Stat,StatLabel,StatNumber,Stack,Badge, Box , ChakraProvider, Progress,GridItem,Grid,Center} from "@chakra-ui/react"

function App() {
  return (    
  <ChakraProvider>

    <div className="App">
<Box  w="100%"minH="100vh" height="100%"  p={4} bg="#bcdfc9" >


<Grid h="200px" templateColumns="repeat(2, 1fr)" gap={4}>
  <GridItem colSpan={1} bg="white" borderRadius="lg" >
    
    <Box p={4} color={"black"}><Progress value={80}/>
    <Stat>
<Box  p={4} borderColor="black.200" bg="#fff69b" borderRadius="lg" >
  <StatLabel color={"black"}>Plant</StatLabel>
  <StatNumber>French Beans</StatNumber>
</Box>
<Box  p={4} borderColor="black.200" bg="#fff69b" borderRadius="lg" >
  <StatLabel color={"black"}>Status</StatLabel>
 <StatNumber> Growing</StatNumber>
</Box>  
</Stat>
    </Box><Stack direction="row">
</Stack>
    
    </GridItem>
  <GridItem p={4} colSpan={1}bg='#a1c8e9' borderRadius="lg" >
    <Center> 
  <ReactPlayer  style={{'borderRadius':'lg'}} borderRadius="lg" url='https://storageapi.fleek.co/elocremarc-team-bucket/Videos/Wheat%20Grass.mp4' width="100%" height="100%"muted={true} playing={true} loop={true} controls={false} />
</Center></GridItem>
</Grid>
      
</Box>   
  </div>
  
  </ChakraProvider>

  );
}

export default App;

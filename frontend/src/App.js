import logo from "./logo.svg";
import "./App.css";
import ReactPlayer from "react-player";
import {
  Container,
  Text,
  Flex,
  Spacer,
  Stat,
  StatLabel,
  StatNumber,
  Link,
  Icon,
  Box,
  ChakraProvider,
  Progress,
  GridItem,
  Grid,
  Center,
} from "@chakra-ui/react";
import { GiFarmer } from "react-icons/gi";
import { FaSeedling } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

const contractAddress = "0x8d8f8f8f8d8f8d8f8d8f8d8f8d8f8d8f8d8f8d8";
function App() {
  return (
    <ChakraProvider>
      <div w="100%" className="App">
        <Box wrap="no-wrap" minH="100vh" height="100%" p={4} bg="#bcdfc9">
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
            ]}
            gap={4}
          >
            <Center>
              <Box p={4} borderRadius="lg" bg="#f6c2d9">
                <Box
                  color="black"
                  width="100%"
                  p={4}
                  borderRadius="lg"
                  bg="#fff69b"
                >
                  <Text fontSize="4xl">Ether Plant</Text>

                  <Container textAlign="left">
                    An Ether Plant is a live recording of a plant encoded onto
                    the Ethereum blockchain. The NFT will begin its
                    transformation at the germination until it reaches the
                    harvest and becomes a fully encoded Ether Plant.
                  </Container>
                </Box>
                <Box pt={4}>
                  <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    <Box color="black" p={4} bg="#e4dae2" borderRadius={"lg"}>
                      <Flex>
                        <Text>Contract</Text>
                        <Spacer />
                        <Text>
                          <Link
                            color="teal.500"
                            href={`https://etherscan.io/address/${contractAddress}`}
                          >
                            {contractAddress.slice(0, 8)}...
                            {contractAddress.slice(-4)}
                          </Link>
                        </Text>
                        <Spacer />
                        <Icon as={FiCopy} />
                      </Flex>
                    </Box>
                    <Box color="black" p={4} bg="#e4dae2" borderRadius={"lg"}>
                      <Flex>
                        <Text>Marketplace</Text>
                        <Spacer />
                        <Link
                          color="teal.500"
                          href={`https://opensea.io/collection/ether-plant`}
                        >
                          Opensea
                        </Link>{" "}
                      </Flex>
                    </Box>
                  </Grid>
                </Box>
              </Box>
            </Center>
            <GridItem p={4} colSpan={1} bg="#a1c8e9" borderRadius="lg">
              <GridItem colSpan={1} bg="white" borderTopRadius="lg">
                <Box p={4} color={"black"}>
                  <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <Box
                      p={4}
                      borderColor="black"
                      bg="#fff69b"
                      borderRadius="lg"
                    >
                      <Stat>
                        <StatLabel color={"black"}>Plant</StatLabel>
                        <StatNumber> Wheat Grass </StatNumber>
                      </Stat>
                    </Box>

                    <Box
                      p={4}
                      borderColor="black"
                      bg="#fff69b"
                      borderRadius="lg"
                    >
                      <Stat>
                        <StatLabel color={"black"}>Interval</StatLabel>
                        <StatNumber>30 Min</StatNumber>
                      </Stat>
                    </Box>
                  </Grid>
                </Box>
              </GridItem>
              <Center>
                <ReactPlayer
                  style={{ borderRadius: "lg" }}
                  borderRadius="lg"
                  url="https://storageapi.fleek.co/elocremarc-team-bucket/Videos/Wheat%20Grass.mp4"
                  width="100%"
                  height="100%"
                  muted={true}
                  playing={true}
                  loop={true}
                  controls={false}
                />
              </Center>

              <Box color={"black"} p={2} bg="#e4dae2" borderBottomRadius="lg">
                <Flex>
                  <Icon as={FaSeedling} boxSize={10} />
                  <Spacer />
                  <Text fontSize="xl"> Encoding Progress </Text>
                  <Spacer />
                  <Icon as={GiFarmer} boxSize={10} />
                </Flex>
                <Progress
                  hasStripe
                  value={80}
                  height="32px"
                  borderRadius="lg"
                />
                <Flex>
                  <Text>Germination</Text>
                  <Spacer />
                  <Text>Harvest</Text>
                </Flex>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </div>
    </ChakraProvider>
  );
}

export default App;

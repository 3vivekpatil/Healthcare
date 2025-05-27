import { Box, Input } from "@chakra-ui/react"

const Topnav = () => {
  return (
   <Box>
     <Input 
      placeholder="Search"
      borderRadius="full"
      maxW="500px"
      mx="5"
      bg="white"
      px="6"
      py="4"
      width="420px"
      mt="10px"
      ml="10px"
      boxShadow="md"
      fontSize="16px"
    />   
    </Box>
  )
}

export default Topnav
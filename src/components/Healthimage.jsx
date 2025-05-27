 import { Flex,Heading,Image,} from "@chakra-ui/react";

 const HealthImage = () => {
  
   return (

  <Flex justify="center" align="start">

   <Heading fontSize="22px" as="h1" pt="3.5rem" color="#2A36D4"  mt="-10" ml="0px">
             Dashboard
           </Heading>
       
  <Image 

  w="40%" 
  height="470px" 
  src="bodyq.png"
  mt="3.5rem"
  ml="-120px" 
  width="420px"/> 
              
  </Flex>
      
    );

  };

  export default HealthImage;

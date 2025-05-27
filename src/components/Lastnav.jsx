import { Box, Text, HStack, Flex } from "@chakra-ui/react";

const Card = ({ title, time, icon, color }) => (

   <Box bg={color || "gray.100"} 
   borderRadius="lg"
   p={4} 
   minW="180px">

   <HStack justify="space-between">
   <Text fontWeight="semibold">{title}</Text>
   <Text fontSize="xl">{icon}</Text>
   </HStack>

   <Text mt={2} fontSize="sm">{time}</Text>
   </Box>
);

const Lastnav = () => {

  return (
    <Box p={6} w="50%" mt="248px" height="100px" >
      <Text fontSize="xl" fontWeight="bold" mb={3} mt="1">The Upcoming Schedule</Text>


      <Text fontSize="md" fontWeight="semibold" mt={-2}>On Thursday</Text>
      <Flex gap={4} mt={2} >
        <Card title="Health checkup complete" time="11:00 AM" icon="🩺" />
        <Card title="Ophthalmologist" time="14:00 PM" icon="👁️" />
      </Flex>
 <Text fontSize="md" fontWeight="semibold" mt={3}>On Saturday</Text>

      <Flex gap={4} mt={2} >
        <Card title="Cardiologist" time="12:00 AM" icon="❤️" />
        <Card title="Neurologist" time="16:00 PM" icon="🧠" />
      </Flex>
    </Box>
  );
};

export default Lastnav;


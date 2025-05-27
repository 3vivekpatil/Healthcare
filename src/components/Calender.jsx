import { useState } from 'react'; 

import { Box,Text,Flex,Grid, Button} from '@chakra-ui/react';


const days = [
    
     { slot: 'Mon', date:  25, times: ['10:00', '11:00', '12:00'] },

   { slot: 'Tue', date:  26, times: ['08:00', '09:00', '10:00'] },

   { slot: 'Wed', date:  27, times: ['12:00', '13:00'] },
  { slot: 'Thu', date:  28, times: ['10:00', '11:00', '12:00'] },

{ slot: 'Fri', date:  29, times: ['14:00', '16:00'] },

 { slot: 'Sat', date:  30, times: ['12:00', '14:00', '15:00'] },
];

const Calender = () => {
   const [selectedSlot, setSelectedSlot] = useState({ day: null, time: null });

   const isSelected = (dayIndex, time) =>
     selectedSlot.day === dayIndex && selectedSlot.time === time;

  return (

    <Box p={6} bg="gray.50"
     height="280px"
      width="610px" 
      mt="-5px"
       mx="650" 
       mr="60px"
        my="-595px"
         justify="center" >

      <Flex justify="space-between" align="center" mb={3}>

        <Text fontSize="xl" fontWeight="bold">October 2021</Text>

        <Flex gap={3}>

          <Button size="sm">{'<'}</Button>
          <Button size="sm">{'>'}</Button>
        </Flex>
      </Flex>

      <Grid templateColumns="repeat(7, 1fr)" gap={4}>

        {days.map((day, dayIndex) => (
          <Box key={day.date} 
          bg="white" 
          borderRadius="md" 
          p={3} 
          shadow="sm">

            <Text fontSize="sm" fontWeight="bold" color="gray.500">
              {day.slot}
            </Text>

            <Text fontSize="lg" fontWeight="semibold">
              {day.date}
            </Text>

            <Flex direction="column" gap={2} mt={2}>
              {day.times.map((time, timeIdx) => (

                <Button
                  key={timeIdx}
                  size="sm"
               variant={isSelected(dayIndex, time) ? 'solid' : 'outline'}
                    colorScheme={isSelected(dayIndex, time) ? 'blue' : 'gray'}
                  onClick={() => setSelectedSlot({ day: dayIndex, time })}>
                  {time}
                </Button>
              ))}



            </Flex>
          </Box>
        ))}
      </Grid>
    </Box>

  );
};
  

export default Calender
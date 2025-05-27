import { Box, Flex } from "@chakra-ui/react"
import Sidenav from "../../components/Sidenav"
import Topnav from "../../components/Topnav"
import HealthImage from "../../components/Healthimage"
import Calender from "../../components/Calender"
import Lastnav from "../../components/Lastnav"


const Dashboard = () => {
  return (
    <div>
    <Flex>
   <Sidenav/> 
   <Box flexGrow={1}>
   <Topnav/>
   <HealthImage></HealthImage> 
   </Box>
   <Lastnav/>
   </Flex>
   <Calender/>
   
 

    </div>
  )
}

export default Dashboard
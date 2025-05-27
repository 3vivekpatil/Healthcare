import {Box, Heading, HStack, Icon, Link, Stack, Text} from "@chakra-ui/react"
import { RxDashboard } from "react-icons/rx";
import { BsCalendar2Date } from "react-icons/bs";
import { TbArrowsUpDown } from "react-icons/tb";
import { CiSquarePlus } from "react-icons/ci";
import { TbGraph } from "react-icons/tb";
import { BsChatDots } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
const Sidenav = () => {

const navLinks = [
    {
        icon: RxDashboard,
        text: "Dashboard",
        link: "/",
    },

 {
        icon: TbArrowsUpDown,
        text: "History",
        link: "/History",
    },
    {
      icon: BsCalendar2Date,
      text: "Calendar",
      link: "/calendar",
    },
    {
      icon: CiSquarePlus,
      text: "Appointments",
      link: "/appointments",
    },
    {
      icon: TbGraph,
      text: "Statisitics",
      link: "/Statisitics",
    },
    {
      icon: BsChatDots,
      text: "Chat",
      link: "/chat",
    },
    {
      icon: IoIosCall,
      text: "Support",
      link: "/support",
    },
]

  return (
    <Stack
      bg="white"
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w="13rem"
      h="100vh"
    >
      <Box>
        <Heading textAlign="center" fontSize="24px" as="h1" pt="3.5rem" color="#13dae8" mt="-8" ml="-1px">
          @HealthCare.
        </Heading>
        <Box mt="2" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                borderRadius="10px"
                key={nav.text}
                py="3"
                px="4"
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mt="6" mx="3" mb="4">
        <Link to="/support">
          <HStack
            borderRadius="10px"
            py="3"
            px="4"  
            color= "#171717" 
            _hover={{
                bg: "#F3F3F7",
              color: "#171717",
            }}
          >
            <Icon as={CiSettings} />
            <Text fontSize="14px" fontWeight="medium">
              Settings
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
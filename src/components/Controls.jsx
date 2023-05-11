import { Box, AddIcon, Text, Button } from "native-base";

export default function Controls({ intake, setIntake }) {
    return (
        <Box w="100%" alignItems="center" justifyContent="center" h={220}>
            <Text color="whitesmoke" fontSize="xl" mb={4}>
            <AddIcon color="whitesmoke" />
            &nbsp; Add Water Intake
            </Text>
            <Box flexDir="row" w="80%" justifyContent="space-around" mb={6}>
                <Button colorScheme="blue" size="lg" borderRadius={16} pl={6} pr={6}
                onPress={() => setIntake(intake + 500)}
                >
                <Text color="whitesmoke" fontweight="700" fontSize="lg">
                One Cup
                </Text>
                </Button>
                <Button olorScheme="blue" size="lg" borderRadius={16} pl={6} pr={6}
                onPress={() => setIntake(intake + 1000)}
                >
                     <Text color="whitesmoke" fontweight="700" fontSize="lg">
                 One Bottle
                 </Text>
                </Button>
            </Box>
           
         <Button colorScheme="gray" pl={8} pr={8} borderRadius={16} onPress={() => setIntake(0)}>
         <Text color="whitesmoke" fontSize="lg" fontweight="500"> 🚫Reset </Text>
         </Button>
        </Box>
    )
}
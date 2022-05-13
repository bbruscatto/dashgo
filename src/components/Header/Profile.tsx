import { Box, Text, Flex, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text color="grey.300" fontSize="small">
                        bruscatto@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="Brunno Bruscatto" src="https://sm.ign.com/ign_br/screenshot/default/naruto-shippuden_f134.png" />
        </Flex>
    )
}
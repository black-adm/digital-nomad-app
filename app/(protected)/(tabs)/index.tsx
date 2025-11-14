import { useTheme } from "@shopify/restyle";
import { Box } from "../../../src/components/Box";
import { Text } from "../../../src/components/Text";

export default function HomeScreen() {
  const { colors } = useTheme();

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <Text marginTop="xl" color="text">
        Tema atual {colors.mainBackground}
      </Text>
    </Box>
  );
}

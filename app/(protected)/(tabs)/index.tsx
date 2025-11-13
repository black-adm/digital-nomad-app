import { StyleSheet, Text, View } from "react-native";

import { Link, useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View>
      <Link
        href={{
          pathname: "/city-details/[id]",
          params: { id: 7 },
        }}
        asChild
      >
        <Text>Navegar para detalhes</Text>
      </Link>

      <Text onPress={() => router.navigate("/city-details/8")}>
        Navegar com o router
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

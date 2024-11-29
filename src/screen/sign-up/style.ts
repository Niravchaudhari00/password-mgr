import { StyleSheet } from "react-native";
export const SingUpStyle = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      backgroundColor: "#f9f9f9",
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      color: "#333",
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: "#666",
      marginBottom: 24,
    },
    inputWrapper: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      backgroundColor: "#fff",
      borderRadius: 10,
      paddingHorizontal: 15,
      paddingVertical: 10,
      marginBottom: 15,
      elevation: 3, // Shadow for Android
      shadowColor: "#000", // Shadow for iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: "#333",
    },
    signUpButton: {
      width: "100%",
      backgroundColor: "#4a90e2",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 10,
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    footerText: {
      marginTop: 20,
      fontSize: 14,
      color: "#666",
    },
    highlight: {
      color: "#4a90e2",
      fontWeight: "bold",
    },
  });

  
import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerAlign: {
        justifyContent: "center",
        alignItems: "center"
    },
    inputContainer: {
        backgroundColor: "white",
        padding: 20,
        marginTop: height / 7,
        borderRadius: 20,
        width: width / 1.1,
        height: height / 1.4,
    },
    input: {
        fontSize: 15,
        borderRadius: 5,
        width: width / 1.2,
        height: 40,
        padding: 10,
        backgroundColor: "#f8f8ff"
    },
    spaces: {
        width: 30, // or whatever size you need
        height: 30,
      },
});

export { styles };
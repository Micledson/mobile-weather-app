import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },

    weatherTemperature: {
        alignItems: "center",
        paddingBottom: 20,
    },

    weatherDetails: {
        width: "85%",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#288FC5",
        paddingVertical: 15,
        borderRadius: 12,
        marginBottom: 20,
    },

    icons: {
        flexDirection: "row"
    },

    image: {
        marginRight: 5
    },

})
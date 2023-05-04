import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    temperature: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    temperatureGroup: {
        flexDirection: "row"
    },

    image: {
        height: 80,
        resizeMode: 'contain',
    }
})
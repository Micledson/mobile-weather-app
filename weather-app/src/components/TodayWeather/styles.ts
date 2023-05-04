import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginBottom: 15,
    },

    title: {
        width: "85%",
        padding: 15,
        borderRadius: 12,
    },

    date: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    climate: {
        flexDirection: "row",
        justifyContent: "space-around",
    },

    hover: {
        backgroundColor: "F00",
        borderRadius: 25,
        borderStyle: "solid",
        borderWidth: 1,
    }
})
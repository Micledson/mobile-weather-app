import {Image, Text, View} from "react-native";
import {styles} from "./styles";
import React from "react";
import {CustomText} from "../CustomText";
import {IForecast} from "../../pages/Home";

export function Day(props: IForecast) {
    const image = (() => {
        switch (true) {
            case (props.rain_probability < 30):
                return require("../../assets/images/cloud.png")
            case (props.rain_probability > 30 && props.rain_probability < 50):
                return require("../../assets/images/fog.png")
            case (props.rain_probability > 50 && props.rain_probability < 80):
                return require("../../assets/images/rain.png")
            case (props.rain_probability > 80):
                return require("../../assets/images/storm.png")
        }
    })

    return (
        <View style={styles.container}>
            <CustomText fontSize={16} text={props.weekday} fontWeight={"bold"}/>
            <Image style={styles.image} source={image()}/>
            <View style={styles.temperature}>
                <View style={styles.temperatureGroup}>
                    <CustomText fontSize={16} text={props.max.toString()}/>
                    <CustomText fontSize={10} text={"°C"} paddingHorizontal={3}/>
                </View>

                <View style={styles.temperatureGroup}>
                    <CustomText color={"rgba(255, 255, 255, .5)"} fontSize={16} text={props.min.toString()}/>
                    <CustomText color={"rgba(255, 255, 255, .5)"} fontSize={10} text={"°C"} paddingHorizontal={3}/>
                </View>
            </View>

        </View>
    )
}

import React from "react";
import {Image, Text, View} from "react-native";
import { useTheme } from '@react-navigation/native';

import {styles} from "./styles";
import {CustomText} from "../CustomText";
import {IMainProps, IWeatherImageProps, IWeatherTemperatureProps, IWeatherDetailsProps} from './interfaces';

export function Main(props: IMainProps) {

    return (
        <View style={styles.container}>
            <WeatherImage rain={props.weatherDetails.rain}/>
            <WeatherTemperature description={props.weatherTemperature.description} temp={props.weatherTemperature.temp} min={props.weatherTemperature.min} max={props.weatherTemperature.max}/>
            <WeatherDetails rain={props.weatherDetails.rain} humidity={props.weatherDetails.humidity} wind={props.weatherDetails.wind}/>
        </View>
    )
}

function WeatherImage(props: IWeatherImageProps) {
    if(props.rain < 50) return <Image source={require("../../assets/images/sun.png")}/>

    return <Image source={require("../../assets/images/rain.png")}/>
}

function WeatherTemperature(props: IWeatherTemperatureProps) {
    return (
        <View style={styles.weatherTemperature}>
            <View style={{marginLeft: 30}}>
                <CustomText fontSize={64} text={`${props.temp}º`} fontWeight={"bold"}/>
            </View>
            <CustomText fontSize={16} text={props.description} fontWeight={"normal"}/>
            <CustomText fontSize={16} text={`Max.: ${props.max}º Min.: ${props.min}º`} fontWeight={"normal"}/>
        </View>
    )
}

function WeatherDetails(props: IWeatherDetailsProps) {
    const { colors } = useTheme();

    return (
        <View style={[styles.weatherDetails, {backgroundColor: colors.card}]}>
            <View style={styles.icons}>
                <Image style={styles.image} source={require("../../assets/images/rain_volume.png")}/>
                <CustomText fontSize={16} text={`${props.rain}%`} fontWeight={"normal"}/>
            </View>
            <View style={styles.icons}>
                <Image style={styles.image} source={require("../../assets/images/humidity.png")}/>
                <CustomText fontSize={16} text={`${props.humidity}%`} fontWeight={"normal"}/>

            </View>
            <View style={styles.icons}>
                <Image style={styles.image} source={require("../../assets/images/wind.png")}/>
                <CustomText fontSize={16} text={props.wind} fontWeight={"normal"}/>
            </View>

        </View>
    )

}
import {Image, Text, View} from "react-native";
import {styles} from "./styles";
import {Day} from "../Day";
import React from "react";
import {CustomText} from "../CustomText";
import {useTheme} from "@react-navigation/native";
import {IWeekWeatherProps} from "./interfaces";

export function WeekWeather(props: IWeekWeatherProps) {
    const { colors } = useTheme() ;
    return (
        <View style={styles.container}>
            <View style={[styles.title, {backgroundColor: colors.card}]}>
                <NextForecast/>
                <WeekForecast forecast={props.forecast}/>
            </View>
        </View>
    )
}

function NextForecast() {
    return (
        <View style={styles.nextForecast}>
            <CustomText fontSize={20}  text={"Next Forecast"} fontWeight={"bold"}  />
            <Image source={require("../../assets/images/calendar.png")}/>
        </View>
    )
}

function WeekForecast(props: IWeekWeatherProps) {
    return (
        <View>
            {props.forecast.map((day, index) => {
                return <Day key={day.weekday} weekday={day.weekday} max={day.max} min={day.min} rain_probability={day.rain_probability}/>
            })}
        </View>
    )
}

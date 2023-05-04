import {Image, Text, View} from "react-native";
import {Climate} from "../Climate";
import {styles} from "./styles";
import {CustomText} from "../CustomText";
import React from "react";
import {useTheme} from "@react-navigation/native";
import {ITodayWeatherProps, IDateProps, IClimateProps} from "./interfaces";

export function TodayWeather(props: ITodayWeatherProps) {
    const {colors} = useTheme();
    return (
        <View style={styles.container}>
            <View style={[styles.title, {backgroundColor: colors.card}]}>
                <DateInformation title={props.dateProps.title} date={props.dateProps.date}/>
                <TodayClimate temp={props.climateProps.temp}/>
            </View>
        </View>
    )
}

function DateInformation(props: IDateProps) {
    const date = new Date().toDateString()
    const arrayDate = date.split(' ');
    const newDate = `${arrayDate[1]}, ${arrayDate[2]}`

    return (
        <View style={styles.date}>
            <CustomText fontSize={20} text={props.title} fontWeight={"bold"}/>
            <CustomText fontSize={18} text={newDate}/>
        </View>
    )
}

function TodayClimate(props: IClimateProps) {
    const {colors} = useTheme();
    return (
        <View style={styles.climate}>
            <Climate temp={props.temp} hour={"15.00"}/>

            <Climate temp={props.temp} hour={"16.00"}/>
            <View style={[styles.hover, {borderColor: colors.border}]}>
                <Climate temp={props.temp} hour={"17.00"}/>
            </View>
            <Climate temp={props.temp} hour={"18.00"}/>
        </View>
    )
}


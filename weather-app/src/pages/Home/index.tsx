import React, {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";

import {View, Text, ScrollView, SafeAreaView} from "react-native";
import {KEY} from '@env';

import {styles} from "./style"
import {AppBar} from "../../components/AppBar";
import {IWeatherTemperatureProps, IWeatherDetailsProps} from "../../components/Main/interfaces";
import {Main} from "../../components/Main";
import {IClimateProps, IDateProps} from "../../components/TodayWeather/interfaces";
import {TodayWeather} from "../../components/TodayWeather";
import {IWeekWeatherProps} from "../../components/WeekWeather/interfaces";
import {WeekWeather} from "../../components/WeekWeather";
import {LinearGradient} from 'expo-linear-gradient';
import {LightTheme} from "../../assets/themes/ligth";
import {DarkTheme} from "../../assets/themes/dark";
import {weatherAPI} from "../../utils/api";
import {IForecast, IApi, IHome, ITheme} from "./interfaces"

export function Home() {
    const [apiData, setApiData] = useState<IApi>()

    useEffect(() => {
        weatherAPI.get<IApi>(`weather?key=${KEY}&user_ip=remote`)
            .then((data) =>

                // @ts-ignore
                setApiData(data.data.results)
            )
    }, [])


    const theme = verifyTheme(apiData);

    const home = setData(apiData)

    return (
        <NavigationContainer theme={theme}>
            <LinearGradient style={styles.container}
                            colors={[theme.backgroundInitColor!!, theme.backgroundFinalColor!!]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {apiData?.city_name && <AppBar cityName={apiData.city_name}/>}
                    <Main weatherTemperature={home.weatherTemperature} weatherDetails={home.weatherDetails}/>
                    <TodayWeather dateProps={home.date} climateProps={home.climate}/>
                    <WeekWeather forecast={home.weekWeather.forecast}/>

                </ScrollView>
            </LinearGradient>

        </NavigationContainer>
    );
}

function setData(apiData?: IApi) {
    const weatherTemperature: IWeatherTemperatureProps = {
        temp: apiData?.temp !== undefined ? apiData.temp : 0,
        min: apiData?.temp !== undefined ? apiData.forecast[0].min : 0,
        max: apiData?.temp !== undefined ? apiData.forecast[0].max : 0,
        description: apiData?.description !== undefined ? apiData.description : "",
    }

    const weatherDetails: IWeatherDetailsProps = {
        wind: apiData?.wind_speedy !== undefined ? apiData.wind_speedy : "",
        humidity: apiData?.humidity !== undefined ? apiData.humidity : 0,
        rain: apiData?.rain !== undefined ? apiData.rain : 0,
    }

    const date: IDateProps = {
        title: "Today",
        date: apiData?.date !== undefined ? apiData.date : "",

    }

    const climate: IClimateProps = {
        temp: apiData?.temp !== undefined ? apiData.temp : 0,
    }

    const weekWeather: IWeekWeatherProps = {
        forecast: apiData?.forecast !== undefined ? apiData.forecast.slice(0, 4) : [],
    }

    const home: IHome = {
        weatherTemperature,
        weatherDetails,
        date,
        climate,
        weekWeather
    }

    return home;
}

function verifyTheme(apiData?: IApi) {
    let theme: ITheme
    if (apiData?.rain != undefined && apiData.rain < 50) {
        theme = LightTheme
        theme.backgroundInitColor = LightTheme.colors.backgroundInitColor
        theme.backgroundFinalColor = LightTheme.colors.backgroundFinalColor
    } else {
        theme = DarkTheme
        theme.backgroundInitColor = DarkTheme.colors.backgroundInitColor
        theme.backgroundFinalColor = DarkTheme.colors.backgroundFinalColor
    }

    return theme;
}
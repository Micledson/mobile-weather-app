import {Theme} from "@react-navigation/native";
import {IWeekWeatherProps} from "../../components/WeekWeather/interfaces";
import {IClimateProps, IDateProps} from "../../components/TodayWeather/interfaces";
import {IWeatherTemperatureProps, IWeatherDetailsProps} from "../../components/Main/interfaces";
export interface ITheme extends Theme {
    backgroundInitColor?: string,
    backgroundFinalColor?: string,
}

export interface IApi {
    temp: number,
    description: string,
    city_name: string,
    wind_speedy: string,
    humidity: number,
    rain: number
    date: string
    forecast: IForecast[],
}

export interface IForecast {
    weekday: string,
    max: number,
    min: number,
    rain_probability: number
}

export interface IHome {
    weatherTemperature: IWeatherTemperatureProps,
    weatherDetails: IWeatherDetailsProps,
    date: IDateProps,
    climate: IClimateProps,
    weekWeather: IWeekWeatherProps
}
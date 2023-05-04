

export interface IMainProps {
    weatherTemperature: IWeatherTemperatureProps,
    weatherDetails: IWeatherDetailsProps,
}

export interface IWeatherTemperatureProps {
    temp: number,
    max: number,
    min: number,
    description: string
}

export interface IWeatherDetailsProps {
    rain: number,
    humidity: number,
    wind: string,
}

export interface IWeatherImageProps {
    rain: number
}
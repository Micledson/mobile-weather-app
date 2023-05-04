export interface ITodayWeatherProps {
    dateProps: IDateProps
    climateProps: IClimateProps
}
export interface IDateProps {
    title: string,
    date: string,
}

export interface IClimateProps {
    temp: number
}

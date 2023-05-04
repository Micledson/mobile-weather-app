import { DefaultTheme } from '@react-navigation/native';

export const LightTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        backgroundInitColor: '#33ACDE',
        backgroundFinalColor: "#33ACDE",
        card: "#288FC4",
        border: "#7DBDFF"
    }

}
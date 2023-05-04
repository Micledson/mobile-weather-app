import { DefaultTheme} from '@react-navigation/native';

export const DarkTheme = {
    ...DefaultTheme,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        backgroundInitColor: '#0B306F',
        backgroundFinalColor: "#0C43AD",
        card: "#0D3989",
        border: "#3379E0",
    }
}





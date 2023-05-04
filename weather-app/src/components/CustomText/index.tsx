import {StyleProp, StyleSheet, Text, ViewStyle} from "react-native";
import {useFonts} from "expo-font";
import {useCallback} from "react";
import * as SplashScreen from "expo-splash-screen";

interface CustomTextProps {
    fontSize?: number,
    text: string,
    paddingHorizontal?: number
    paddingVertical?: number
    color?: string
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | undefined;
}

export function CustomText(props: CustomTextProps) {
    const [fontsLoaded] = useFonts({
        SF: require("../../assets/fonts/SFPRODISPLAYREGULAR.ttf"),
    });

    const onLayout = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    let color = "#FFF"
    if(props.color) color = props.color

    let paddingHorizontal = 0
    if(props.paddingHorizontal) paddingHorizontal = props.paddingHorizontal

    let paddingVertical = 0
    if(props.paddingVertical) paddingVertical = props.paddingVertical

    return (
        <Text onLayout={onLayout}
              style={{
                  fontFamily: "SF",
                  fontWeight: props.fontWeight,
                  color: color,
                  fontSize: props.fontSize,
                  paddingHorizontal,
                  paddingVertical,
              }}>{props.text}</Text>
    )
}
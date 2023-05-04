import {Text, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

import {IAppBarProps} from "./interfaces";
import {styles} from "./styles";
import {CustomText} from "../CustomText";

export function AppBar(props: IAppBarProps) {
    return (
        <View style={styles.container}>
            <Location cityName={props.cityName}/>
            <Icon name={"bell-outline"} style={styles.icon}/>
        </View>
    )
}

function Location(props: IAppBarProps) {
    return (
        <View style={styles.location}>
            <Icon name={"map-marker-outline"} style={styles.icon}/>
            <CustomText fontSize={22}  text={props.cityName} paddingHorizontal={5}/>
            <Icon name={"chevron-down"} style={styles.icon}/>
        </View>
    )
}
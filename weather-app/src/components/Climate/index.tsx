import {Image, Text, View} from "react-native";
import {styles} from "./styles";
import {CustomText} from "../CustomText";
import {IClimateProps} from "./interfaces";

export function Climate(props: IClimateProps) {
    return (
        <View style={styles.container}>
            <CustomText fontSize={18}  text={props.temp.toString()+"ºC"} paddingHorizontal={6}/>
            <Image  style={styles.image} source={require("../../assets/images/cloudly_night.png")}/>
            <CustomText fontSize={18}  text={props.hour}/>
        </View>
    )
}
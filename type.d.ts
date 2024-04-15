import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AppNativeParamsList = {
    LoginScreen: undefined,
    ProfileScreen: undefined,
    DataScreen: {
        name: string
        img: string
    }
}

export type Props = NativeStackScreenProps<AppNativeParamsList>
export type LoginProps = Props['Navigation']
export type DataProps = NativeStackScreenProps<AppNativeParamsList, "DataScreen">
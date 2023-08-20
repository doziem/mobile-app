import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";


export default styles = StyleSheet.create({

    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        alignItems: 'center',
        marginTop: SIZES.xxLarge,
        marginLeft: SIZES.small / 2
    },
    seperator: {
        height: 12
    }
})

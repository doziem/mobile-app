import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";



export default styles = StyleSheet.create({

    container: {
        marginTop: SIZES.medium,
        marginHorizontal: 12
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    headerTitle: {
        fontFamily: 'semibold',
        fontSize: SIZES.xLarge - 2
    }
})

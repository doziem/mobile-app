import { StyleSheet } from "react-native";
import { SIZES, COLORS, SHADOWS } from '../../constants'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SIZES.small,
        flexDirection: 'row',
        padding: SIZES.small,
        borderRadius: SIZES.small,
        backgroundColor: '#fff',
        ...SHADOWS.medium,
        shadowColor: COLORS.lightWhite
    },
    searchImage: {
        width: 70,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        justifyContent: 'center',
        alignItems: 'center'
    },
    productImg: {
        width: '100%',
        height: 65,
        resizeMode: 'cover',
        borderRadius: SIZES.small
    },
    textContainer: {
        flex: 1,
        marginHorizontal: SIZES.medium
    },
    productTitle: {
        fontFamily: 'bold',
        fontSize: SIZES.medium,
        color: COLORS.primary
    },
    supplier: {
        fontFamily: 'regular',
        fontSize: SIZES.small + 2,
        color: COLORS.gray,
        marginTop: 3
    }
})

import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";



export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    upperRow: {
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: SIZES.xxLarge,
        width: SIZES.width - 30,
        zIndex: 999
    },
    image: {
        aspectRatio: 1,
        resizeMode: 'cover'
    },
    details: {
        marginTop: -SIZES.large,
        backgroundColor: COLORS.lightWhite,
        width: SIZES.width,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium,
    },
    titleRow: {
        marginHorizontal: 15,
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 20,
        width: SIZES.width - 30
    },

    title: {
        fontFamily: 'bold',
        fontSize: SIZES.large
    },
    price: {
        fontFamily: 'semibold',
        fontSize: SIZES.large,
        paddingHorizontal: 10
    },
    priceWrapper: {
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large
    },
    ratingRow: {
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width - 10,
        top: 5,
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        top: SIZES.large,
        marginHorizontal: SIZES.small
    },
    descriptionWrapper: {
        marginTop: SIZES.large * 2,
        marginHorizontal: SIZES.large
    },
    description: {
        fontFamily: 'medium',
        fontSize: SIZES.large
    },
    descText: {
        fontFamily: 'regular',
        fontSize: SIZES.small,
        textAlign: 'justify',
        marginBottom: SIZES.small,
    },
    location: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        padding: 5,
        borderRadius: SIZES.large,
        marginHorizontal: 12
    },
    cartRow: {
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width
    },
    cartBtn: {
        width: SIZES.width * 0.7,
        backgroundColor: COLORS.black,
        padding: SIZES.small / 2,
        marginLeft: 12,
        borderRadius: SIZES.large
    },
    cartTitle: {
        color: COLORS.lightWhite,
        fontFamily: 'semibold',
        fontSize: SIZES.small,
        marginLeft: SIZES.small
    },
    addToCart: {
        width: 37,
        height: 37,
        borderRadius: 50,
        margin: SIZES.small,
        backgroundColor: COLORS.black,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

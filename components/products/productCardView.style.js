import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";



export default styles = StyleSheet.create({
    container: {
        width: 200,
        height: 240,
        marginEnd: 2,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.secondary
    },
    imageContainer: {
        flex: 1,
        width: 192,
        marginLeft: SIZES.small / 2,
        marginTop: SIZES.small / 2,
        borderRadius: SIZES.small,
        overflow: 'hidden'
    },
    image: {
        aspectRatio: 2,
        resizeMode: 'cover'
    },
    details: {
        padding: SIZES.small
    },
    title: {
        fontFamily: 'bold',
        fontSize: SIZES.large,
        marginBottom: 2
    },
    supplier: {
        fontFamily: 'regular',
        fontSize: SIZES.small,
        color: COLORS.gray
    },
    price: {
        fontFamily: 'bold',
        fontSize: SIZES.medium,
    },
    addBtn: {
        position: 'absolute',
        bottom: SIZES.small,
        right: SIZES.small
    }
});

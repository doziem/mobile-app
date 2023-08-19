import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './newArrivals.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../constants'
import { ProductList } from '../components'

const NewArivals = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.upperRow}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons
                                name="chevron-back-circle"
                                size={34}
                                color={COLORS.offwhite}
                            />
                        </TouchableOpacity>
                        <Text style={styles.heading}>Products</Text>
                    </View>
                </View>
            </View>
            <ProductList />
        </SafeAreaView>
    )
}

export default NewArivals

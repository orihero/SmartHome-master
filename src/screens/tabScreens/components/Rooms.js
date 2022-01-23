import React from 'react'
import { View, Text } from 'react-native'
import { LivingRoom } from '../../../assets/icons/icons'


export default function Rooms() {
    return (
        <View style={styles.LivingRoom} >
            <LivingRoom />
            <Text>LivingRoom</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    LivingRoom: {
        
    }
})

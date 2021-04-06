import React from 'react'
import { View, Text, } from 'react-native'

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
        
        <ImageBackground source={require('./assets/assets-2/images/ModelS.jpeg')}
        style={styles.image}
        />

        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>

      </View>
    )
}

export default CarItem;
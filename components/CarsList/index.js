import React from 'react';
import { View, Text, FlatList } from 'react-native'
import CarItem from '../CarItem'

import styles from './style'
import cars from './cars'

const CarsList = () => {
    return (
        <View style={styles.container}>
            <FlatList 
            data={cars}
            renderItem={({item}) => <CarItem car = {item} />}
            />
        </View>
    );
}

export default CarsList;
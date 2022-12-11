import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ExerciseSet } from '../types'
import spacing from '@app/constants/Spacing'

const SetRow = ({weight, repetitions}: ExerciseSet) => {
  return (
    <View style={styles.root}>
             <Text>{weight} kg</Text>
             <Text>{repetitions} reps</Text>
        </View>
  )
}

export default SetRow

const styles = StyleSheet.create({
  root: {flexDirection: "row", justifyContent: "space-between", marginLeft: spacing.XXXL},
})
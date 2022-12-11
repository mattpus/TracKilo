import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ExerciseSet } from '../types'

const SetRow = ({weight, repetitions}: ExerciseSet) => {
  return (
    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
             <Text>{weight}</Text>
             <Text>{repetitions}</Text>
        </View>
  )
}

export default SetRow

const styles = StyleSheet.create({})
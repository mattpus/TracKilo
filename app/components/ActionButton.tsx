import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import spacing from '../constants/Spacing'

interface IActionButton {
  iconName: keyof typeof Ionicons.glyphMap
  title: string, 
  onPress: () => void, 
}
const ActionButton = ({iconName, title, onPress}: IActionButton) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Ionicons name={iconName} size={32} color={Colors.light.text} />
      <Text>{title}</Text>
    </Pressable>
  )
}

export default ActionButton

const styles = StyleSheet.create({
  container: {
    padding: spacing.M,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.XL,
  }
})
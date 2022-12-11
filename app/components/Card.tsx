import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import HorizontalLine from './HorizontalLine'
import spacing from '../constants/Spacing'
import Colors from '../constants/Colors'

type Props = {
  title: string,
  children?: React.ReactNode,
  style?: StyleProp<ViewStyle>
}

const Card = ({
  title,
  children,
  style,
}: Props) => {
  return (
    <View style={[styles.root, style]}>
      <View style={styles.headerContainer} >

        <Text style={styles.title}>{title}</Text>
      </View>
       <HorizontalLine />
    {children}
  </View>
  )
}

export default Card

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "lightgray",
    marginHorizontal: spacing.XS,
    borderRadius: spacing.XXS,
    shadowColor: "black",
    shadowOffset: { width: spacing.NONE, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: spacing.XXS,
    marginBottom: spacing.M,
  },
  headerContainer: {
    flexDirection: 'row',
    margin: spacing.M,
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: spacing.XS,
  }
})
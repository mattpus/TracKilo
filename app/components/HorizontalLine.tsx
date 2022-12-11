
import React from 'react';
import type { ViewProps } from 'react-native';
import { StyleSheet, View } from 'react-native';

const HorizontalLine = (props: ViewProps): React.ReactElement => {
  return <View style={[style.root, props.style]} />;
};

const style = StyleSheet.create({ root: { height: 1 } });

export default HorizontalLine;
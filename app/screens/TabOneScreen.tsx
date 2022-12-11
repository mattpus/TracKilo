import {  StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../../types';

import {
  Agenda,
  AgendaSchedule,
} from "react-native-calendars";

import WorkoutList from '../components/WorkoutList';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [items, setItems] = useState<AgendaSchedule>({});

  

  return (
    <View style={styles.container}>
      <Agenda

        renderEmptyDate={() => {
          return <View style={{backgroundColor: "red", height: 40, width: 40}} />}}
        renderList={listProps => <WorkoutList {...listProps} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor :"green",
  },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
 
});

  // const renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
  //   const fontSize = isFirst ? 16 : 14;
  //   const color = isFirst ? "black" : "#43515c";

  //   return (
      
  //   );
  // };
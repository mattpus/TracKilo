import { Alert, FlatList, Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../../types';
import Ionicons from '@expo/vector-icons/Ionicons';
import ActionButton from '../components/ActionButton';
import {
  Agenda,
  AgendaEntry,
  AgendaSchedule,
  DateData,
} from "react-native-calendars";
import React, { useState } from 'react';
import { ReservationListProps } from 'react-native-calendars/src/agenda/reservation-list';
import { Exercise, ExerciseSet } from '../types';
import HorizontalLine from '../components/HorizontalLine';
import Card from '../components/Card';
import SetRow from '../components/SetRow';
import WorkoutList from '../components/WorkoutList';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [items, setItems] = useState<AgendaSchedule>({});



  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  // const renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
  //   const fontSize = isFirst ? 16 : 14;
  //   const color = isFirst ? "black" : "#43515c";

  //   return (
  //     <Pressable
  //       style={[styles.item, { height: reservation.height }]}
  //       onPress={() => Alert.alert(reservation.name)}
  //     >
  //      <Text style={styles.title}>{isFirst? "yes" :"no"}</Text>
  //     <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
  //     <ActionButton iconName="ios-add" title="Add workout" onPress={() => {}} />
  //     <ActionButton iconName="copy-outline" title="Copy previous workout" onPress={() => {}} /> 
  //     </Pressable>
  //   );
  // };

  
  
  return (
    <View style={styles.container}>
      <Agenda
       
      
        
        renderEmptyDate={renderEmptyDate}
        renderList={listProps => {
    return <WorkoutList {...listProps} />;
  }}
        // loadItemsForMonth={loadItems}
        // showOnlySelectedDayItems
      />
     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

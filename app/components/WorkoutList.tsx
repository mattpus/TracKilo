import { Alert, FlatList, Pressable, StyleSheet,} from 'react-native'
import React from 'react'
import { ReservationListProps } from 'react-native-calendars/src/agenda/reservation-list';
import Card from './Card';
import { Exercise, ExerciseSet, Workout } from '../types';
import HorizontalLine from './HorizontalLine';
import SetRow from './SetRow';
import workouts from '@app/assets/data/workouts.json'
import spacing from '@app/constants/Spacing';
import ActionButton from './ActionButton';
import { View, Text } from './Themed';

const WorkoutList = (listProps: ReservationListProps) => {
  const {selectedDay} = listProps
  
  
  
  function formatDate(date: Date) {
    function padTo2Digits(num: number) {
      return num.toString().padStart(2, '0');
    }
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-').toString();
  }

const formattedSelectedDay = formatDate(selectedDay)

const listData = workouts[formattedSelectedDay as keyof typeof workouts ]
return(
<FlatList
data={listData}
renderItem={ ({item}) => (
<Card title={item.name}>
  
  {item.exercises.map((exercise: Exercise) => (
    <View style={styles.container}>
        <Text>{exercise.name}</Text>
        <HorizontalLine/>
    
        { exercise.sets.map((set: ExerciseSet) => (
           <SetRow weight={set.weight} repetitions={set.repetitions}/>
        ))}
    
    </View>
  ))}
  
</Card>
)}
ListEmptyComponent={() => <EmptyDate/>}




/>
)
}


const EmptyDate = () => {
  return (
  
  <View style={styles.separator} >
  <ActionButton iconName="ios-add" title="Add workout"onPress={() => Alert.alert("Adding workout")} />
  <ActionButton iconName="copy-outline" title="Copy previous workout" onPress={() => Alert.alert("Coping workout")}/> 
  </View>
  );
};

export default WorkoutList

const styles = StyleSheet.create({
  container: {
    margin: spacing.M,
    padding: spacing.XS,
    borderRadius: spacing.XS
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    flex:1 ,
    minHeight: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
})
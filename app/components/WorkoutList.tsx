import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ReservationListProps } from 'react-native-calendars/src/agenda/reservation-list';
import Card from './Card';
import { Exercise, ExerciseSet, Workout } from '../types';
import HorizontalLine from './HorizontalLine';
import SetRow from './SetRow';
import workouts from '@app/assets/data/workouts.json'

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
    <View>
        <Text>{exercise.name}</Text>
        <HorizontalLine style={{backgroundColor: "red"}}/>
    
        { exercise.sets.map((set: ExerciseSet) => (
           <SetRow weight={set.weight} repetitions={set.repetitions}/>
        ))}
    
    </View>
  ))}
  
</Card>
)}




/>
)
}

export default WorkoutList

const styles = StyleSheet.create({})
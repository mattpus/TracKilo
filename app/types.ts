

 export type ExerciseSet = {
  weight: number;
  repetitions: number;
 }

 export type Exercise = {
  name: string;
  sets: ExerciseSet[];
 }
 
 export type Workout = {
  id: number;
  name: string;
  exercises: Exercise[];
  day: string;
 }
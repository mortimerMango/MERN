import { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

//components
import WorkoutsDetails from '../components/workoutDetails'
import WorkoutForm from "../components/workoutForm"

const Home = () =>{
    const {workouts, dispatch} = useWorkoutsContext()

    useEffect(() =>{
        const fetchWorkouts = async () =>{
            const response = await fetch('/api/workouts')
            const json = await response.json()

            //check if response has valid data
            if(response.ok){
               dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }

        fetchWorkouts()
    }, [dispatch])

    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) =>(
                  <WorkoutsDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}
export default Home
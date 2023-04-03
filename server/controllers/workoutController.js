const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// get all workouts
const getWorkouts = async (req, res) =>{
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}
 // get a single workout
const getWorkout = async (req, res) =>{
    const {id} = req.params
    //Check if id field is a valid mongoose object type
    //This prevents the server from crashing
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such workout @ ', id})
    }

    const workout = await Workout.findById(id)

    //You can probably get rid of this since mongoose condition already checks if valid or not
    //Probably just do a try catch block <><><><><><><><>
    if(!workout){
        res.status(400).json({error: 'No such workout found'})
    }

    res.status(200).json(workout)
}

// create new workouts
const createWorkout = async (req, res) =>{
    const {title, reps, load} = req.body

    let emptyFields =[]

    //Check empty fields on form
    if(!title){
        emptyFields.push('title')
    }

    if(!load){
        emptyFields.push('load')
    }

    if(!reps){
        emptyFields.push('reps')
    }
    //IF 1 or more fields is caught, send response
    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in all fields', emptyFields})
    }

    // DOCUMENT to db
    try{
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    }
    catch(err){
        res.status(400).json({error: err.message})
    }
}
// delete a workout
const deleteWorkout = async (req, res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such workout @ ', id})
    }

    const workout = await Workout.findByIdAndDelete({_id: id})

    if(!workout){
        res.status(400).json({error: 'No such workout found'})
    }

    res.status(200).json(workout)
}

// update a workout
const updateWorkout = async (req, res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such workout to update'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {...req.body})

    if(!workout){
        return res.status(400).json({error: 'no such workout'})
    }

    return res.status(200).json(workout)
}

module.exports = {
    getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout
}
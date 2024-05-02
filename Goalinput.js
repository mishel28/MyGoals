import { useState } from "react";
import{view,TextInput,Button,StyleSheet}from"react-native"

function GoalImput({onAddGoal}){
cont[enteredGoalText,setEnteredGoalText]=useState('')

function handleInputGoal(entereText){
console.log(enteredText)
setEnteredGoalText(entereText)



}
function addGoalHandler(){
    onAddGoal(entereText)
    setEnteredGoalText('')
    console.log('addGoalHandler')
}

return(
    <View Style={StyleSheet.inputContainer}>
        <TextInput
        style={StyleSheet.TextInput}
        placeholder="Your Goal"
        onChangeText={handleInputGoal}
        value={enteredGoalText}


        
        />

<Button 
title="add Goals"
color={'#A3FFD6'}
onPress={addGoalHandler}
/>

</View>


   )


}

export default GoalInput
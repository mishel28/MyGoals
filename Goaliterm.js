
import { StyleSheet ,View,Text,Pressable}from "react-native"

function GolItem({iteData,OnDeLeteItem}){
return(
    <Pressable>
<View style={style.goalItem}>
<text style={style.goalText}>{itemData.item}</text>
</View>


    </Pressable>
)



}

export default GoalItem

const style=StyleSheet.create({
    goalItem:{
        margin:8,
        padding:8,
        borderRadius:6,
        backgroundColor:'#FF6B4C',
        color:'black'


    },
    goalText:{
        color:'white'
    }


})
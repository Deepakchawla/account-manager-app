import React,{Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, Image, FlatList, ToastAndroid, ScrollView, TouchableOpacity } from 'react-native';
import { Chip, IconButton } from 'react-native-paper';
import style from '../component/Dashboard/Dashboard.less'
import { list } from '../file';


const Weeklist = [
    {
      
        weekNumber: "Week 1"
    },
    {
        weekNumber:"Week 2"
    },
    {
        weekNumber:"Week 3"
    },
    {
        weekNumber:"Week 4"
    },
    {
        weekNumber:"Week 5"
    },
    {
        weekNumber:"Week 6"    },
    {
        weekNumber:"Week 8"
    },
    {
        weekNumber:"Week 9"
    },
    {
        weekNumber:"Week 10"
    },
    {
        weekNumber:"Week 11"
    },
    {
        weekNumber:"Week 12"
    },
    {
        weekNumber:"week 13"
    }
]
export default class WeekList extends Component
{
    render(){
        return(
            
<FlatList horizontal={true} showsHorizontalScrollIndicator={false}
data={list.Weeklist}
renderItem={({item})=>
<View style={style.chipView}>
<View style={style.chip} >
<Text>{item.weekNumber}</Text></View>
</View>
}
/>

            
        )
    }
}
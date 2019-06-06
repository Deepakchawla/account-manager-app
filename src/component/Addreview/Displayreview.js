import React,{Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, StatusBar,FlatList, ScrollView,Image ,TouchableOpacity} from 'react-native';

import style from '../Addreview/Addreview.less'
import Track from './Track';
import Comment from './Comment';
import Regularity from './Regularity';
import Attitude from './Attitude';
import Communication from './Communication';
import Knowledge from './Knowledge';
import { list } from '../../file';
const user=[
    {Track:
        {score:0.5,
        Comment:"It is a long established fact that a reader will bedistracted by the readable content of a page when looking at its layout."

    }},
    {Regularity:{
        score:0.5,
        Comment:"It is a long established fact that a reader will bedistracted by the readable content of a page when looking at its layout."

    }},
    {Attitude:{
        score:0.5,
        Comment:"It is a long established fact that a reader will bedistracted by the readable content of a page when looking at its layout."

    }},
    {Communication:{
        score:0.5,
        Comment:"It is a long established fact that a reader will bedistracted by the readable content of a page when looking at its layout."

    }},
    {Knowledge:{
        score:0.5,
        Comment:"It is a long established fact that a reader will bedistracted by the readable content of a page when looking at its layout."

    }}






    
]
 export default class Dispalyreview extends Component {

    constructor(){
        super();
        this.state={

        }
    }
    render(){
        
        console.log("track of user"+JSON.stringify(user));
        console.log("in track "+JSON.stringify(list.trackSheet[0].Track.score));
        
        
        return(
            <View style={style.mainView}>
                <View style={style.usernameView}>
<View style={style.textView}>
     <View>           
<Text style={style.userNametext}>@Pooja Patil </Text>
</View>
<View>
<Text style={style.feildText}>#FullStack</Text>
</View>
</View>
<View style={style.weekView}>
    <Text style={style.weekText}>Week 4</Text></View>
</View>
<ScrollView>
<View >
    <Track data={list.trackSheet[0]}/>
    <Regularity data={list.trackSheet[1]}/>
    <Attitude data={list.trackSheet[2]}/>
    <Communication data={list.trackSheet[3]}/>
    <Knowledge data={list.trackSheet[4]}/>
</View>
<Text></Text>
    </ScrollView>
    <View style={style.saveButton}><Text></Text></View>
            </View>
        )
    }
}
import React,{Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, StatusBar,FlatList, ScrollView,Image ,TouchableOpacity} from 'react-native';

import style from '../Addreview/Addreview.less'
import Track from './Track';
import Comment from './Comment';
import Regularity from './Regularity';
import Attitude from './Attitude';
import Communication from './Communication';
import Knowledge from './Knowledge';
 export default class Addreview extends Component {

    constructor(){
        super();
        this.state={

        }
    }
    render(){
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
<View style={style.dataView} >
    <Track/>
    <Regularity/>
    <Attitude/>
    <Communication/>
    <Knowledge/>
</View>
<View style={style.saveButton}><Text>Save</Text></View>
    </ScrollView>
    
            </View>
        )
    }
}
import React,{Component } from 'react';
import style from'../Addreview/Addreview.less';
import { Platform, StyleSheet, Text, View, TextInput, StatusBar,FlatList, ScrollView,Image ,TouchableOpacity} from 'react-native';


export default class Comment extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <View style={style.mainView}>
            <View style={style.commenttextView}>
                <View style={style.userNamecomment}>
                    <Text style={style.userNametext}>
    @Pooja Patil 
</Text>
<Text style={style.feildText}>#FullStack</Text>
</View>

<View style={style.commentText}>
<Text>
It is a long established fact that a reader will bedistracted by the readable content of a page when looking at its layout.
</Text>
</View>
            </View>
            </View>
        )
    }
}
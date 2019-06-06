import React,{Component }from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, Image, FlatList, ToastAndroid, ScrollView, TouchableOpacity } from 'react-native';
import style from '../../../src/component/Profile/Profile.less'
import { connect } from 'react-redux';
import { list } from '../../file';

const track=[
    {
        category:"Timeliness"
    },
    {
        category:"Regularity"
    },
    {
        category:"Attitude"
    },
    {
        category:"Communication"
    },
    {
        category:"Knowlegde"
    },
]


const mapStateToProps = state => {
    return {
        userName: state.dashboardReducer.user
    }
}
  class Profile extends Component{

    goBack(){
        console.log("in go back method")
        this.props.navigation.navigate("Dashboard")
    }
    render(){
        console.log("user in profille"+this.props.userName.userName)
        var user=this.props.userName.userName
        var selecteduser=user.substring(1)
        return(
<View style={style.profilemainDiv}>
<View style={style.topDiv}>

    <View >
        <TouchableOpacity onPress={()=>this.goBack()}>
        <Image  style={style.backIcon}source={require('../../assets/left.png')} />
        </TouchableOpacity>
    </View>
    <View>
<Text style={style.selecteduserText}>{selecteduser}</Text>
    </View>
    <View></View>
</View>
<View>

</View>
<View style={style.outerbottomView}>
    <View>
    <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
data={list.track}
renderItem={({item})=>
<View style={style.lastweekChip}>
<View style={style.chipText} >
<Text>{item.category}</Text></View>
</View>
}
/>

    </View>
    <View style={style.trackView}> 
    <View style={style.lastweekChip}>
        <Text>
            Last Weeks Track
        </Text>
    </View>
    <View style={style.lastweekChip}>
        <Text>
            Add Week 6 Track ?
        </Text>
    </View>
    </View>
    <View style={style.bottomDiv}>
        <TextInput
        placeholder='Type comments..'
        placeholderTextColor='#FBFBFB'/>
        <View>
            <Image source={require('../../assets/send.png')}/>
        </View>
    </View>
    </View>
</View>

        );

    }
 } 
 export default connect(mapStateToProps)(Profile)
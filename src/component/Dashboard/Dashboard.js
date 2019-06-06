import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, StatusBar,FlatList,Image ,TouchableOpacity} from 'react-native';
import style from "../Dashboard/Dashboard.less"

import WeekList from '../Weeklist';
import Profile from '../Profile/Profile';
import { SEARCH_USER, SELECTED_USER } from '../../constants/actionTypes';
import { connect } from 'react-redux';

import RBSheet from "react-native-raw-bottom-sheet";
import Addreview from '../Addreview/Addreview';
import Comment from '../Addreview/Comment';
import { ScrollView } from 'react-native-gesture-handler';
import Dispalyreview from '../Addreview/Displayreview';
import { list } from '../../file';


const mapStateToProps = state => {
    return {
        text: state.dashboardReducer.user
    }
}
const mapDisapatchToProps = dispatch => ({
    searchUser: (value) =>
        dispatch({ type: SEARCH_USER, value }),
        selectedUser:(data)=>
        dispatch({type:SELECTED_USER,data})
})

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state =
            {
                edit: false,
                filterArray: [],
track:false,
                isSearching: false,
                profileClick: false,
                selected:[],
                selectedText:""

            }
            console.disableYellowBox=true
    }
    onComment(text) {
        var comment = JSON.stringify(text)
        var NoteData = [];
        if (text.toString().length >= 1) {
           
            if(text.charAt(0)==="@")
            {
                this.setState({ isSearching: true ,
                track:false,
            
            });
            const newData = list.Users.filter(function (item) {
                return item.userName.toLowerCase().indexOf(text.toLowerCase()) > -1 || item.userName.toLowerCase().indexOf(text.toLowerCase()) > -1;
            });
            this.setState({
                filterArray: newData,
            });
        }
        else if(text.charAt(0)==='#')
        {
            this.setState({ isSearching: true,
                track:false, });
            const newData = list.Users.filter(function (item) {
                return item.field.toLowerCase().indexOf(text.toLowerCase()) > -1 || item.field.toLowerCase().indexOf(text.toLowerCase()) > -1;
            });
            this.setState({
                filterArray: newData,
            });
        }


        } else {
            this.setState({ isSearching: false,
            track:false,
            profileClick:false,
            });
        }




        this.props.searchUser(comment)
        console.log("value of text in on comment mwthd" + comment);

    }
    profileClick(person) {
        console.log(" in on prerss event "+JSON.stringify(person));
        
        this.setState({
            profileClick: true,
            selected:person,
            isSearching:false,
            selectedText:person.detail


        })
        console.log(" in on prerss event 2---"+this.state.profileClick);

    }

    editText() {
        this.setState({
            edit: true,
            
            
        
        })
    }
    stopEdit() {
        this.setState({
            edit: false
        })
    }
    onTrack(){
this.setState({
    track:true,
    isSearching:false
})
    }
    openProfile(user){
        console.log(" user in profike--0"+JSON.stringify(user));
        
        this.props.selectedUser(user)
        this.props.navigation.navigate("Profile")
    }
    openEdit(){
        this.RBSheet.open();

    }
    handleClose(){
        console.log("in handle close")
        this.setState({
            profileClick:false,
            isSearching:true
        })
        console.log("after set state"+this.state.profileClick);
        
        
    }
    render() {
        var finalArray = !this.state.isSearching ? this.state.notes : this.state.filterArray;
        var textValue=this.state.isSearching ?null:this.state.selectedText

        console.log("text value---" + this.props.text)
        var textBackground = !this.state.edit ? style.bottomDiv : style.editBottomdiv
        return (
            <View style={style.maindiv}>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <View style={style.topDiv}>
                    <View>


                    </View>
                    <Text style={style.messageText}>
                        Messages
</Text>
                    <View>
                        <Image style={style.searchIcon} source={require('../../../src/assets/search.png')} />
                    </View>

                </View>
                
                <ScrollView >
                <View style={style.scrollDashboard}>
                        
                        
                        
                        
<Dispalyreview/>    

    <Comment/>
    <Comment/>
    <Comment/>

    

    </View>
                    
                </ScrollView>
                

                <View style={style.weekList}>
                    <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
                        data={finalArray}
                        renderItem={({ item }) =>

                            <View style={style.userNameview} >
                            <TouchableOpacity 
                            onPress={() => this.profileClick(item)} >
                                <View style={style.avatar}>
                                    <View style={style.avatarView}>
                                    </View>

                                </View>
                                <Text style={style.userNametext}>{item.userName}</Text>
                                <Text style={style.fieldText}>{item.field}</Text>
</TouchableOpacity>
                            </View>
                        } />
                        {this.state.profileClick && !this.state.isSearching?
                        (
                        <View style={style.selectedUser} >
                             <View>
                                 <TouchableOpacity onPress ={()=>this.handleClose()}>
                               <Image style={style.cancelIcon} source={require('../../assets/cancel.png')} />
                               </TouchableOpacity>
                           </View>
                       <TouchableOpacity onPress={()=>this.openProfile(this.state.selected)}>
                                                       <View style={style.avatar}>
                                <View style={style.avatarView}>
                                </View>
                               

                            </View>
                            <Text style={style.userNametext}>{this.state.selected.userName}</Text>
                            <Text style={style.fieldText}>{this.state.selected.field}</Text>
                            </TouchableOpacity>
                        </View>
                        ):(
                            <View></View>
                        )
                        }
                        {this.state.track ?
                        (
                            <WeekList/>
                        ):
                        (
                            <View></View>
                        )
                            
                        }
                    {
                        this.state.profileClick  ?
                            (
                                <View style={style.trackChip}>
<TouchableOpacity onPress={()=>this.onTrack()}>
                                    <Text style={style.chipText}>
                                        TRACK
                                    </Text>
                                    </TouchableOpacity>
                                </View>
                            ) :
                            (
                                <View></View>
                            )

                    }
                    {/* {
                        this.state.isSearching || this.state.profileClick ?
                            (
                                <View></View>
                                
                            )
                            : (
                                
                                <WeekList />
                            )

                    } */}
                    <View style={{ elevation: 2 }}>
                        {this.state.profileClick  && this.state.selectedText!==""?
                        (
                            <View style={textBackground}>
                            <TextInput
                            
                                 value={this.state.selectedText} 
                                style={style.TextInput}
                                onChange={(selectedText) => this.setState({selectedText})}
                                placeholder='on profilr click......'
                                placeholderTextColor='#4F4F4F'
                                onFocus={() => this.editText()}
                                onEndEditing={() => this.stopEdit()}
                                onSubmitEditing={() => this.stopEdit()} />

                                    <View>

                                        <Image style={style.sendmesaageIcon} source={require('../../../src/assets/sendBlue.png')} />
                                    </View>
                                                       
                        </View>
                        ):
                        (
                            <View style={textBackground}>
                            <TextInput
                            clearTextOnFocus={true}
                                 value={textValue} 
                                style={style.TextInput}
                                onChangeText={(text) => this.onComment(text)}
                                placeholder='Type comments......'
                                placeholderTextColor='#4F4F4F'
                                onFocus={() => this.editText()}
                                onEndEditing={() => this.stopEdit()}
                                onSubmitEditing={() => this.stopEdit()} />

                                    <View>

                                        <Image style={style.sendmesaageIcon} source={require('../../../src/assets/send.png')} />
                                    </View>

                                
                            
                        </View>
                        )

                        }
                        
                    </View>
                    <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={300}
          duration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center"
            }
          }}
        >
<Text>this is edit</Text>
        </RBSheet>

                </View>
            </View>
        )
    }
}
export default connect(mapStateToProps, mapDisapatchToProps)(Dashboard)
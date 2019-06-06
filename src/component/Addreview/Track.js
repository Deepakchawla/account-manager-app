import React,{Component} from 'react';
import style from '../Addreview/Addreview.less'
import { Platform, StyleSheet, Text, View, TextInput, StatusBar,FlatList, ScrollView,Image ,TouchableOpacity} from 'react-native';


 export default class Track extends Component{
    constructor(props)
    {
        super(props);
        this.state={

        }
    }
    render(){
    this.props.data?(
        console.log("track in track-----"+JSON.stringify(this.props.data.Track.score))):
        (
            console.log("in addd")
            
        )
        return(
            <View style={style.trackView}>
                <View style={style.TrackAndpoints}>
            <Text style={style.trackText}>T</Text>
            <View style={style.pointsView}>
                {this.props.data?(
                <Text
                >{this.props.data.Track.score}</Text>)
                :(
                    <TextInput
                    placeholder='score'
                    ></TextInput>
                )
                }
                </View>
                </View>
                <View style={style.commentView}>
                    {this.props.data?
                    (
                        <Text
                        >{this.props.data.Track.Comment}
                        </Text>
        
                    ):
                    (
                        <TextInput
                        multiline={true}
                        placeholder="Add comment"
                        >
                        </TextInput>
        
                    )

                    }
                               </View>
            
        </View>
        
        )
    }
}
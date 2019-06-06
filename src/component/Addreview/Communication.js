import React,{Component} from 'react';
import style from '../Addreview/Addreview.less'
import { Platform, StyleSheet, Text, View, TextInput, StatusBar,FlatList, ScrollView,Image ,TouchableOpacity} from 'react-native';

 export default class Communication extends Component{
    constructor()
    {
        super();
        this.state={

        }
    }
    render(){
        return(
            <View style={style.trackView}>
                <View style={style.TrackAndpoints}>
            <Text style={style.trackText}>C</Text>
            <View style={style.pointsView}>
            {this.props.data?(
                <Text

                >{this.props.data.Communication.score}</Text>)
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

                        >{this.props.data.Communication.Comment}
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
import React,{Component} from 'react';
import style from '../Addreview/Addreview.less'
import { Platform, StyleSheet, Text, View, TextInput, StatusBar,FlatList, ScrollView,Image ,TouchableOpacity} from 'react-native';

 export default class Regularity extends Component{
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
            <Text style={style.trackText}>R</Text>
            <View style={style.pointsView}>
            {this.props.data?(
                <Text style={style.displayText}>

                {this.props.data.Regularity.score}</Text>
                )
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
                        <Text style={style.displayText}>
                        {this.props.data.Regularity.Comment}
                        </Text>
        
                    ):
                    (
                        <TextInput
                        multiline={true}
                        placeholder="Add comment"
                        >
                            {this.props.data.Regularity.Comment}
                        </TextInput>
                    )
                    }
                </View>
            
        </View>
        
        )
    }x
}
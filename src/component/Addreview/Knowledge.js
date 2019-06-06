import React,{Component} from 'react';
import style from '../Addreview/Addreview.less'
import { Platform, StyleSheet, Text, View, TextInput, StatusBar,FlatList, ScrollView,Image ,TouchableOpacity} from 'react-native';

 export default class Knowledge extends Component{
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
            <Text style={style.trackText}>K</Text>
            <View style={style.pointsView}>
            {this.props.data?(
                <Text
                
                >{this.props.data.Knowledge.score}</Text>)
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
                    
                        >{this.props.data.Knowledge.Comment}
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
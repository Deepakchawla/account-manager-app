import { createAppContainer, createStackNavigator } from "react-navigation";
import Dashboard from "./component/Dashboard/Dashboard";
import Profile from "./component/Profile/Profile";


const Appnavigator=createStackNavigator({
    Dashboard:{
        screen:Dashboard,
        navigationOptions:{
            header:null
          }
        },
          Profile:{
              screen:Profile,
              navigationOptions:{
                header:null
              }
            },
        },
              {
                initialRouteName: "Dashboard"
            },
    
          
    
);
export default createAppContainer(Appnavigator);
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import SignupView from "./components/signup/mainSignup";
import MsgView from "./components/msgscreen/mainMsg";
import ChatView from "./components/chatscreen/mainChat";
import SearchScreen from "./components/search/mainSearch";
const AppNavigator = createStackNavigator({
    Signup: { screen: SignupView },
    Messages: { screen: MsgView },
    ChatScreen: { screen: ChatView },
    Search: { screen: SearchScreen }
},
    {
        // initialRouteName: 'Login',
        headerMode: 'none'
    }
);

export default createAppContainer(AppNavigator);

import { createStackNavigator } from 'react-navigation';

import Main from './pages/Main';
import Product from './pages/product';

export default createStackNavigator({
    Main,
    Product
    },{
    navigationOptions:{
        headerStyle:{
            backgroundColor: "#1E90FF"
        },
        headerTintColor:"#FFF"
    },
});

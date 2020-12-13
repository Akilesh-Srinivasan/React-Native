import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ComponentsScreen from './src/screens/componentsScreens';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/listScreens';
import ImageScreen from './src/screens/imageScreens';
import CounterScreen from './src/screens/counterScreen';

const navigator = createStackNavigator(
  // createStackNavigator for handling navigation
  {
    // here we are registering the components
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    ImageScreen: ImageScreen,
    CounterScreen: CounterScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);

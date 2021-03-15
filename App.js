import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ComponentsScreen from './src/screens/componentsScreens';
import HomeScreen from './src/screens/HomeScreen';
import CounterScreen from './src/screens/counterScreen';
import ColorsScreen from './src/screens/colorsScreen';
import SquareScreen from './src/screens/squareScreen';
import TextScreen from './src/screens/TextScreen'

const navigator = createStackNavigator(
  // createStackNavigator for handling navigation
  {
    // here we are registering the components
    Home: HomeScreen,
    Components: ComponentsScreen,
    CounterScreen: CounterScreen,
    ColorsScreen: ColorsScreen,
    SquareScreen: SquareScreen,
    TextScreen: TextScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator} from '@react-navigation/drawer';
import Home from './src/home';
import Diario from './src/diario';
import Emocao from './src/emocao';
import Config from './src/config.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const routIcons = {
  Inicio: 'home',
  Diario: 'book',
  Emoção: 'happy'
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
       tabBarIcon: ({ focused, color, size}) => {
        const iconName = routIcons[route.name];
        const iconNameFocused = `${iconName}${focused ? '' : '-outline'}`;

        return <Ionicons name={iconNameFocused} size={size} color={color} />
      },
       })}
       tabBarOptions={{
        activeTintColor: 'darkgreen',
        inactiveTintColor: 'grey',
       }}

       >
      <Tab.Screen name="Inicio" component={Home}/>
      <Tab.Screen name="Diario" component={Diario} />
      <Tab.Screen name="Emoção" component={Emocao} />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName='Inicio'>
      <Drawer.Screen name="Inicio" component={MyTabs} />
      <Drawer.Screen name='Configurações' component={Config} />
    </Drawer.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

 
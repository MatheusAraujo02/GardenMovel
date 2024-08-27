import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator} from '@react-navigation/drawer';
import Home from './src/home';
import Diario from './src/diario';
import Emocao from './src/emocao';
import Config from './src/config.js';
import {Feather} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



function MyTabs() {
  return (
    <Tab.Navigator 
    screenOptions={{ 
      headerShown: false,
      tabBarActiveTintColor: 'darkgreen',
      tabBarInactiveTintColor: 'grey',
      tabBarActiveBackgroundColor: '#c0c0c0',
      tabBarInactiveBackgroundColor: '#grey',
    }}
    >
      <Tab.Screen
        name="Inicio" 
        component={Home}
        options={{
        tabBarIcon: ({focused, color, size}) => <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size}/>,
        tabBarLabel: 'Início',
      //  tabBarLabelPosition: 'beside-icon', faz o texto do botão ir para o lado icone.

    }}
      />
      <Tab.Screen 
        name="Diario" 
        component={Diario}
        options={{
          tabBarIcon: ({color, size} ) => <Feather name='book-open' color={color} size={size}/>,
          tabBarLabel: 'Diario'
        }}
        
      />
      <Tab.Screen 
        name="Emoçao" 
        component={Emocao} 
        options={{
          tabBarIcon: ({color, size} ) => <Feather name='smile' color={color} size={size}/>,
          tabBarLabel: 'Emoção'
        }}
      
      />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator 
    screenOptions={{
      title: 'Garden',
      headerTitleStyle: {
        alignItems: 'center'
      },
      headerStyle: {
        backgroundColor: '#fff',
      },
      drawerType: 'slide',
      drawerPosition: 'right'
    }}  
    >
      <Drawer.Screen 
        name="Garden" 
        component={MyTabs}
        options={{
          drawerIcon: ({color, size} ) => <Feather name='home' color={color} size={size}/>,
          drawerLabel: 'Inicio',

        }
        }/>
      <Drawer.Screen 
        name='Configurações'
        component={Config}
        options={{
          drawerIcon: ({color, size} ) => <Feather name='settings' color={color} size={size}/>,
          drawerLabel: 'Configurações'
        }} />
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

 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Screen1 from '../Components/project1_stage1_screen1';
import Screen2 from '../Components/project1_stage1_screen2';


const Tab = createBottomTabNavigator();

const Stage1 = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Screen1" component={Screen1} />
        <Tab.Screen name="Screen2" component={Screen2} />
       
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Stage1;


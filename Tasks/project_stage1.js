import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Screen1 from '../Components/project1_stage1_screen1';
import Screen2 from '../Components/project1_stage1_screen2';
import Screen3 from '../Components/project1_stage1_screen3';


const Tab = createBottomTabNavigator();

const Stage1 = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Camera" component={Screen1} />
        <Tab.Screen name="Sensors" component={Screen2} />
        <Tab.Screen name="Gallery" component={Screen3} />
       
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Stage1;


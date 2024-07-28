import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from '../Components/screen1_task41';
import Screen2 from '../Components/screen2_task41';
import Screen3 from '../Components/screen3_task41';
import Screen4 from '../Components/screen4_task41';

const Tab = createBottomTabNavigator();

const Task41 = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Screen1" component={Screen1} />
        <Tab.Screen name="Screen2" component={Screen2} />
        <Tab.Screen name="Screen3" component={Screen3} />
        <Tab.Screen name="Screen4" component={Screen4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Task41;

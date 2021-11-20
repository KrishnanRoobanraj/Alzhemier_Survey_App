
import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import survey from '../Screens/survey';
import home from '../Screens/homepage';
import mediumrisk from '../Screens/mediumrisk';
import highrisk from '../Screens/highrisk';


const RootNav = createStackNavigator();

export default ( ({navigation}) =>  (
    <RootNav.Navigator initialRouteName="Home">

		<RootNav.Screen
			name="Survey"
			options={{
				title: 'SURVEY',
				headerStyle: {
					backgroundColor: '#e8b261',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}}
			component={survey}
		/>


<RootNav.Screen
			name="Home"
			options={{
				title: ' HOME',
				headerStyle: {
					backgroundColor: '#e8b261',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}}
			component={home}
		/>

<RootNav.Screen
			name="mediumrisk"
			options={{
				title: 'Guidelines for MediumRisk',
				headerStyle: {
					backgroundColor: '#e8b261',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}}
			component={mediumrisk}
		/>

<RootNav.Screen
			name="highrisk"
			options={{
				title: 'Guidelines for HighRisk',
				headerStyle: {
					backgroundColor: '#e8b261',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}}
			component={highrisk}
		/>



</RootNav.Navigator>





) ) 
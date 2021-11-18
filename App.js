import React ,  { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import AuthStack from './components/AuthStack'
import RootStack from './components/RootStack';

const App = () => {
	const [credentials, setCredentials] = useState(null)

	useEffect(() => {
		fetchvalue = async () => {
			let data = await AsyncStorage.getItem('TokenDetails')
			let tokenDetails = JSON.parse(data)
			setCredentials(tokenDetails)
		}
		fetchvalue()

	// 	var status = false;
    // 	NativeBridge.BluetoothStatus(
    //   	(err) => { console.log("error", err) },
    //   	(msg) => {
    //     if(parseInt(msg) == 3){
    //       status=true;
    //     }
    //   });
    //   await AsyncStorage.setItem('BluetoothStatus',JSON.stringify({status:status}));
    //   await AsyncStorage.setItem("address", JSON.stringify({}));

	}, [])
	return (
		<NavigationContainer>
			{credentials === null ? <AuthStack /> : <RootStack />}
		</NavigationContainer>
	)
}

export default App

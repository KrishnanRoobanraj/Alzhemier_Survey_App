import React, { useEffect, useState } from 'react'
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	TouchableHighlight,
	Image,
	Alert,
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { createStackNavigator } from '@react-navigation/stack'

const Login = ({ navigation }) => {
	const [email, setEmail] = useState('')
	const [password, setPasword] = useState('')
	const [success, setSuccess] = useState(false)
	const [data,setData] = useState([])

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
		fetch_registered_user = async () => {
			let data1 = await AsyncStorage.getItem('_pos_user_auth_details')
			let data2 = JSON.parse(data1)

			setData(data2)

			
		}
		fetch_registered_user()
	});
	return unsubscribe;
	},[navigation])

	const handleEmail = value => {
		setEmail(value)
	}

	const handlePassword = value => {
		setPasword(value)
	}

	const handleLogin = async () => {
		if (email.length > 0 && password.length > 0) {
			// let data = await AsyncStorage.getItem('_pos_user_auth_details')
			let state = false
			try {
				// for (let i = 0; i < JSON.parse(data).length; i++) {
				for (let i = 0; i < data.length; i++) {
					if (
						// JSON.parse(data)[i]['email'] === email &&
						// JSON.parse(data)[i]['password'] === password
						data[i]['email'] === email &&
						data[i]['password'] === password
					) {
						state = true
						break
					}
				}
			} catch (error) {
				state = false
				console.log(error)
			}

			if (state) {
				setSuccess(true)
				await AsyncStorage.setItem(
					'TokenDetails',
					JSON.stringify({ email: email, password: password }),
				)
				console.log('login sucessfull')
				// alert('login Successfull');
				// navigation.navigate('dashboard')
				navigation.navigate('mainscreen')
			} else {
				alert("Couldn't find your account")
				setSuccess(false)
			}
		} else {
			alert('Enter the username and password')
			setSuccess(false)
		}
	}

	//   const handleRegister = navigation => {
	//     navigation.navigate('Register');
	//   };

	return (
		<View style={styles.container}>
			<Text
				style={{
					color: 'white',
					fontSize: 19,
					fontWeight: 'bold',
					marginVertical: 20,
				}}>
				Welcome to Alzheimers Tracker App 
			</Text>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.inputs}
					placeholder="Email"
					keyboardType="email-address"
					underlineColorAndroid="transparent"
					onChangeText={handleEmail}
				/>
			</View>

			<View style={styles.inputContainer}>
				<TextInput
					style={styles.inputs}
					placeholder="Password"
					secureTextEntry={true}
					underlineColorAndroid="transparent"
					onChangeText={handlePassword}
				/>
			</View>

			<TouchableHighlight
				style={[styles.buttonContainer, styles.loginButton]}
				onPress={handleLogin}>
				<Text style={styles.loginText}>Login</Text>
			</TouchableHighlight>

			{/* <TouchableHighlight
          style={styles.buttonContainer}
          onPress={() => this.onClickListener('restore_password')}>
          <Text>Forgot your password?</Text>
        </TouchableHighlight> */}

			<TouchableHighlight
				style={styles.buttonContainer}
				onPress={() => navigation.navigate('register')}>
				<Text>Register</Text>
			</TouchableHighlight>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#00b5ec',
	},
	inputContainer: {
		// borderBottomColor: '#F5FCFF',
		backgroundColor: '#FFFFFF',
		borderRadius: 30,
		// borderBottomWidth: 1,
		width: 250,
		height: 45,
		marginBottom: 20,
		flexDirection: 'row',
		alignItems: 'center',
	},
	inputs: {
		height: 45,
		marginLeft: 16,
		// borderBottomColor: '#FFFFFF',
		flex: 1,
	},
	inputIcon: {
		width: 30,
		height: 30,
		marginLeft: 15,
		justifyContent: 'center',
	},
	buttonContainer: {
		height: 45,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
		width: 250,
		borderRadius: 30,
	},
	loginButton: {
		backgroundColor: '#FF4DFF',
	},
	loginText: {
		color: 'white',
	},
})
export default Login

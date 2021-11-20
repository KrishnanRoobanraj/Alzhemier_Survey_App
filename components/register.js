import React, { Component, useState } from 'react'
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

const Register = ({ navigation }) => {
	const [email, setEmail] = useState('')
	const [password, setPasword] = useState('')
	const [cpassword, setCpassword] = useState('')
	const [condition, setCondition] = useState(false)

	const handleEmail = value => {
		setEmail(value)
		console.log('email', value)
	}

	const handlePassword = value => {
		setPasword(value)
		console.log('email', value)
	}

	const handleCpassword = value => {
		setCpassword(value)
		console.log('email', value)
	}

	const handleRegister = async () => {
		if (
			email.length > 5 &&
			password.length > 5 &&
			cpassword.length > 5 &&
			password === cpassword
		) {
			let data = await AsyncStorage.getItem('_pos_user_auth_details'),
				creditals = {
					email: email,
					password: password,
					cpassword: cpassword,
				}
			var state = false
			try {
				var user = JSON.parse(data)
				user.map(item => item.email == email)
				user.map(item => item.password == password)
				state = true
			} catch (error) {
				state = false
			}

			if (condition) {
				alert('Username already exists!')
				// this.setState({
				//   visible: false,
				//   success: false,
				//   error: true,
				//   values: 'close-circle',
				// });
				setCondition(false)
			} else {
				try {
					let value = JSON.parse(data).concat(creditals)
					await AsyncStorage.setItem(
						'_pos_user_auth_details',
						JSON.stringify(value),
					)
					await AsyncStorage.setItem(
						'TokenDetails',
						JSON.stringify({
							email: email,
							password: password,
						}),
					)
				} catch (error) {
					await AsyncStorage.setItem(
						'_pos_user_auth_details',
						JSON.stringify([creditals]),
					)

					await AsyncStorage.setItem(
						'TokenDetails',
						JSON.stringify({
							email: creditals.email,
							password: creditals.password,
						}),
					)
				}
				setCondition(true)
				console.log('Registered Successfully')
				// alert('Register successfully');
				setTimeout(() => navigation.navigate('login'), 1000)
			}
		}else if (password.length < 6 ) {
			alert('Password Max Character : 6 ')

		}
	else  {
			alert('Enter the valid details')
			setCondition(false)
		}
	}

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
					keyboardType="visible-password"
					underlineColorAndroid="transparent"
					onChangeText={handlePassword}
				/>
			</View>

			<View style={styles.inputContainer}>
				<TextInput
					style={styles.inputs}
					placeholder="Confirm Password"
					secureTextEntry={true}
					underlineColorAndroid="transparent"
					onChangeText={handleCpassword}
				/>
			</View>

			<TouchableHighlight
				style={[styles.buttonContainer, styles.signupButton]}
				onPress={handleRegister}>
				<Text style={styles.signUpText}>Sign up</Text>
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
		backgroundColor: '#FFFFFF',
		borderRadius: 30,
		width: 250,
		height: 45,
		marginBottom: 20,
		flexDirection: 'row',
		alignItems: 'center',
	},
	inputs: {
		height: 45,
		marginLeft: 16,
		borderBottomColor: '#FFFFFF',
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
	signupButton: {
		backgroundColor: '#FF4DFF',
	},
	signUpText: {
		color: 'white',
	},
})

export default Register

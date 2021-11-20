import React from 'react'
import { Button, RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { View, Text , ImageBackground } from 'react-native';
import {COLORS,FONTS,icon, SIZES} from '../constants'


const image = {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjaR4E03C6ssbA68optP65XTIxI8pHfQDnz95QEp17HgJxTRMPOQ8uTvMGpa5nErgItkU&usqp=CAU"}

const homepage = () => {

    const navigation = useNavigation();

    return (

<View style={{flex:1}}>       



<ImageBackground source={image} resizeMode="cover" style={{flex: 1,
    justifyContent: "center"}}>




   


<Button
						style={{
							borderRadius: 15,
							padding: 8,
							backgroundColor: '#10b5a7',
							justifyContent: 'center',
						}}

						onPress= {() => {
                            navigation.navigate("Survey")
                        }}
						
						
						
						rounded>
						<Text
							style={{
								color: 'white',
								fontWeight:'bold',
								...FONTS.h3
							}}>
							GO TO SURVEY
						</Text>
					</Button>

                    </ImageBackground>
                    </View>

       
    )
}

export default homepage

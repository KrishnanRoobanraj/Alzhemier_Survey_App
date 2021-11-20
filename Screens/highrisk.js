import {COLORS,FONTS,icon, SIZES} from '../constants'
import { useNavigation } from '@react-navigation/core'
import { Button  } from 'react-native-paper';
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

const highrisk = () => {
    const Navigation = useNavigation();
    return (
        <ScrollView>
      <View style={{backgroundColor:'#e7e6ed',}}>

      <Text style={{...FONTS.body2,color:'#0509f0',textAlign:'left',alignContent:'flex-start',paddingTop:4}}>STEPS TO FOLLOW : </Text>


    <View style={{padding:4 , alignContent:'center',justifyContent:'center'}}>

    <Text style={{...FONTS.body2,color:COLORS.peach}}> Alzheimer's disease is not at preventable condition. However, a number of lifestyle risk factors for Alzheimer's can be modified. Evidence suggests that changes in diet, exercise and habits — steps to reduce the risk of cardiovascular disease — may also lower your risk of developing Alzheimer's disease and other disorders that cause dementia. Heart-healthy lifestyle choices that may reduce the risk of Alzheimer's include the following:</Text>


    <Text style={{...FONTS.body2,color:COLORS.black,padding:3}}>🔴 Exercising regularly</Text>

    <Text style={{...FONTS.body2,color:COLORS.black}}>🔴 Eating a diet of fresh produce, healthy oils and foods low in saturated fat such as a Mediterranean diet</Text>
  
    <Text style={{...FONTS.body2,color:COLORS.black}}>🔴 Following treatment guidelines to manage high blood pressure, diabetes and high cholesterol</Text>

    <Text style={{...FONTS.body2,color:COLORS.black}}>🔴 Asking your doctor for help to quit smoking if you smoke</Text>
  
    

    </View>
 

    <View style={{padding:12,alignContent:'center',alignItems:'center',justifyContent:'center'}}>


<Button
						style={{
							borderRadius: 15,
							padding: 10,
                            
							backgroundColor: '#10b5a7',
							justifyContent: 'center',
						}}

						onPress= {()=> Navigation.navigate("Home")}
						
						
						
						rounded>
						<Text
							style={{
								color: 'white',
								
								...FONTS.h3
							}}>
							EXIT
						</Text>
					</Button>

</View>





      </View>
      </ScrollView>  
    )
}

export default highrisk

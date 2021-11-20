import React from 'react'
import {  ScrollView, Text, View } from 'react-native'
import {COLORS,FONTS,icon, SIZES} from '../constants'
import { useNavigation } from '@react-navigation/core'
import { Button  } from 'react-native-paper';

const mediumrisk = () => {
    const Navigation = useNavigation();
    return (
        
<ScrollView>

      <View style={{backgroundColor:'#e7e6ed',}}>

      <Text style={{...FONTS.body2,color:COLORS.red,textAlign:'left',alignContent:'flex-start',paddingTop:4}}>STEPS TO FOLLOW : </Text>


    <View style={{padding:4 , alignContent:'center',justifyContent:'center'}}>

    <Text style={{...FONTS.body2,color:COLORS.black}}>🔴 Stay mentally active. Play board games, read, do crossword puzzles, play a musical instrument, do other hobbies that require “brain power.”</Text>

    <Text style={{...FONTS.body2,color:COLORS.black}}>🔴 Get physically active. Exercise increases blood flow and oxygen to the brain, which may directly affect brain cell health.</Text>
  
    <Text style={{...FONTS.body2,color:COLORS.black}}>🔴 Wear protective head gear if engaging in activities that increase the risk of a head injury.</Text>

    <Text style={{...FONTS.body2,color:COLORS.black}}>🔴  Stay socially active. Regularly talk with friends and family, join in on group activities (such as worship services, exercise classes, choir, book clubs)</Text>
  
    

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

export default mediumrisk

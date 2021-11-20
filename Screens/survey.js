import React, { useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import {COLORS,FONTS,icon, SIZES} from '../constants'
import { Button, RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';



const survey = () => {


    const navigation = useNavigation();
    const [radio1, setradio1] = useState('')
    const [radio2, setradio2] = useState('')
    const [radio3, setradio3] = useState('')
    const [radio4, setradio4] = useState('')
    const [radio5, setradio5] = useState('')

    const [radio6, setradio6] = useState('')
    const [radio7, setradio7] = useState('')
    const [radio8, setradio8] = useState('')
    const [radio9, setradio9] = useState('')
    const [radio10, setradio10] = useState('')

    const [radio11, setradio11] = useState('')
    const [radio12, setradio12] = useState('')
    const [radio13, setradio13] = useState('')
    const [radio14, setradio14] = useState('')
    const [radio15, setradio15] = useState('')


    // Each question value in state

    const [radio1v, setradio1v] = useState()
    const [radio2v, setradio2v] = useState()
    const [radio3v, setradio3v] = useState()
    const [radio4v, setradio4v] = useState()
    const [radio5v, setradio5v] = useState()

    const [radio6v, setradio6v] = useState()
    const [radio7v, setradio7v] = useState()
    const [radio8v, setradio8v] = useState()
    const [radio9v, setradio9v] = useState()
    const [radio10v, setradio10v] = useState()

    const [radio11v, setradio11v] = useState()
    const [radio12v, setradio12v] = useState()
    const [radio13v, setradio13v] = useState()
    const [radio14v, setradio14v] = useState()
    const [radio15v, setradio15v] = useState()





    




    const q1r1 = ( ) => {
        setradio1('first')       // => 1. always = 4 , 2.never = 1 , 3.Not frequent = 3 , 4.sometimes=2 
        setradio1v(4)
   }
    const q1r2 = ( ) => {                                       
        setradio1('second')                    //Question 1
        setradio1v(1)
    }
    const q1r3 = ( ) => {
        setradio1('third')
        setradio1v(3)
    }
    const q1r4 = ( ) => {
        setradio1('fourth')
        setradio1v(2)
    }



    
    const q2r1 = ( ) => {
        setradio2('first')
        setradio2v(4)
        }
    const q2r2 = ( ) => {
        setradio2('second')                                       //Question 2
        setradio2v(1)
    }
    const q2r3 = ( ) => {
        setradio2('third')
        setradio2v(3)
    }
    const q2r4 = ( ) => {
        setradio2('fourth')
        setradio2v(2)
    }



    const q3r1 = ( ) => {
        setradio3('first') 
        setradio3v(4)   
    }
    const q3r2 = ( ) => {
        setradio3('second')   
        setradio3v(1)                                    //Question 3
    }
   const q3r3 = ( ) => {
        setradio3('third')
        setradio3v(3)
    }
    const q3r4 = ( ) => {
        setradio3('fourth')
        setradio3v(2)
    }



    const q4r1 = ( ) => {
        setradio4('first')  
        setradio4v(4)  
    }
    const q4r2 = ( ) => {
        setradio4('second')                                       //Question 4
        setradio4v(1)
    }
   const q4r3 = ( ) => {
        setradio4('third')
        setradio4v(3)
    }
    const q4r4 = ( ) => {
        setradio4('fourth')
        setradio4v(2)
    }


    
    const q5r1 = ( ) => {
        setradio5('first')    
        setradio5v(4)
    }
    const q5r2 = ( ) => {
        setradio5('second')    
        setradio5v(1)                                   //Question 5
    }
   const q5r3 = ( ) => {
        setradio5('third')
        setradio5v(3)
    }
    const q5r4 = ( ) => {
        setradio5('fourth')
        setradio5v(2)
    }


    const q6r1 = ( ) => {
        setradio6('first')  
        setradio6v(4)  
    }
    const q6r2 = ( ) => {
        setradio6('second')                                       //Question 6
        setradio6v(1)
    }
   const q6r3 = ( ) => {
        setradio6('third')
        setradio6v(3)
    }
    const q6r4 = ( ) => {
        setradio6('fourth')
        setradio6v(2)
    }

    const q7r1 = ( ) => {
        setradio7('first')    
        setradio7v(4)
    }
    const q7r2 = ( ) => {
        setradio7('second')                                       //Question 7
        setradio7v(1)
    }
   const q7r3 = ( ) => {
        setradio7('third')
        setradio7v(3)
    }
    const q7r4 = ( ) => {
        setradio7('fourth')
        setradio7v(2)
    }

    const q8r1 = ( ) => {
        setradio8('first')    
        setradio8v(4)
    }
    const q8r2 = ( ) => {
        setradio8('second') 
        setradio8v(1)                                    //Question 8
    }
   const q8r3 = ( ) => {
        setradio8('third')
        setradio8v(3)
    }
    const q8r4 = ( ) => {
        setradio8('fourth')
        setradio8v(2)
    }

    const q9r1 = ( ) => {
        setradio9('first') 
        setradio9v(4)   
    }
    const q9r2 = ( ) => {
        setradio9('second')   
        setradio9v(1)                                       //Question 9
    }
   const q9r3 = ( ) => {
        setradio9('third')
        setradio9v(3)   
    }
    const q9r4 = ( ) => {
        setradio9('fourth')
        setradio9v(2)   
    }

    const q10r1 = ( ) => {
        setradio10('first')   
        setradio10v(4) 
    }
    const q10r2 = ( ) => {
        setradio10('second')    
        setradio10v(1)                                   //Question 10
    }
   const q10r3 = ( ) => {
        setradio10('third')
        setradio10v(3)
    }
    const q10r4 = ( ) => {
        setradio10('fourth')
        setradio10v(2)
    }

    const q11r1 = ( ) => {
        setradio11('first')   
        setradio11v(4)  
    }
    const q11r2 = ( ) => {
        setradio11('second')  
        setradio11v(1)                                     //Question 11
    }
   const q11r3 = ( ) => {
        setradio11('third')
        setradio11v(3)
    }
    const q11r4 = ( ) => {
        setradio11('fourth')
        setradio11v(2)
    }

    const q12r1 = ( ) => {
        setradio12('first') 
        setradio12v(4)  
    }
    const q12r2 = ( ) => {
        setradio12('second')
        setradio12v(1)                                      //Question 12
    }
   const q12r3 = ( ) => {
        setradio12('third')
        setradio12v(3)
    }
    const q12r4 = ( ) => {
        setradio12('fourth')
        setradio12v(2)
    }

    const q13r1 = ( ) => {
        setradio13('first')
        setradio13v(4)     
    }
    const q13r2 = ( ) => {
        setradio13('second') 
        setradio13v(1)                                        //Question 13
    }
   const q13r3 = ( ) => {
        setradio13('third')
        setradio13v(3)  
    }
    const q13r4 = ( ) => {
        setradio13('fourth')
        setradio13v(2)  
    }

    const q14r1 = ( ) => {
        setradio14('first')    
        setradio14v(4)
    }
    const q14r2 = ( ) => {
        setradio14('second')   
        setradio14v(1)                                    //Question 14
    }
   const q14r3 = ( ) => {
        setradio14('third')
        setradio14v(3)
    }
    const q14r4 = ( ) => {
        setradio14('fourth')
        setradio14v(2)
    }

    const q15r1 = ( ) => {
        setradio15('first')  
        setradio15v(4)  
    }
    const q15r2 = ( ) => {
        setradio15('second')   
        setradio15v(1)                                    //Question 15
    }
   const q15r3 = ( ) => {
        setradio15('third')
        setradio15v(3)
    }
    const q15r4 = ( ) => {
        setradio15('fourth')
        setradio15v(2)
    }


const submit = () => {


    if(radio15 === '' || radio14 === '' || radio13 === '' || radio12 ==='' || radio11 ==='' || radio10 === '' || radio9 === '' || radio8 ==='' || radio7 === '' || radio6 ==='' || radio5 ==='' || radio4 === '' || radio3 === '' || radio2 ==='' || radio1 ==='' ){ 
        savesnack()
    }else{
        result();
    }



   
}

const savesnack = () => {

    Snackbar.show({

        text: 'Please Fill in all the Fields',
        duration: Snackbar.LENGTH_LONG,
       

    })

}




const result = () => {


    let tv = radio1v+radio2v+radio3v+radio4v+radio5v+radio6v+radio7v+radio8v+radio9v+radio10v+radio11v+radio12v+radio13v+radio14v+radio15v
     console.log("ans",tv)

     if (tv<=20){
         Alert.alert('Your Risk Rate is : "LOW" ' , 'All Fine , Stay Healthy ', 
         [{text:'Done',onPress: () =>navigation.navigate("Home")}],

         
         
         )
         }  else if (tv<=40 && tv>=20) {
            Alert.alert('Your Risk Rate is : "MODERATE" ' , 'Click "next" to see guidelines ', 
            [{text:'Next',onPress: () =>navigation.navigate("mediumrisk")}],
   
           
            
            )

        }  
     
        else if (tv<=60 && tv>=40) {
            Alert.alert('Your Risk Rate is : "HIGH" ' , 'Click "next" to see guidelines ', 
            [{text:'Next',onPress: () =>navigation.navigate("highrisk")}],
   
           
            
            )

        }  

     
     
     else{
         console.log("none")
     }

}



    return (

 

        <View style={{flex:1,backgroundColor:'#e7e6ed'}}>



    <View style={{alignContent:'center',justifyContent:'center',padding:20,marginTop:15,paddingHorizontal:24,backgroundColor:'#eddcbe'}}>

        <Text style={{fontSize:13,fontWeight:'bold',color:'#0f0f0f'}}>PLEASE FILL OUT ALL THE ANSWERS WITHOUT FAIL</Text>

    </View>  

    <ScrollView>

          {/* 1. Side Heading  */}

    <View style={{alignContent:'center',padding:10,paddingHorizontal:20,justifyContent:'center',backgroundColor:'#ffffff',marginTop:15}}>

       <Text style={{fontWeight:'bold',color:'#1212de',...FONTS.h3}}>MEMORY :</Text> 
       <Text style ={{color:COLORS.darkgray,...FONTS.body4}} >To check the memory capacity.</Text>

    </View>

     {/*  Questions 1 with the Options */}

  <View style={{marginTop:15,alignItems:'center',alignContent:'center',justifyContent:'center',backgroundColor:'#ddf0ee',padding:3,...styles.shadow}}>

  <Text style={{color:'#0f0f0f',alignContent:'flex-start',alignItems:'flex-start',fontWeight:'900',...FONTS.body3}}>1) Do You repeat questions OR statements OR stories {'\n'}    in the same day?</Text>

  <View style={{flexDirection:"row" ,alignContent:'flex-start',justifyContent:'flex-start',alignItems:'flex-start',padding:3}}>

  <View style={{flexDirection:"row" ,paddingHorizontal:55}}>
<RadioButton
       
       value="first"
       status={ radio1 === 'first' ? 'checked' : 'unchecked' }
       onPress = {q1r1}

   />
     <Text style={{fontSize:17 ,marginTop:4 }}>Always</Text>
</View>

   <View style={{flexDirection:"row" ,paddingHorizontal:109}}>
     <RadioButton
    
       value="second"
       status={ radio1 === 'second' ? 'checked' : 'unchecked' }
       onPress = {q1r2}

   
     />
      <Text style={{fontSize:17 ,marginTop:4 }}>Never</Text>
      </View>


</View>


<View style={{flexDirection:"row" ,justifyContent:'center'}}>

  
<View style={{flexDirection:"row" ,paddingHorizontal:70}}>  
 <RadioButton
       
       value="third"
       status={ radio1 === 'third' ? 'checked' : 'unchecked' }
       onPress = {q1r3}

   />
     <Text style={{fontSize:17 ,marginTop:4 }}>Not Frequently</Text>
      </View>

      <View style={{flexDirection:"row" ,paddingHorizontal:39}}>  
     <RadioButton
     
       value="fourth"
       status={ radio1 === 'fourth' ? 'checked' : 'unchecked' }
       onPress = {q1r4}

   
     />

       <Text style={{fontSize:17 ,  marginTop:4 }}>sometimes</Text>  
       </View>



</View>


  </View>

  

{/* 2. Questions 2  with the Options */}

<View style={{marginTop:15,alignItems:'center',alignContent:'center',justifyContent:'center',backgroundColor:'#ddf0ee',padding:3,...styles.shadow}}>

<Text style={{color:'#0f0f0f',alignContent:'flex-start',alignItems:'flex-start',fontWeight:'900',...FONTS.body3}}>2) Do you become disoriented in unfamiliar places ?</Text>

<View style={{flexDirection:"row" ,alignContent:'flex-start',justifyContent:'flex-start',alignItems:'flex-start',padding:3}}>

<View style={{flexDirection:"row" ,paddingHorizontal:55}}>
<RadioButton

value="first"
status={ radio2 === 'first' ? 'checked' : 'unchecked' }
onPress = {q2r1}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Always</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:109}}>
<RadioButton

value="second"
status={ radio2 === 'second' ? 'checked' : 'unchecked' }
onPress = {q2r2}


/>
<Text style={{fontSize:17 ,marginTop:4 }}>Never</Text>
</View>


</View>


<View style={{flexDirection:"row" ,justifyContent:'center'}}>


<View style={{flexDirection:"row" ,paddingHorizontal:70}}>  
<RadioButton

value="third"
status={ radio2 === 'third' ? 'checked' : 'unchecked' }
onPress = {q2r3}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Not Frequently</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:39}}>  
<RadioButton

value="fourth"
status={ radio2 === 'fourth' ? 'checked' : 'unchecked' }
onPress = {q2r4}


/>

<Text style={{fontSize:17 ,  marginTop:4 }}>sometimes</Text>  
</View>

</View>


</View>





{/* 2. Questions 3  with the Options */}

<View style={{backgroundColor:'#ddf0ee',marginTop:15,...styles.shadow}}>

<View style={{alignContent:'flex-start',alignItems:'flex-start',justifyContent:'flex-start'}}> 
<Text style={{color:'#0f0f0f',alignContent:'flex-start',alignItems:'flex-start',fontWeight:'900',...FONTS.body3}}> 3) Do you forget appointments very easily?</Text>
</View>

<View style={{alignItems:'center',alignContent:'center',justifyContent:'center',padding:3}}>

<View style={{flexDirection:"row" ,alignContent:'flex-start',justifyContent:'flex-start',alignItems:'flex-start',padding:3}}>

<View style={{flexDirection:"row" ,paddingHorizontal:55}}>
<RadioButton
value="first"
status={ radio3 === 'first' ? 'checked' : 'unchecked' }
onPress = {q3r1}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Always</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:109}}>
<RadioButton

value="second"
status={ radio3 === 'second' ? 'checked' : 'unchecked' }
onPress = {q3r2}


/>
<Text style={{fontSize:17 ,marginTop:4 }}>Never</Text>
</View>


</View>


<View style={{flexDirection:"row" ,justifyContent:'center'}}>


<View style={{flexDirection:"row" ,paddingHorizontal:70}}>  
<RadioButton

value="third"
status={ radio3 === 'third' ? 'checked' : 'unchecked' }
onPress = {q3r3}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Not Frequently</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:39}}>  
<RadioButton

value="fourth"
status={ radio3 === 'fourth' ? 'checked' : 'unchecked' }
onPress = {q3r4}


/>

<Text style={{fontSize:17 ,  marginTop:4 }}>sometimes</Text>  
</View>

</View>


</View>

</View>


{/* 2. Questions 4 with the Options */}



<View style={{backgroundColor:'#ddf0ee',marginTop:15,...styles.shadow}}>

<View style={{alignContent:'flex-start',alignItems:'flex-start',justifyContent:'flex-start'}}> 
<Text style={{color:'#0f0f0f',alignContent:'flex-start',alignItems:'flex-start',fontWeight:'900',...FONTS.body3}}> 4) Do You misplace objects so that you cannot find {'\n'}     them?</Text>
</View>

<View style={{alignItems:'center',alignContent:'center',justifyContent:'center',padding:3}}>

<View style={{flexDirection:"row" ,alignContent:'flex-start',justifyContent:'flex-start',alignItems:'flex-start',padding:3}}>

<View style={{flexDirection:"row" ,paddingHorizontal:55}}>
<RadioButton
value="first"
status={ radio4 === 'first' ? 'checked' : 'unchecked' }
onPress = {q4r1}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Always</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:109}}>
<RadioButton

value="second"
status={ radio4 === 'second' ? 'checked' : 'unchecked' }
onPress = {q4r2}


/>
<Text style={{fontSize:17 ,marginTop:4 }}>Never</Text>
</View>


</View>


<View style={{flexDirection:"row" ,justifyContent:'center'}}>


<View style={{flexDirection:"row" ,paddingHorizontal:70}}>  
<RadioButton

value="third"
status={ radio4 === 'third' ? 'checked' : 'unchecked' }
onPress = {q4r3}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Not Frequently</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:39}}>  
<RadioButton

value="fourth"
status={ radio4 === 'fourth' ? 'checked' : 'unchecked' }
onPress = {q4r4}


/>

<Text style={{fontSize:17 ,  marginTop:4 }}>sometimes</Text>  
</View>

</View>


</View>

</View>

{/* 2. Questions 5  with the Options */}



<View style={{backgroundColor:'#ddf0ee',marginTop:15,...styles.shadow}}>

<View style={{alignContent:'flex-start',alignItems:'flex-start',justifyContent:'flex-start'}}> 
<Text style={{color:'#0f0f0f',alignContent:'flex-start',alignItems:'flex-start',fontWeight:'900',...FONTS.body3}}> 5) Do You frequently have trouble knowing the day, {'\n'}     date, month, year, and time?</Text>
</View>

<View style={{alignItems:'center',alignContent:'center',justifyContent:'center',padding:3}}>

<View style={{flexDirection:"row" ,alignContent:'flex-start',justifyContent:'flex-start',alignItems:'flex-start',padding:3}}>

<View style={{flexDirection:"row" ,paddingHorizontal:55}}>
<RadioButton
value="first"
status={ radio5 === 'first' ? 'checked' : 'unchecked' }
onPress = {q5r1}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Always</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:109}}>
<RadioButton

value="second"
status={ radio5 === 'second' ? 'checked' : 'unchecked' }
onPress = {q5r2}


/>
<Text style={{fontSize:17 ,marginTop:4 }}>Never</Text>
</View>


</View>


<View style={{flexDirection:"row" ,justifyContent:'center'}}>


<View style={{flexDirection:"row" ,paddingHorizontal:70}}>  
<RadioButton

value="third"
status={ radio5 === 'third' ? 'checked' : 'unchecked' }
onPress = {q5r3}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Not Frequently</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:39}}>  
<RadioButton

value="fourth"
status={ radio5 === 'fourth' ? 'checked' : 'unchecked' }
onPress = {q5r4}


/>

<Text style={{fontSize:17 ,  marginTop:4 }}>sometimes</Text>  
</View>

</View>


</View>

</View>



{/* 2.SECOND TOPIC : FUNCTIONALITY */}

<View style={{alignContent:'center',padding:10,paddingHorizontal:20,justifyContent:'center',backgroundColor:'#ffffff',marginTop:15}}>

<Text style={{fontWeight:'bold',color:'#1212de',...FONTS.h3}}>FUNCTIONAL ABILITY:</Text> 
<Text style ={{color:COLORS.darkgray,...FONTS.body4}} >To check the day to day functionalities of the people.</Text>

</View>


{/*6 Questions 6  with the Options */}



<View style={{backgroundColor:'#ddf0ee',marginTop:15,...styles.shadow}}>

<View style={{alignContent:'flex-start',alignItems:'flex-start',justifyContent:'flex-start'}}> 
<Text style={{color:'#0f0f0f',alignContent:'flex-start',alignItems:'flex-start',fontWeight:'900',...FONTS.body3}}> 6) Do you have trouble paying bills or doing finances?</Text>
</View>

<View style={{alignItems:'center',alignContent:'center',justifyContent:'center',padding:3}}>

<View style={{flexDirection:"row" ,alignContent:'flex-start',justifyContent:'flex-start',alignItems:'flex-start',padding:3}}>

<View style={{flexDirection:"row" ,paddingHorizontal:55}}>
<RadioButton
value="first"
status={ radio6 === 'first' ? 'checked' : 'unchecked' }
onPress = {q6r1}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Always</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:109}}>
<RadioButton

value="second"
status={ radio6 === 'second' ? 'checked' : 'unchecked' }
onPress = {q6r2}


/>
<Text style={{fontSize:17 ,marginTop:4 }}>Never</Text>
</View>


</View>


<View style={{flexDirection:"row" ,justifyContent:'center'}}>


<View style={{flexDirection:"row" ,paddingHorizontal:70}}>  
<RadioButton

value="third"
status={ radio6 === 'third' ? 'checked' : 'unchecked' }
onPress = {q6r3}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Not Frequently</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:39}}>  
<RadioButton

value="fourth"
status={ radio6 === 'fourth' ? 'checked' : 'unchecked' }
onPress = {q6r4}


/>

<Text style={{fontSize:17 ,  marginTop:4 }}>sometimes</Text>  
</View>

</View>


</View>

</View>

{/*  Questions 7  with the Options */}



<View style={{backgroundColor:'#ddf0ee',marginTop:15,...styles.shadow}}>

<View style={{alignContent:'flex-start',alignItems:'flex-start',justifyContent:'flex-start'}}> 
<Text style={{color:'#0f0f0f',alignContent:'flex-start',alignItems:'flex-start',fontWeight:'900',...FONTS.body3}}> 7) Excluding Physical Limitations, Do you have  {'\n'}     difficulty in driving?</Text>
</View>

<View style={{alignItems:'center',alignContent:'center',justifyContent:'center',padding:3}}>

<View style={{flexDirection:"row" ,alignContent:'flex-start',justifyContent:'flex-start',alignItems:'flex-start',padding:3}}>

<View style={{flexDirection:"row" ,paddingHorizontal:55}}>
<RadioButton
value="first"
status={ radio7 === 'first' ? 'checked' : 'unchecked' }
onPress = {q7r1}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Always</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:109}}>
<RadioButton

value="second"
status={ radio7 === 'second' ? 'checked' : 'unchecked' }
onPress = {q7r2}


/>
<Text style={{fontSize:17 ,marginTop:4 }}>Never</Text>
</View>


</View>


<View style={{flexDirection:"row" ,justifyContent:'center'}}>


<View style={{flexDirection:"row" ,paddingHorizontal:70}}>  
<RadioButton

value="third"
status={ radio7 === 'third' ? 'checked' : 'unchecked' }
onPress = {q7r3}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Not Frequently</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:39}}>  
<RadioButton

value="fourth"
status={ radio7 === 'fourth' ? 'checked' : 'unchecked' }
onPress = {q7r4}


/>

<Text style={{fontSize:17 ,  marginTop:4 }}>sometimes</Text>  
</View>

</View>


</View>

</View>



{/*  Questions 8  with the Options */}



<View style={{backgroundColor:'#ddf0ee',marginTop:15,...styles.shadow}}>

<View style={{alignContent:'flex-start',alignItems:'flex-start',justifyContent:'flex-start'}}> 
<Text style={{color:'#0f0f0f',alignContent:'flex-start',alignItems:'flex-start',fontWeight:'900',...FONTS.body3}}> 8) Do you have trouble using appliances (e.g., {'\n'}     microwave, oven, stove, remote control, telephone, {'\n'}     alarm clock)?</Text>
</View>

<View style={{alignItems:'center',alignContent:'center',justifyContent:'center',padding:3}}>

<View style={{flexDirection:"row" ,alignContent:'flex-start',justifyContent:'flex-start',alignItems:'flex-start',padding:3}}>

<View style={{flexDirection:"row" ,paddingHorizontal:55}}>
<RadioButton
value="first"
status={ radio8 === 'first' ? 'checked' : 'unchecked' }
onPress = {q8r1}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Always</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:109}}>
<RadioButton

value="second"
status={ radio8 === 'second' ? 'checked' : 'unchecked' }
onPress = {q8r2}


/>
<Text style={{fontSize:17 ,marginTop:4 }}>Never</Text>
</View>


</View>


<View style={{flexDirection:"row" ,justifyContent:'center'}}>


<View style={{flexDirection:"row" ,paddingHorizontal:70}}>  
<RadioButton

value="third"
status={ radio8 === 'third' ? 'checked' : 'unchecked' }
onPress = {q8r3}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Not Frequently</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:39}}>  
<RadioButton

value="fourth"
status={ radio8 === 'fourth' ? 'checked' : 'unchecked' }
onPress = {q8r4}


/>

<Text style={{fontSize:17 ,  marginTop:4 }}>sometimes</Text>  
</View>

</View>


</View>

</View>



{/*  Questions 9  with the Options */}



<View style={{backgroundColor:'#ddf0ee',marginTop:15,...styles.shadow}}>

<View style={{alignContent:'flex-start',alignItems:'flex-start',justifyContent:'flex-start'}}> 
<Text style={{color:'#0f0f0f',alignContent:'flex-start',alignItems:'flex-start',fontWeight:'900',...FONTS.body3}}> 9) Do you have trouble handling money (tips or {'\n'}      calculating change?)</Text>
</View>

<View style={{alignItems:'center',alignContent:'center',justifyContent:'center',padding:3}}>

<View style={{flexDirection:"row" ,alignContent:'flex-start',justifyContent:'flex-start',alignItems:'flex-start',padding:3}}>

<View style={{flexDirection:"row" ,paddingHorizontal:55}}>
<RadioButton
value="first"
status={ radio9 === 'first' ? 'checked' : 'unchecked' }
onPress = {q9r1}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Always</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:109}}>
<RadioButton

value="second"
status={ radio9 === 'second' ? 'checked' : 'unchecked' }
onPress = {q9r2}


/>
<Text style={{fontSize:17 ,marginTop:4 }}>Never</Text>
</View>


</View>


<View style={{flexDirection:"row" ,justifyContent:'center'}}>


<View style={{flexDirection:"row" ,paddingHorizontal:70}}>  
<RadioButton

value="third"
status={ radio9 === 'third' ? 'checked' : 'unchecked' }
onPress = {q9r3}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Not Frequently</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:39}}>  
<RadioButton

value="fourth"
status={ radio9 === 'fourth' ? 'checked' : 'unchecked' }
onPress = {q9r4}


/>

<Text style={{fontSize:17 ,  marginTop:4 }}>sometimes</Text>  
</View>

</View>


</View>

</View>


{/*  Questions 10  with the Options */}



<View style={{backgroundColor:'#ddf0ee',marginTop:15,...styles.shadow}}>

<View style={{alignContent:'flex-start',alignItems:'flex-start',justifyContent:'flex-start'}}> 
<Text style={{color:'#0f0f0f',alignContent:'flex-start',alignItems:'flex-start',fontWeight:'900',...FONTS.body3}}> 10) Excluding physical limitations, Do you have {'\n'}       difficulty in completing home repair or other home {'\n'}       related tasks such as (housekeeping)   ? </Text>
</View>

<View style={{alignItems:'center',alignContent:'center',justifyContent:'center',padding:3}}>

<View style={{flexDirection:"row" ,alignContent:'flex-start',justifyContent:'flex-start',alignItems:'flex-start',padding:3}}>

<View style={{flexDirection:"row" ,paddingHorizontal:55}}>
<RadioButton
value="first"
status={ radio10 === 'first' ? 'checked' : 'unchecked' }
onPress = {q10r1}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Always</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:109}}>
<RadioButton

value="second"
status={ radio10 === 'second' ? 'checked' : 'unchecked' }
onPress = {q10r2}


/>
<Text style={{fontSize:17 ,marginTop:4 }}>Never</Text>
</View>


</View>


<View style={{flexDirection:"row" ,justifyContent:'center'}}>


<View style={{flexDirection:"row" ,paddingHorizontal:70}}>  
<RadioButton

value="third"
status={ radio10 === 'third' ? 'checked' : 'unchecked' }
onPress = {q10r3}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Not Frequently</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:39}}>  
<RadioButton

value="fourth"
status={ radio10 === 'fourth' ? 'checked' : 'unchecked' }
onPress = {q10r4}


/>

<Text style={{fontSize:17 ,  marginTop:4 }}>sometimes</Text>  
</View>

</View>


</View>

</View>


{/* 2.THIRD TOPIC : Visuospatial */}

<View style={{alignContent:'center',padding:10,paddingHorizontal:20,justifyContent:'center',backgroundColor:'#ffffff',marginTop:15}}>

<Text style={{fontWeight:'bold',color:'#1212de',...FONTS.h3}}>Visuospatial:</Text> 
<Text style ={{color:COLORS.darkgray,...FONTS.body4}} >Relating to or denoting the visual perception of the spatial relationships of objects.</Text>

</View>



{/*  Questions 11  with the Options */}



<View style={{backgroundColor:'#ddf0ee',marginTop:15,...styles.shadow}}>

<View style={{alignContent:'flex-start',alignItems:'flex-start',justifyContent:'flex-start'}}> 
<Text style={{color:'#0f0f0f',alignContent:'flex-start',alignItems:'flex-start',fontWeight:'900',...FONTS.body3}}> 11) Do you get lost in familiar surroundings {'\n'}       (own neighborhood)    ?</Text>
</View>

<View style={{alignItems:'center',alignContent:'center',justifyContent:'center',padding:3}}>

<View style={{flexDirection:"row" ,alignContent:'flex-start',justifyContent:'flex-start',alignItems:'flex-start',padding:3}}>

<View style={{flexDirection:"row" ,paddingHorizontal:55}}>
<RadioButton
value="first"
status={ radio11 === 'first' ? 'checked' : 'unchecked' }
onPress = {q11r1}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Always</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:109}}>
<RadioButton

value="second"
status={ radio11 === 'second' ? 'checked' : 'unchecked' }
onPress = {q11r2}


/>
<Text style={{fontSize:17 ,marginTop:4 }}>Never</Text>
</View>


</View>


<View style={{flexDirection:"row" ,justifyContent:'center'}}>


<View style={{flexDirection:"row" ,paddingHorizontal:70}}>  
<RadioButton

value="third"
status={ radio11 === 'third' ? 'checked' : 'unchecked' }
onPress = {q11r3}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Not Frequently</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:39}}>  
<RadioButton

value="fourth"
status={ radio11 === 'fourth' ? 'checked' : 'unchecked' }
onPress = {q11r4}


/>

<Text style={{fontSize:17 ,  marginTop:4 }}>sometimes</Text>  
</View>

</View>


</View>

</View>



{/*  Questions 12  with the Options */}



<View style={{backgroundColor:'#ddf0ee',marginTop:15,...styles.shadow}}>

<View style={{alignContent:'flex-start',alignItems:'flex-start',justifyContent:'flex-start'}}> 
<Text style={{color:'#0f0f0f',alignContent:'flex-start',alignItems:'flex-start',fontWeight:'900',...FONTS.h3}}> 12) Do You have a decreased sense of direction? </Text>
</View>

<View style={{alignItems:'center',alignContent:'center',justifyContent:'center',padding:3}}>

<View style={{flexDirection:"row" ,alignContent:'flex-start',justifyContent:'flex-start',alignItems:'flex-start',padding:3}}>

<View style={{flexDirection:"row" ,paddingHorizontal:55}}>
<RadioButton
value="first"
status={ radio12 === 'first' ? 'checked' : 'unchecked' }
onPress = {q12r1}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Always</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:109}}>
<RadioButton

value="second"
status={ radio12 === 'second' ? 'checked' : 'unchecked' }
onPress = {q12r2}


/>
<Text style={{fontSize:17 ,marginTop:4 }}>Never</Text>
</View>


</View>


<View style={{flexDirection:"row" ,justifyContent:'center'}}>


<View style={{flexDirection:"row" ,paddingHorizontal:70}}>  
<RadioButton

value="third"
status={ radio12 === 'third' ? 'checked' : 'unchecked' }
onPress = {q12r3}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Not Frequently</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:39}}>  
<RadioButton

value="fourth"
status={ radio12 === 'fourth' ? 'checked' : 'unchecked' }
onPress = {q12r4}


/>

<Text style={{fontSize:17 ,  marginTop:4 }}>sometimes</Text>  
</View>

</View>


</View>

</View>



{/* THIRD TOPIC : Languages */}

<View style={{alignContent:'center',padding:10,paddingHorizontal:20,justifyContent:'center',backgroundColor:'#ffffff',marginTop:15}}>

<Text style={{fontWeight:'bold',color:'#1212de',...FONTS.h3}}>LANGUAGE:</Text> 
<Text style ={{color:COLORS.darkgray,...FONTS.body4}} >To Recognize the language you speack with your surroundings</Text>

</View>


{/*  Questions 13  with the Options */}



<View style={{backgroundColor:'#ddf0ee',marginTop:15,...styles.shadow}}>

<View style={{alignContent:'flex-start',alignItems:'flex-start',justifyContent:'flex-start'}}> 
<Text style={{color:'#0f0f0f',alignContent:'flex-start',alignItems:'flex-start',fontWeight:'900',...FONTS.body3}}> 13) Does the patient have trouble finding words other {'\n'}       than names?</Text>
</View>

<View style={{alignItems:'center',alignContent:'center',justifyContent:'center',padding:3}}>

<View style={{flexDirection:"row" ,alignContent:'flex-start',justifyContent:'flex-start',alignItems:'flex-start',padding:3}}>

<View style={{flexDirection:"row" ,paddingHorizontal:55}}>
<RadioButton
value="first"
status={ radio13 === 'first' ? 'checked' : 'unchecked' }
onPress = {q13r1}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Always</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:109}}>
<RadioButton

value="second"
status={ radio13 === 'second' ? 'checked' : 'unchecked' }
onPress = {q13r2}


/>
<Text style={{fontSize:17 ,marginTop:4 }}>Never</Text>
</View>


</View>


<View style={{flexDirection:"row" ,justifyContent:'center'}}>


<View style={{flexDirection:"row" ,paddingHorizontal:70}}>  
<RadioButton

value="third"
status={ radio13 === 'third' ? 'checked' : 'unchecked' }
onPress = {q13r3}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Not Frequently</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:39}}>  
<RadioButton

value="fourth"
status={ radio13 === 'fourth' ? 'checked' : 'unchecked' }
onPress = {q13r4}


/>

<Text style={{fontSize:17 ,  marginTop:4 }}>sometimes</Text>  
</View>

</View>


</View>

</View>






{/*  Questions 14  with the Options */}



<View style={{backgroundColor:'#ddf0ee',marginTop:15,...styles.shadow}}>

<View style={{alignContent:'flex-start',alignItems:'flex-start',justifyContent:'flex-start'}}> 
<Text style={{color:'#0f0f0f',alignContent:'flex-start',alignItems:'flex-start',fontWeight:'900',...FONTS.body3}}> 14) Do You confuse names of family members or {'\n'}      friends?</Text>
</View>

<View style={{alignItems:'center',alignContent:'center',justifyContent:'center',padding:3}}>

<View style={{flexDirection:"row" ,alignContent:'flex-start',justifyContent:'flex-start',alignItems:'flex-start',padding:3}}>

<View style={{flexDirection:"row" ,paddingHorizontal:55}}>
<RadioButton
value="first"
status={ radio14 === 'first' ? 'checked' : 'unchecked' }
onPress = {q14r1}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Always</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:109}}>
<RadioButton

value="second"
status={ radio14 === 'second' ? 'checked' : 'unchecked' }
onPress = {q14r2}


/>
<Text style={{fontSize:17 ,marginTop:4 }}>Never</Text>
</View>


</View>


<View style={{flexDirection:"row" ,justifyContent:'center'}}>


<View style={{flexDirection:"row" ,paddingHorizontal:70}}>  
<RadioButton

value="third"
status={ radio14 === 'third' ? 'checked' : 'unchecked' }
onPress = {q14r3}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Not Frequently</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:39}}>  
<RadioButton

value="fourth"
status={ radio14 === 'fourth' ? 'checked' : 'unchecked' }
onPress = {q14r4}


/>

<Text style={{fontSize:17 ,  marginTop:4 }}>sometimes</Text>  
</View>

</View>


</View>

</View>

{/*  Questions 15  with the Options */}



<View style={{backgroundColor:'#ddf0ee',marginTop:15,...styles.shadow}}>

<View style={{alignContent:'flex-start',alignItems:'flex-start',justifyContent:'flex-start'}}> 
<Text style={{color:'#0f0f0f',alignContent:'flex-start',alignItems:'flex-start',fontWeight:'900',...FONTS.body3}}> 15) Do You have difficulty recognizing people familiar {'\n'}      to your surroundings? </Text>
</View>

<View style={{alignItems:'center',alignContent:'center',justifyContent:'center',padding:3}}>

<View style={{flexDirection:"row" ,alignContent:'flex-start',justifyContent:'flex-start',alignItems:'flex-start',padding:3}}>

<View style={{flexDirection:"row" ,paddingHorizontal:55}}>
<RadioButton
value="first"
status={ radio15 === 'first' ? 'checked' : 'unchecked' }
onPress = {q15r1}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Always</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:109}}>
<RadioButton

value="second"
status={ radio15 === 'second' ? 'checked' : 'unchecked' }
onPress = {q15r2}


/>
<Text style={{fontSize:17 ,marginTop:4 }}>Never</Text>
</View>


</View>


<View style={{flexDirection:"row" ,justifyContent:'center'}}>


<View style={{flexDirection:"row" ,paddingHorizontal:70}}>  
<RadioButton

value="third"
status={ radio15 === 'third' ? 'checked' : 'unchecked' }
onPress = {q15r3}

/>
<Text style={{fontSize:17 ,marginTop:4 }}>Not Frequently</Text>
</View>

<View style={{flexDirection:"row" ,paddingHorizontal:39}}>  
<RadioButton

value="fourth"
status={ radio15 === 'fourth' ? 'checked' : 'unchecked' }
onPress = {q15r4}


/>

<Text style={{fontSize:17 ,  marginTop:4 }}>sometimes</Text>  
</View>

</View>


</View>

</View>



<View style={{padding:12,alignContent:'center',alignItems:'center',justifyContent:'center'}}>


<Button
						style={{
							borderRadius: 15,
							padding: 10,
							backgroundColor: '#10b5a7',
							justifyContent: 'center',
						}}

						onPress= {submit}
						
						
						
						rounded>
						<Text
							style={{
								color: 'white',
								
								...FONTS.h3
							}}>
							SUBMIT
						</Text>
					</Button>

</View>










</ScrollView>

      </View>


    

    )
}

export default survey


const styles =  StyleSheet.create({
    shadow: {
        elevation:3
    }


})
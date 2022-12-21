import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View,FlatList, Pressable, Image } from 'react-native';

export default function App() {




  const data = [
  { id:1,
    name: "Slack",
    time:'ghfvsabjndkmcscm',
    yaddas:'339',
    status:'update'

   
  },
   {id:2,
    name: "Facebook",
    time:'eeced,;',
    yaddas:'389',
    status:'open'
   
  },
  {id:3,
    name: "Expo Go",
    time:'esff',
    yaddas:'955',
    status:'update'
   
  },
  {id:4,
    name: "Azercell",
    time:'kfjna',
    yaddas:'24',
    status:'open'
   
  },
  {id:5,
    name: "Slack",
    time:'ghfvsabjndkmcscm',
    yaddas:'339',
    status:'update'
   
  },
   {id:6,
    name: "Facebook",
    time:'eeced,;',
    yaddas:'389',
    status:'open'
   
  },
  {id:7,
    name: "Expo Go",
    time:'esff',
    yaddas:'955',
    status:'update'
   
  },
  {id:8,
    name: "Azercell",
    time:'kfjna',
    yaddas:'24',
    status:'open'
   
  },
  {id:9,
    name: "Slack",
    time:'ghfvsabjndkmcscm',
    yaddas:'339',
    status:'update'
   
  },
   {id:10,
    name: "Facebook",
    time:'eeced,;',
    yaddas:'389',
    status:'open'
   
  },
  {id:11,
    name: "Expo Go",
    time:'esff',
    yaddas:'955',
    status:'update'
   
  },
  {id:12,
    name: "Azercell",
    time:'kfjna',
    yaddas:'24',
    status:'open'
   
  },
  {id:13,
    name: "Slack",
    time:'ghfvsabjndkmcscm',
    yaddas:'339',
    status:'update'
   
  },
   {id:14,
    name: "Facebook",
    time:'eeced,;',
    yaddas:'389',
    status:'open'
   
  },
  {id:15,
    name: "Expo Go",
    time:'esff',
    yaddas:'955',
    status:'update'
   
  },
  {id:16,
    name: "Azercell",
    time:'kfjna',
    yaddas:'24',
    status:'open'
   
  },
];























const [text , settext] = useState(data)

const filter= ()=>{

let nese = data.map(q => q.status == 'open' ? 'update': 'open')

// settext(nese)

console.log(nese);

}

filter()
// console.log(filter());




const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  return `#${randomColor}`;
};





const productItem = ({ item }) => (  
  

  <View style={{flexDirection:'row', justifyContent:'space-between' , backgroundColor:generateColor() , margin:10}}>
  
  <View style={{flexDirection:'row' , alignItems:'center'}}>


  <View> <Image
style={{width:50 , height:50 , marginLeft:5,borderRadius:100,}}
source={{
  uri: 'https://i.pinimg.com/564x/14/b6/dd/14b6dd87a4c03cb5ee1fc50f6fc4cd4f.jpg',
}}
/> </View>





  <View style={{margin:20}} >
  <Text>  {item.name}</Text>
 <View style={{flexDirection:'row', margin:10}}> <Text> {item.yaddas} Gb</Text> * <Text>
  {item.time }</Text>
  </View>
  </View>
  </View>
  
<View>

<Pressable  onPress={()=> filter() } style={{borderColor:generateColor() ,  borderWidth:2 , margin: 15,  padding:5 , borderRadius:10 }}>{ item.status}</Pressable>

</View>  
  
  </View>
  

  
  )


  return <>
  
  <View>
            <FlatList
                data={data}
                renderItem={productItem}
                
            />
        </View>
  
  </>






}






  



       

// const styles = StyleSheet.create({
 
// });

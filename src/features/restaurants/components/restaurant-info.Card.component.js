import React from 'react';
import {StatusBar,StyleSheet, Text, View, SafeAreaView,Platform } from 'react-native';
import { Card } from 'react-native-paper';

/* hgdnvcd */
export const RestaurantInfoCard=({ restaurent = {} })=>{
 const {
     name= 'some Restaurant',
     icon,
     photos= ["https://study.com/cimages/multimages/16/5e05989b-8826-45cb-a0aa-769a3e989423_restaurantfoodpurchasing1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROldj_wlZzEMDvZQj25OA-rdaygPIhL-63G5KRICqSQc5De4J9XY9lFSUQg7WgqMS7vk8&usqp=CAU"],
     address= "585412 chitguppa",
     openNow = true,
     rating = 4 ,
     isClosedTemporarily,
 }= restaurent;   
return <Card elevation={5} style={styles.card}>
    <Card.Cover key={name} style={styles.cover} source={{uri: photos[1]}}/>
    <Text style={styles.title}>{name}</Text>
 </Card>
};

const styles = StyleSheet.create({
    card: {backgroundColor:"white"},
    cover: {padding:20, backgroundColor:"white"},
    title:{ padding:16 }
});
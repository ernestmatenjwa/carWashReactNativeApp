import React from 'react'
import MapView, { Marker }  from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";


const GOOGLE_MAPS_APIKEY ='AIzaSyAGXSUtb0RGrt4V55SXW5ZV9n5Z4xuVd7w';


const MapScreen = () => {


const origin ={
  latitude: 	-23.4082946,
      longitude: 29.41193240000004,
}

const mpho ={

  latitude: 	-23.4112946,
      longitude: 29.40793240000004,

}
   
  return (
    
    
      <MapView 
      style={{width:'100%',height:'100%'}}
    initialRegion={{
      latitude: 	-23.4012946,
      longitude: 29.41793240000004,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >



 <Marker
      coordinate={mpho}
      title={"mpho carwash"}
     
    />

<MapViewDirections
        origin={origin}
        destination={mpho}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="blue"
      />
  </MapView>


  
  )
}

export default MapScreen 

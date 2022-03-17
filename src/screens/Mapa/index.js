import React,{useState,useEffect} from 'react'
import {Container,SearchBarArea,SearchBarIcon,SearchBar} from './style'
import{Alert} from 'react-native'
import MapView from 'react-native-maps'
import AppStyle from '../../AppStyle'

export default()=>{
    return(
        <Container>
             <MapView
                style={{flex:1}}
                region={{
                    latitude:-27.210753,
                    longitude:-49.644183,
                    latitudeDelta:0.0143,
                    longitudeDelta:0.0134,
                }}
                showsUserLocation
                loadingEnabled
            />
            <SearchBarArea>
                <SearchBarIcon/>
                <SearchBar placeholder="Pesquise a empresa / atividades"/>
                <SearchBarIcon source={AppStyle.iconSet.lupa}/>
            </SearchBarArea>
        </Container>

    );
}
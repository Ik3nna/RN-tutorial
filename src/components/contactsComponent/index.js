import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppModal from '../common/modal'
import { StatusBar } from 'expo-status-bar'
import Message from "../common/message";
import CustomButton from "../common/customButton"
import colors from '../../assets/themes/colors';

const ContactComponent = ({ visible, setVisible, data, loading, title, modalbody, modalfooter }) => {
  
  const ListEmptyComponent=()=> {
    return(
      <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
        <Message info message="No Contact" />
      </View>
    )
  }

  const renderItem = ({ item }) => {
    return(
      <TouchableOpacity>
        <Text>Contact 1</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <StatusBar style='auto' />
      <AppModal 
        visible={visible} 
        setVisible={setVisible} 
        title="My profile"
        modalfooter={<></>}
        modalbody={
          <View>
            <Text>Hello from the modal</Text>
          </View>
        }
      />
      {loading && 
        <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      }
      
      {!loading &&
        <FlatList 
          data={data}
          ListEmptyComponent={<ListEmptyComponent />}
          keyExtractor={(item)=>String(item.id)}
          renderItem={<renderItem />}
        />
      }
    </View>
  )
}

export default ContactComponent

const styles = StyleSheet.create({})
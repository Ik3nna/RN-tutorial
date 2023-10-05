import { View, Text, Modal, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import colors from '../../../assets/themes/colors';
import Icon from "../icon"

const AppModal = ({ visible, setVisible, title, modalbody, modalfooter }) => {
  return ( 
    <Modal visible={visible} transparent>
      <TouchableOpacity onPress={()=>setVisible(false)} style={styles.wrapper}>
        <View style={styles.modal_view}>
            <ScrollView>
                <View style={styles.header}>
                    <Icon type="evil" size={25} name="close" />
                    <Text style={styles.title}>{title || "Contacts"}</Text>
                    <View /><View /><View /><View /><View />
                </View>
                <View style={styles.footerSeparator} />

                <View style={styles.body}>
                    {modalbody}
                </View>

                {modalfooter}

                {!modalfooter && 
                    <View>
                      <>
                        <View style={styles.footerSeparator} />
                            <View style={styles.footerItems}>
                                <View style={styles.footer}>
                                <Text style={styles.footerText}>Privacy Policy</Text>
                                <View style={styles.termsView} />
                                <Text style={styles.footerText}>Terms of Service</Text>
                            </View>
                        </View>
                      </>  
                    </View>
                }
            </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  )
}

export default AppModal;
 
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "rgba(0,0,0,0.6)",
        flex: 1,
        justifyContent: "center",
    },
    modal_view: {
        backgroundColor: colors.white,
        minHeight: 300,
        marginHorizontal: 20,
        borderRadius: 4
    },
    header: {
        flexDirection: "row",
        padding: 15,
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 21,
    },
    body: {
        minHeight: 300,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    footer: {
        justifyContent: 'space-evenly',
        paddingVertical: 7,
        alignItems: 'center',
        flexDirection: 'row',
    },
    termsView: {
        width: 5,
        height: 5,
        borderRadius: 100,
        backgroundColor: colors.grey,
    },
    footerSeparator: {
        height: 0.5,
        backgroundColor: colors.grey,
    },
    footerItems: {
        width: '100%',
        padding: 10,
    },
    footerText: {
        fontSize: 12,
    },
})
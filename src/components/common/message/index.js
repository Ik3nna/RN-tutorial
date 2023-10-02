import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import colors from '../../../assets/themes/colors'; 

export default function Message ({ retry, retryFn, onDismiss, message, info, success, primary, danger }) {
  const [userDismissed, setDismissed] = useState(false);
  
  const getBgColor = ()=> {
    if (primary) {
        return colors.primary
    }
    if (success) {
        return colors.success
    }
    if (danger) {
        return colors.danger
    }
    if (info) {
        return colors.secondary
    }
  }

  return(
    <>
    {userDismissed ? null : 
      <TouchableOpacity style={[styles.btn, { backgroundColor: getBgColor() }]}>
          <View style={styles.message}>
            <Text style={[styles.btnText, { color: "white" }]}>
                {message}
            </Text>

            {retry && !typeof onDismiss==="function" &&
              <TouchableOpacity onPress={retryFn}>
                <Text style={{ color: "white" }}>Retry</Text>
              </TouchableOpacity>
            }

            {typeof onDismiss==="function" && 
              <TouchableOpacity 
                onPress={()=>{
                  setDismissed(true)
                  onDismiss()
                }}
              >
                <Text style={{ color: "white" }}>X</Text>
              </TouchableOpacity>
            }
          </View> 
      </TouchableOpacity>
    }
    </>
  )
}

const styles = StyleSheet.create({
  btn: {
    height: 42,
    paddingHorizontal: 5,
    paddingVertical: 13,
    marginVertical: 5,
    borderRadius: 4
  }, 
  message: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  btnText: {
    fontSize: 16,
    fontWeight: 500,
  }
});

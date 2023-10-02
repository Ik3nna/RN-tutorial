import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import colors from '../../../assets/themes/colors';


export default function CustomButton ({ title, disabled, loading, secondary, primary, danger, onPress }) {
  const getBgColor = ()=> {
    if (disabled) {
        return colors.grey
    }
    if (primary) {
        return colors.primary
    } else if (secondary) {
        return colors.secondary
    } else {
        return colors.danger
    }
  }

  return(
    <TouchableOpacity onPress={onPress} style={[styles.btn, { backgroundColor: getBgColor() }]} disabled={disabled}>
        <View style={[styles.loaderSection]}>
            {loading && <ActivityIndicator color={primary ? colors.secondary : colors.primary} />}

            {title &&
                <Text style={[styles.btnText, { color: disabled ? "black" : "white", paddingLeft: loading ? 5 : "auto" }]}>{title}</Text>
            }  
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    marginVertical: 5,
    borderRadius: 4
  }, 
  loaderSection: {
    flexDirection: "row",
  },
  btnText: {
    fontSize: 16,
    fontWeight: 500,
  }
});

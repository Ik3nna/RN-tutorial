import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import colors from '../../../assets/themes/colors';

const Input = ({ onChangeText, icon, iconPosition, value, onBlur, label, style, error, ...props }) => {
  const [ focused, setFocused ] = useState(false);

  const getFlexDirection = ()=> {
    if (icon && iconPosition) {
      if (iconPosition === "right") {
        return "row-reverse"
      } else {
        return "row";
      }
    }
  }

  const getBorderColor = ()=> {
    if (error) {
      return colors.danger;
    }
    if (focused) {
      return colors.primary
    }
    else {
      return colors.grey;
    }
  }
  
  return (
    <View style={styles.inputContainer}>
      {label && 
        <Text style={styles.label}>
          {label}
        </Text>
      }

      <View 
        style={[styles.wrapper, 
        { alignItems: icon && "center" },
        { borderColor: getBorderColor() }, 
        { flexDirection: getFlexDirection()}
      ]}>
        <View style={styles.icon}>{icon && icon}</View>

        <TextInput 
          style={[styles.input, style]} 
          value={value} 
          onFocus={()=>setFocused(true)}
          onBlur={()=>setFocused(false)}
          onChangeText={onChangeText} 
          {...props}
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 12
  },
  label: {
    fontSize: 20,
    fontWeight: 700
  },
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginTop: 5,
  },
  input: {
    flex: 1, 
    fontSize: 16,
    width: "100%"
  },
  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12
  }
})
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';


const ToolbarButton = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.button}>{title}</Text>
  </TouchableOpacity>
);


ToolbarButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};


const Toolbar = ({
  isFocused,
  onChangeFocus,
  onSubmit,
  onPressCamera,
  onPressLocation,
  placeholder,
}) => {
  const [text, setText] = useState('');


  const handleFocus = () => {
    onChangeFocus(true);
  };


  const handleBlur = () => {
    onChangeFocus(false);
  };


  const handleChangeText = (inputText) => {
    setText(inputText);
  };


  const handleSubmitEditing = () => {
    if (text.trim() !== '') {
      onSubmit(text);
      setText('');
    }
  };


  return (
    <View style={styles.toolbar}>
      <ToolbarButton title="📷" onPress={onPressCamera} />
      <ToolbarButton title="📍" onPress={onPressLocation} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          blurOnSubmit={false}
          value={text}
          onChangeText={handleChangeText}
          onSubmitEditing={handleSubmitEditing}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </View>
    </View>
  );
};


Toolbar.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  onChangeFocus: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onPressCamera: PropTypes.func.isRequired,
  onPressLocation: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};


Toolbar.defaultProps = {
  placeholder: 'Type something!',
};


const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingLeft: 16,
    backgroundColor: 'white',
  },
  button: {
    top: -2,
    marginRight: 12,
    fontSize: 20,
    color: 'grey',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.04)',
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
});


export default Toolbar;
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import IText from './IText';
import IButton from './IButton';
import Flex from './Flex';

export default class extends Component {
  render() {
    const {
      text = 'Hello',
      yes = 'OK',
      yesBackgroundColor,
      yesTextColor,
      onYes = this.noop,
      no,
      noBackgroundColor,
      noTextColor,
      onNo = this.noop,
      style,
      ...rest
    } = this.props;

    return (
      <View style={[styles.modal, style]}>
        <Flex style={styles.text}>
          <IText divider {...rest}>{text}</IText>
        </Flex>
        <Flex row justifyCenter style={styles.buttonWrapper}>
          {no
            ? 
            <IButton
              accent
              title={no}
              onPress={onNo}
              backgroundColor={noBackgroundColor}
              textColor={noTextColor}
              style={styles.noButton} />
            :
            null}
          <IButton
            title={yes}
            onPress={onYes}
            backgroundColor={yesBackgroundColor}
            textColor={yesTextColor}
            style={styles.yesButton}
          />
        </Flex>
      </View>
    );
  }

  noop = () => {};
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    width: 400,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    padding: 16
  },
  buttonWrapper: {
    width: '100%',
    padding: 16
  },
  yesButton: {
    width: 100
  },
  noButton: {
    width: 100,
    marginRight: 16
  }
});
import React, {ReactNode} from 'react';
import {StyleSheet, TextStyle, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import {Header as HeaderRNE} from 'react-native-elements';

interface HeaderProps {
  left?: any;
  right?: any;
  navigation?: any;
  onBackPress?: () => void;
  text: string | ReactNode;
  textStyle?: TextStyle;
  placement?: 'center' | 'left' | 'right' | undefined;
  isBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  left,
  right,
  navigation,
  text,
  textStyle,
  placement,
  isBack = true,
  onBackPress,
}) => {
  return (
    <View>
      <HeaderRNE
        backgroundColor="white"
        containerStyle={{
          backgroundColor: 'red',
        }}
        leftComponent={
          left ??
          (isBack && (
            <TouchableOpacity
              onPress={() => {
                if (onBackPress) {
                  onBackPress();
                } else if (navigation) navigation.goBack();
              }}
              style={styles.backIcon}>
              <Text>click</Text>
            </TouchableOpacity>
          ))
        }
        placement={placement}
        centerComponent={
          <>
            {typeof text === 'string' ? (
              <Text style={[styles.text, textStyle]}>{text}</Text>
            ) : (
              text
            )}
          </>
        }
        rightComponent={right}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  backIcon: {
    width: 38,
    height: 38,
    borderRadius: 16,
    shadowOffset: {width: 1, height: 1},
    backgroundColor: 'white',
    shadowOpacity: 0.3,
    elevation: 10,
  },
  text: {
    marginTop: 8,
    color: 'white',
    fontWeight: 'bold',
  },
});

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { spacing, size } from '../utils/sizing';
import colors from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';

const Focus = ({ addSubject }) => {
  const [focusSubject, setFocusSubject] = useState('');
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          mode="flat"
          label="Your focus subject"
          theme={{colors: {primary: colors.grey} }}
          placeholder="Type your focus subject here"
          right={<TextInput.Affix text="/100" />}
          onChangeText={(letter) => {
            setFocusSubject(letter);
          }}
          defaultValue={focusSubject}
        />
        <View style={styles.addButton}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(focusSubject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    marginTop: spacing.lg,
  },
  input: {
    flex: 1,
    marginLeft: spacing.sm,
    backgroundColor: colors.lightGrey,
    color: colors.white
  },
  addButton: {
    marginHorizontal: spacing.sm,
    justifyContent: 'center',
    borderRadius: 100,
    fontSize: size.xxxl,
  },
});

export default Focus;

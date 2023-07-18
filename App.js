import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';

import History from './src/features/History';

import colors from './src/utils/colors';
import Focus from './src/features/Focus-Feature';
import Timer from './src/features/Timer';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState('');
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <View>
          <Focus addSubject={setCurrentSubject} />
          <History history={history} />
        </View>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history, subject]);
          }}
          clearSubject={() => {
            setCurrentSubject(null);
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondryColor,
  },
});

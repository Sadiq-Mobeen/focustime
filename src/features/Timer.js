import React, { useState } from 'react';
import { View, StyleSheet, Text, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';

import Timing from './Timing';

import { Countdown } from '../components/countdown';
import { RoundedButton } from '../components/RoundedButton';

import colors from '../utils/colors';
import { spacing, size } from '../utils/sizing';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export default Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();

  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN)
    setIsStarted(false)
    setProgress(1)
    reset()
    onTimerEnd(focusSubject)
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View>
          <Text style={styles.subject}>Subject: {focusSubject}</Text>
        </View>
      </View>
      <View>
        <ProgressBar style={styles.progress} progress={progress} />
      </View>
      <View style={styles.buttonWraper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWraper}>
        {!isStarted && (
          <RoundedButton
            title="start"
            onPress={() => {
              setIsStarted(true);
            }}
          />
        )}
        {isStarted && (
          <RoundedButton
            title="pause"
            onPress={() => {
              setIsStarted(false);
            }}
          />
        )}
      </View>
      <View style={styles.clearSubjectWraper}>
        <RoundedButton size={60} title="-" onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: colors.secondryColor,
  },
  countdown: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWraper: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearSubjectWraper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subject: {
    marginTop: spacing.sm,
    color: colors.white,
    fontSize: size.md,
    fontWeight: 'bold',
  },
  progress: {
    height: size.sm,
    color: colors.progressbar,
  },
});

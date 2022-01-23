import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, TouchableOpacity, Animated} from 'react-native';
import Svg, {Circle, G} from 'react-native-svg';
import Ant from 'react-native-vector-icons/AntDesign';

export default NextButton = ({percentage, scrollTo}) => {
  const size = 80;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);
  const animation = toValue => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(
      value => {
        const strokeDashoffset =
          circumference - (circumference * value.value) / 100;
        if (progressRef?.current) {
          progressRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [percentage],
    );

	return () => {
        progressAnimation.removeAllListeners()
	};
  }, []);
  return (
	  <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'flex-end', marginVertical: 15 }}>
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            stroke="#E6E7E8"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            ref={progressRef}
            stroke="#FF9900"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            // strokeDashoffset={circumference - (circumference * 60) / 100}
          />
        </G>
      </Svg>
      <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.6}>
        <Ant name="arrowright" size={20} color={'#ffffff'} />
      </TouchableOpacity>
    </View>
	</View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
	marginRight: 10
  },
  button: {
	  
    position: 'absolute',
    backgroundColor: '#FF9900',
    borderRadius: 100,
    padding: 15,
    zIndex: 2,
  },
});

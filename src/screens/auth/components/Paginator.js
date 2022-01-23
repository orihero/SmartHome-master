import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  useWindowDimensions,
} from 'react-native';

export default Paginator = ({data, scrollX}) => {
  const {width} = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: 'row',
        height: 20,
        justifyContent: 'center',
        marginTop: 10,
      }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [24, 48, 24],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: [
            'rgba(14, 14, 18, 0.2)',
            'rgba(253,113,0,1)',
            'rgba(14, 14, 18, 0.2)',
          ],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, opacity, backgroundColor}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 8,
    borderRadius: 8,
    backgroundColor: '#FF9900',
    marginHorizontal: 5,
  },
});

import React from 'react';
import {Image, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default OnboardingItem = ({item}) => {
  const {width} = useWindowDimensions();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[styles.container, {width}]}>
        <Image
          source={item.image}
          style={{width, height: (width * 438) / 523}}
        />
        <View style={{flex: 1, paddingTop: 80}}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 0.6,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 5,
    textAlign: 'center',
  },
  description: {
    fontWeight: '300',
    textAlign: 'center',
    paddingHorizontal: 64,
    marginHorizontal: 20,
    color: `#c0c0c0`,
  },
});

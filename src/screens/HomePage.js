import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LivingRoom, Location} from '../assets/icons/icons';
import Devices from './tabScreens/components/Devices';
import Rooms from './tabScreens/components/Rooms';

const Tabs = [
  {title: 'ROOMS', content: Rooms},
  {title: 'DEVICES', content: Devices},
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(0);
  const Content = Tabs[activeTab].content;
  return (
    <View style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <View style={styles.headText}>
          <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
            Your Home
          </Text>
          <View style={{paddingTop: 10}}>
            <Avatar
              rounded
              source={{
                uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              }}
            />
          </View>
        </View>
        <View
          style={{
            justifyContent: 'flex-start',
            flexDirection: 'row',
            paddingHorizontal: 10,
          }}>
          <Location />
          <Text style={{color: 'gray', fontSize: 12}}>
            2715 Ash Dr. San Jose, South Dakota 83475
          </Text>
        </View>
        <View style={styles.customTab}>
          {Tabs.map((e, i) => {
            return (
              <TouchableOpacity onPress={() => setActiveTab(i)}>
                <Text
                  style={{
                    color: activeTab === i ? '#fff' : 'rgba(255,255,255,0.5)',
                  }}>
                  {e.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View style={styles.menuBar}>
        <View style={styles.roomItems}>
          <Content />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.2,
    backgroundColor: '#2A2A37',
  },
  headText: {
    paddingTop: 25,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  customTab: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    padding: 25,
  },
  menuBar: {
    flex: 0.74,
  },
  roomItems: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
});

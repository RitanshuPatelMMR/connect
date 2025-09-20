// src/Callscreen.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ZegoUIKitPrebuiltCall, GROUP_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn';
import { useNavigation, useRoute } from '@react-navigation/native';

const Callscreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { userName, userID } = route.params as { userName: string; userID: string };

  const config = {
    appId: 1973833977,
    appSign: '2429d2c573cff9fa2e44e0c0a066d81a82c0573224c8a28fbe52e415fabce9f7',
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ZegoUIKitPrebuiltCall
          appID={config.appId}
          appSign={config.appSign}
          userID={userID}
          userName={userName}
          callID="mycallid"
          config={{
            ...GROUP_VIDEO_CALL_CONFIG,
            onCallEnd: (callId, reason, duration) => {
              navigation.goBack();
            },
            layout: {
              mode: 'grid',
            },
            audioVideoConfig: {
              showSoundWaveIndicator: true,
            },
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Callscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
});
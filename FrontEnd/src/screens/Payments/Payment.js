import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Payment = () => {
  return (
      <SafeAreaView className="mt-10">
          <View>
          </View>
      <View>
        <Text className="">Choose Payment Method</Text>
     </View>
          <View>
              <TouchableOpacity>
                  <Text>Pay Now</Text>
              </TouchableOpacity>
          </View>
    </SafeAreaView>
  );
}

export default Payment
import {View, Text, Modal} from 'react-native';
import React, {useState} from 'react';

const SearchScreen = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <View>
      <Text>SearchScreen</Text>
    </View>
  );
};

export default SearchScreen;

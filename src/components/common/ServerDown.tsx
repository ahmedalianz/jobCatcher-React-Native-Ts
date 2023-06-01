import React, {FC} from 'react';
import {Image, TouchableOpacity, Text} from 'react-native';
import {icons} from '../../constants';
interface ServerDownProps {
  onPress?: () => void;
}
const ServerDown: FC<ServerDownProps> = ({onPress = () => {}}) => {
  return (
    <TouchableOpacity
      style={{justifyContent: 'center', alignItems: 'center'}}
      onPress={onPress}>
      <Image
        source={icons.reload}
        resizeMode="cover"
        style={{width: 50, height: 50}}
      />
      <Text style={{marginTop: 5}}>Click To try again</Text>
    </TouchableOpacity>
  );
};
export default ServerDown;

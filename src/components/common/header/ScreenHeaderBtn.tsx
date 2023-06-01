import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Image, ImageSourcePropType, TouchableOpacity} from 'react-native';
import {DIMENSION, SIZES} from '../../../constants';

import styles from './screenheader.style';
import {IDIMENSION} from '../../../constants/theme';

interface ScreenHeaderBtnProps {
  iconUrl: ImageSourcePropType;
  dimension: keyof IDIMENSION;
  onPress?: () => void;
}

const ScreenHeaderBtn: FC<ScreenHeaderBtnProps> = ({
  iconUrl,
  dimension,
  onPress = () => {},
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={onPress ?? navigation.goBack}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={{
          width: DIMENSION[dimension],
          height: DIMENSION[dimension],
          borderRadius: SIZES.small / 1.25,
        }}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;

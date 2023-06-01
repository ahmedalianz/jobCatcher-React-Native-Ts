import React, {FC} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {checkImageURL} from '../../../../utils';

import styles from './nearbyjobcard.style';
interface itemProps {
  employer_logo: string;
  job_title: string;
  job_employment_type: string;
}
interface NearbyJobCardProps {
  item: itemProps;
  onPress: () => void;
}
const NearbyJobCard: FC<NearbyJobCardProps> = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item?.employer_logo
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {item?.job_title}
        </Text>
        <Text style={styles.jobType}>{item?.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;

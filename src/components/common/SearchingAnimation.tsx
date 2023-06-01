import React, {FC} from 'react';
import {Image, ViewProps} from 'react-native';
import {icons} from '../../constants';
const SearchingAnimation: FC<ViewProps> = () => {
  return <Image source={icons.searching} />;
};
export default SearchingAnimation;

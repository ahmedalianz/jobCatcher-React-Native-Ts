import {View, FlatList} from 'react-native';
import React, {FC, useState} from 'react';
import {SIZES} from '../constants';
import {NearbyJobs, PopularJobs, Welcome} from '../components';

const Home: FC = () => {
  const [activeJobType, setActiveJobType] = useState<string>('Full-Time');

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={['app']}
      keyExtractor={item => item}
      renderItem={() => (
        <View style={{flex: 1, padding: SIZES.medium}}>
          <Welcome {...{activeJobType, setActiveJobType}} />
          <PopularJobs {...{activeJobType}} />
          <NearbyJobs {...{activeJobType}} />
        </View>
      )}
    />
  );
};
export default Home;

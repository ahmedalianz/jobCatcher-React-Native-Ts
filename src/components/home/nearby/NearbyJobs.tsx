import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

import {useFetch} from '../../../hooks';

import styles from './nearbyjobs.style';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import {useNavigation} from '@react-navigation/native';
import SearchingAnimation from '../../common/SearchingAnimation';
import ServerDown from '../../common/ServerDown';

const NearbyJobs = ({activeJobType}: any) => {
  const {error, data, loading, refetch} = useFetch('search', {
    query: 'React Developer',
    num_pages: 1,
  });
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Search', {
              searchText: 'Nearby jobs',
              jobType: activeJobType,
            })
          }>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {loading ? (
          <SearchingAnimation />
        ) : error ? (
          <ServerDown onPress={refetch} />
        ) : (
          <FlatList
            decelerationRate="fast"
            data={data}
            keyExtractor={(item, index) => item?.job_id ?? index}
            renderItem={({item}) => (
              <NearbyJobCard
                item={item}
                onPress={() =>
                  navigation.navigate('JobDetails', {
                    job_id: item.job_id,
                  })
                }
              />
            )}
          />
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;

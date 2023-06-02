import React, {useState, FC} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import styles from './styles/search';
import {useFetch} from '../hooks';
import {NearbyJobCard} from '../components';
import {COLORS, icons, SIZES} from '../constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';

type SearchProps = NativeStackScreenProps<RootStackParamList, 'Search'>;

const JobSearch: FC<SearchProps> = ({route, navigation}) => {
  const {searchText, jobType} = route.params;
  const formattedJobType =
    jobType.charAt(0).toUpperCase() + jobType.slice(1).replace('-', ' ');
  const [page, setPage] = useState(1);
  const {data, error, loading, refetch} = useFetch('search', {
    query: searchText + ' ' + formattedJobType,
    page: page.toString(),
  });

  const handlePagination = (direction: string) => {
    if (direction === 'left' && page > 1) {
      setPage(page - 1);
      refetch();
    } else if (direction === 'right') {
      setPage(page + 1);
      refetch();
    }
  };

  return (
    <FlatList
      data={data}
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
      keyExtractor={item => item.job_id}
      contentContainerStyle={{padding: SIZES.medium, rowGap: SIZES.medium}}
      ListHeaderComponent={() => (
        <>
          <View style={styles.container}>
            <View style={styles.flexContainer}>
              <Text style={[styles.searchTitle, {marginStart: 0}]}>
                {jobType}
              </Text>
              <Text
                style={[
                  styles.searchTitle,
                  {marginStart: 4, color: COLORS.tertiary},
                ]}>
                {searchText}
              </Text>
            </View>
            <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
          </View>
          <View style={styles.loaderContainer}>
            {loading ? (
              <ActivityIndicator size="large" color={COLORS.primary} />
            ) : (
              error && <Text>Oops something went wrong</Text>
            )}
          </View>
        </>
      )}
      ListFooterComponent={() => (
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.paginationButton}
            onPress={() => handlePagination('left')}>
            <Image
              source={icons.chevronLeft}
              style={styles.paginationImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={styles.paginationTextBox}>
            <Text style={styles.paginationText}>{page}</Text>
          </View>
          <TouchableOpacity
            style={styles.paginationButton}
            onPress={() => handlePagination('right')}>
            <Image
              source={icons.chevronRight}
              style={styles.paginationImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default JobSearch;

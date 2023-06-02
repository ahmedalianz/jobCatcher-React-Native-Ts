import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import styles from './welcome.style';
import React, {useState, FC} from 'react';
import {icons, SIZES, COLORS} from '../../../constants';
import {useNavigation} from '@react-navigation/native';

const jobTypes = ['Full-Time', 'Part-Time', 'Contractor'];
type WelcomeScreenProps = {
  activeJobType: 'Full-Time' | 'Part-Time' | 'Contractor';
  setActiveJobType: Function;
};

const Welcome: FC<WelcomeScreenProps> = ({activeJobType, setActiveJobType}) => {
  const navigation = useNavigation();
  const [search, setSearch] = useState<string>('');
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome, Ahmed</Text>
        <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="What are you looking for?"
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => {
            if (search) {
              navigation.navigate('Search', {
                searchText: search,
                jobType: activeJobType,
              });
            }
          }}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          keyExtractor={item => item}
          horizontal
          data={jobTypes}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                styles.tab,
                {
                  borderColor:
                    activeJobType === item ? COLORS.secondary : COLORS.gray2,
                },
              ]}
              onPress={() => {
                setActiveJobType(item);
              }}>
              <Text
                style={[
                  styles.tabText,
                  {
                    color:
                      activeJobType === item ? COLORS.secondary : COLORS.gray2,
                  },
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={{columnGap: SIZES.small}}
        />
      </View>
    </View>
  );
};

export default Welcome;

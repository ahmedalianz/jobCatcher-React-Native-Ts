import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { SIZES } from "../../../constants";
import SearchingAnimation from "../../common/SearchingAnimation";
import ServerDown from "../../common/ServerDown";
import styles from "./popularjobs.style";
import { useFetch } from "../../../hooks";
import { useNavigation } from "@react-navigation/native";

const PopularJobs = ({ activeJobType }) => {
  const { error, data, loading, refetch } = useFetch("search", {
    query: "React Developer",
    num_pages: 1,
  });
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Search", {
              searchText: "Popular jobs",
              jobType: activeJobType,
            })
          }
        >
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
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                onPress={() =>
                  navigation.navigate("JobDetails", {
                    job_id: item.job_id,
                  })
                }
              />
            )}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default PopularJobs;

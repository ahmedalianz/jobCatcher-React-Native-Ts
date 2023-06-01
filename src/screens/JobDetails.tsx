import {View, Text, ScrollView, RefreshControl} from 'react-native';
import React, {useState, useCallback, FC} from 'react';
import {useFetch} from '../hooks';
import {SIZES} from '../constants';
import {RouteProp} from '@react-navigation/native';
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  SearchingAnimation,
  ServerDown,
  Specifics,
} from '../components';
import {NavigatorParams} from '../types/navigation';
import {IData} from '../types/jobDetails';
const tabs = ['About', 'Qualifications', 'Responsibilities'];
type ScreenRouteProps = RouteProp<NavigatorParams, 'JobDetails'>;
type JobDetailsProps = {
  route: ScreenRouteProps;
};
const JobDetails: FC<JobDetailsProps> = ({route}) => {
  const {job_id}: NavigatorParams = route.params;

  const {data, loading, error, refetch} = useFetch('job-details', {
    job_id,
  });
  const typedData = data as IData | null;
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);
  const tabContentLookUp: {[key: string]: JSX.Element} = {
    Qualifications: (
      <Specifics
        title="Qualifications"
        points={typedData?.[0]?.job_highlights?.Qualifications ?? ['N/A']}
      />
    ),
    About: (
      <JobAbout info={typedData?.[0]?.job_description ?? 'No data provided'} />
    ),
    Responsibilities: (
      <Specifics
        title="Responsibilities"
        points={typedData?.[0]?.job_highlights?.Responsibilities ?? ['N/A']}
      />
    ),
  };
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {loading ? (
          <SearchingAnimation />
        ) : error ? (
          <ServerDown />
        ) : typedData?.length === 0 ? (
          <Text>No Data available</Text>
        ) : (
          <View style={{padding: SIZES.medium, paddingBottom: 100}}>
            <Company
              companyLogo={typedData?.[0]?.employer_logo}
              jobTitle={typedData?.[0]?.job_title}
              companyName={typedData?.[0]?.employer_name}
              location={typedData?.[0]?.job_country}
            />

            <JobTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {tabContentLookUp[activeTab]}
          </View>
        )}
      </ScrollView>
      <JobFooter
        url={
          typedData?.[0]?.job_google_link ??
          'https://careers.google.com/jobs/results/'
        }
      />
    </>
  );
};
export default JobDetails;

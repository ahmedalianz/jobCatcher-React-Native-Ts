
export type RootStackParamList = {
  Home: {};
  Search: {searchText: string; jobType: string};
  JobDetails: {job_id: string};
};
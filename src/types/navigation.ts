import { ParamListBase } from "@react-navigation/native";

export type NavigatorParams =ParamListBase& {
    [key: string]: string;
    searchText: string;
    jobType: string;
  }
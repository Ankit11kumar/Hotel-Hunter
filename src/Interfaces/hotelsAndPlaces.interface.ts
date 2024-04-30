export interface MatchedSubstrings {
  length: number;
  offset: number;
}

export interface SearchObj {
  id: string;
  description: string;
  matchedSubstrings: MatchedSubstrings[];
}

export interface SearchData {
  hotels: SearchObj[];
  locations: SearchObj[];
}

export interface SearchDataState {
  searchData: SearchData;
  detailsData: Place | null;
  loading: boolean;
  error: string | null | undefined;
}

export interface Place {
  id: number;
  name: string;
  description?: string;
  title: string;
  url?: string
}

export interface SearchResultsProps {
  heading: string;
  data: SearchObj[];
  type: string;
  icon: JSX.Element;
}

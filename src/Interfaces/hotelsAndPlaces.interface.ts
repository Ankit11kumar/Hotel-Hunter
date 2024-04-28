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
  data: SearchData;
  loading: boolean;
  error: string | null | undefined;
}

export interface SearchResultsProps {
  heading: string;
  data: SearchObj[];
  icon: JSX.Element;
}

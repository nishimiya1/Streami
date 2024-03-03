export function setSearchResults(state: { searchedResults: any }, items: any) {
  state.searchedResults = items;
}

export function setLoading (state: { isLoading: boolean}, isLoading : boolean){
  state.isLoading = isLoading;
}

export function setError(state: { error: string }, error: string) {
  state.error = error;
}
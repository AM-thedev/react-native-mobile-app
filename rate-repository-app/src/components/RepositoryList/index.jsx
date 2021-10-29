import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const pickerChoices = [
  { label: 'Latest', orderBy: 'CREATED_AT', orderDirection: 'ASC' },
  { label: 'Highest Rated', orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' },
  { label: 'Lowest Rated', orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' }
];

const RepositoryList = () => {
  const [selectedSorter, setSelectedSorter] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchValue] = useDebounce(searchQuery, 500);
  const { repositories, refetch, fetchMore } = useRepositories({
    first: 8
    });

  useEffect(() => {
    refetch(searchValue, pickerChoices[selectedSorter].orderBy, pickerChoices[selectedSorter].orderDirection)
  }, [selectedSorter, searchValue]);

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer 
      repositories={repositories}
      selectedSorter={selectedSorter}
      setSelectedSorter={setSelectedSorter}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
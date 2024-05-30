import React, {useState} from 'react';
import './styles/SearchBar.css';

//Creating the sorting options - Using key-value pairs
const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};


//Creating the searchbar component
const SearchBar = (props) => {
    const [term, setTerm] = useState('');
    const [location, setlocation] = useState('');
    const [sortBy,setSortBy] = useState('');
    
    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return (
                <li 
                key={sortByOptionValue} 
                className={getSortByClass(sortByOptionValue)}
                onClick={() => handleSortByChange(sortByOptionValue)}
                >
                {sortByOption}
                </li>
            );
        });
    }

    const getSortByClass = (sortByOption) => {
        return sortBy === sortByOption ? 'active': '';
    };

    const handleSortByChange = (sortByOption) => {
        setSortBy(sortByOption);
    };

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };

    const handleLocationChange = (event) => {
        setlocation(event.target.value);
    };
    
    const handleSearch = (event) => {
        props.searchYelp(term, location, sortBy);
        event.preventDefault();
    };

    return (
        <div className="SearchBar">
          <div className="SearchBar-sort-options">
            <ul>
              {renderSortByOptions()}
            </ul>
          </div>
          <div className="SearchBar-fields">
            <input placeholder="Search Businesses" onChange={handleTermChange} />
            <input placeholder="Where?" onChange={handleLocationChange} />
          </div>
          <div className="SearchBar-submit">
            <button onClick={handleSearch}>Let's Go</button>
          </div>
        </div>
      );
};

export default SearchBar;

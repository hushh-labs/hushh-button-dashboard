import React from "react";
import "./SearchQuery.css";

function SearchQuery({ tags, searchQueries, userQueries }) {
  return (
    <div className="searchQuery__mainContainer">
      <div className="searchQuery__header">
        <h2>Trending search queries</h2>
        <div className="searchQuery__tags">
          {tags.map((tag, index) => (
            <div className="tag" key={index}>
              <div className="tag__content">
                {/* Ensure you access the properties correctly */}
                <img src={tag.image} alt={tag.name} />
                <p>{tag.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="searchQuery__body">
        <h3>Search queries</h3>
        <p>Last 30 Days</p>
        <div className="searchQuery__lists">
          <div className="searchQuery__list">
            <h4>Search queries</h4>
            {searchQueries.map((query, index) => (
              <div className="queryItem" key={index}>
                <img src={query.image} alt={query.query} />
                <div className="queryDetails">
                  <span>{query.query}</span>
                  <span>{query.usersCount} users in last 30 days</span>
                </div>
              </div>
            ))}
          </div>

          <div className="searchQuery__list">
            <h4>Search queries by users</h4>
            {userQueries.map((userQuery, index) => (
              <div className="queryItem" key={index}>
                <img src={userQuery.image} alt={userQuery.user} />
                <div className="queryDetails">
                  <span>{userQuery.query}</span>
                  <span>{userQuery.usersCount} users in last 30 days</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchQuery;

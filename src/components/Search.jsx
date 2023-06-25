import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find A User :)" />
      </div>
      <div className="userChat">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jack</span>
        </div>
      </div>
    </div>
  );
};

export default Search;

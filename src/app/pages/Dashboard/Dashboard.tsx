import React from "react";
import "./Dashboard.css";
import DashboardHeader from "@/app/components/DashboardHeader/DashboardHeader";
import User from "@/app/components/Users/User";
import SearchQuery from "@/app/components/SearchQuery/SearchQuery";
import {
  sampleSearchQueries,
  sampleUserQueries,
  sampleTags,
} from "@/app/Exports/sampleData";
function Dashboard() {
  return (
    <div className="Dashboard__mainContainer">
      <DashboardHeader />

      {/* User Category Navigation Bar */}
      <div className="Dashboard__firstContainer">
        <div className="Dashboard__userCategory">
          <span className="Dashboard__userCategoryItem active">All Users</span>
          <span className="Dashboard__userCategoryItem">Anonymous</span>
          <span className="Dashboard__userCategoryItem">Logged in</span>
          <span className="Dashboard__userCategoryItem">Email only</span>
          <span className="Dashboard__userCategoryItem">Phone only</span>
        </div>
      </div>
      <div className="Dashboard__userTable">
        {/* <User /> */}
        <SearchQuery
          tags={sampleTags}
          searchQueries={sampleSearchQueries}
          userQueries={sampleUserQueries}
        />
      </div>
    </div>
  );
}

export default Dashboard;

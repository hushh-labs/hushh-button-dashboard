import React from "react";
import Images from "@/app/Exports/Images";
import NavigationBar from "../../components/NavigationBar/NavigationBar"; // Import your NavigationBar component
import "./CardsPage.css"; // Import the CSS file for styling

function CatalogPage() {
  return (
    <div className="CatalogPage__container">
      <div className="CatalogPage__nav">
        <NavigationBar />
      </div>
      <div className="CatalogPage__content">
        <div className="CatalogPage__HeaderContainer">
          <h4>Cards</h4>

          <div className="CatalogPage__filters">
            <input
              type="text"
              placeholder="Search..."
              className="CatalogPage__searchInput"
            />
            <div className="CatalogPage__dropdowns">
              <select>
                <option>Date</option>
              </select>
              <select>
                <option>Category</option>
              </select>
              <select>
                <option>Stock</option>
              </select>
            </div>
          </div>
          <div className="CatalogPage__actions">
            <button className="CatalogPage__addButton">Add New Card</button>
          </div>
        </div>
        <div className="CatalogPage__mainContent">
          <table className="CatalogPage__table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Card Name</th>
                <th>Created</th>
                <th>Installed</th>
                <th>Active Users</th>
                <th>Status</th>
                <th>Last Update</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="td__imageTitle">
                  <img
                    src={Images.productImage.src}
                    alt="Product"
                    className="CatalogPage__productImage"
                  />
                  <a href="#" className="CatalogPage__productTitle">
                    Travel Card
                  </a>
                </td>
                <td>2024-08-20</td> {/* Created */}
                <td>14,346,312</td> {/* Installed */}
                <td>120</td> {/* Active Users */}
                <td className="CatalogPage__active">Active</td> {/* Status */}
                <td>2024-09-02</td> {/* Last Update */}
              </tr>
              {/* More table rows as needed */}
            </tbody>
          </table>

          <div className="CatalogPage__pagination">
            <span>Showing 1 to 5 of 5 entries</span>
            <div className="CatalogPage__paginationControls">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogPage;

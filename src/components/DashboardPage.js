import React from "react";

class DashboardPage extends React.Component {
  state = [
    {
      projectNumber: "MA-172",
      customerName: "Ali Zamani",
      lastUpdate: "1397/12/25"
    },
    {
      projectNumber: "MN-25",
      customerName: "Mohsen Sattari",
      lastUpdate: "1398/06/04"
    }
  ];

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr className="thead">
              <th>Project Number</th>
              <th>Customer Name</th>
              <th>Last Update</th>
            </tr>
          </thead>
          <tbody>
            {this.state.map(p => {
              return (
                <tr>
                  <td>{p.projectNumber}</td>
                  <td>{p.customerName}</td>
                  <td>{p.lastUpdate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DashboardPage;

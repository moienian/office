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
        <table className="project-table">
          <thead>
            <tr className="thead">
              <th className="row-number">Project Number</th>
              <th className="row-name">Customer Name</th>
              <th className="row-date">Last Update</th>
            </tr>
          </thead>
          <tbody>
            {this.state.map(p => (
              <tr>
                <td>{p.projectNumber}</td>
                <td>{p.customerName}</td>
                <td>{p.lastUpdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DashboardPage;

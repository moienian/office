import React from "react";
import AddProjectPage from "./AddProjectPage";

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddProject = this.handleAddProject.bind(this);
    this.state = {
      projects: [
        {
          id: "1",
          projectNumber: "MA-172",
          customerName: "Ali Zamani",
          lastUpdate: "1397/12/25"
        },
        {
          id: "2",
          projectNumber: "MN-25",
          customerName: "Mohsen Sattari",
          lastUpdate: "1398/06/04"
        }
      ]
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("projects");
      const projects = JSON.parse(json);
      if (projects) {
        this.setState(() => ({ projects }));
      }
    } catch (error) {
      // Dot nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.projects.length !== this.state.projects.length) {
      const json = JSON.stringify(this.state.projects);
      localStorage.setItem("projects", json);
    }
  }
  handleAddProject({ number, name, date }) {
    this.setState(prevState => {
      return {
        projects: prevState.projects.concat({
          id: "3",
          projectNumber: number,
          customerName: name,
          lastUpdate: date
        })
      };
    });
  }

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
            {this.state.projects.map(p => (
              <tr key={p.id}>
                <td>{p.projectNumber}</td>
                <td>{p.customerName}</td>
                <td>{p.lastUpdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <AddProjectPage handleAddProject={this.handleAddProject} />
      </div>
    );
  }
}

export default DashboardPage;

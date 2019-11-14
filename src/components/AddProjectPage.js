import React from "react";

export default class AddProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddProject = this.handleAddProject.bind(this);
  }
  handleAddProject(e) {
    e.preventDefault();
    const element = e.target.elements;

    const number = element.number.value.trim();
    const name = element.name.value.trim();
    const date = element.date.value.trim();

    const project = { number, name, date };

    if (number && name && date) {
      this.props.handleAddProject(project);

      element.number.value = "";
      element.name.value = "";
      element.date.value = "";
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddProject}>
          <input type="text" name="number" />
          <input type="text" name="name" />
          <input type="text" name="date" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

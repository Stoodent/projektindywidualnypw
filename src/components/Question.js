import React from "react";

class Question extends React.Component {
  handleChange = event => {
    this.props.setAnswer(event.target.value, this.props.index);
  };

  render() {
    return (
      <li className="question" >
        <div>
          <h3>{this.props.description}</h3>
          <label>
            <input
              type="radio"
              name={"question" + this.props.index}
              value="A"
              onChange={this.handleChange}
            />{" "}
            {this.props.answerA}
          </label>
          <br />
          <label>
            <input
              type="radio"
              name={"question" + this.props.index}
              value="B"
              onChange={this.handleChange}
            />{" "}
            {this.props.answerB}
          </label>
          <br />
          <label>
            <input
              type="radio"
              name={"question" + this.props.index}
              value="C"
              onChange={this.handleChange}
            />{" "}
            {this.props.answerC}
          </label>
        </div>
      </li>
    );
  }
}

export default Question;

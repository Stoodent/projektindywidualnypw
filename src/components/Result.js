import React from "react";

class Result extends React.Component {
  state = {
    score: 0,
    showscore: false
  };
  calcResult = event => {
    const answers = Object.values(this.props.answers);
    const countA = answers.filter(answer => answer === "A").length;
    const countB = answers.filter(answer => answer === "B").length;
    const countC = answers.filter(answer => answer === "C").length;
    const countEmpty = 10 - (countA + countB + countC);
    
    var sum = 0;
    switch (event.target.value) {
      case "female":
        sum = (countB + countEmpty) * 5 + countC * -5 + countA * 15;
        break;

      case "male":
        sum = (countB + countEmpty) * 5 + countC * -5 + countA * 10;
        break;

      default:
    }

    this.setState({ score: sum });
    this.setState({ showScore: true });
  };

  render() {
    return (
      <>
        <div className="question">
          <h3>Zaznacz swoją płeć:</h3>
          <div className="result">
            <label>
              <input
                type="radio"
                name="sex"
                value="female"
                onChange={this.calcResult}
              />
              {"Kobieta "}
            </label>
            <label>
              <input
                type="radio"
                name="sex"
                value="male"
                onChange={this.calcResult}
              />
              {"Mężczyzna "}
            </label>
          </div>
        </div>
        <h2>Twój wynik: {this.state.showScore ? this.state.score : ""}</h2>
        <p>
          Większość mężczyzn osiąga od 0 do 60 punktów, natomiast większość
          kobiet od 50 do 100 punktów. Wyniki pokrywające się, to znaczy między
          50 a 60 punktami oznaczają zgodność w myśleniu obu płci. Wyniki
          mężczyzny poniżej 0 i kobiety powyżej 100 punktów wskazują na mózgi
          uformowane skrajnie odmiennie od mózgów płci przeciwnej.
        </p>
      </>
    );
  }
}

export default Result;

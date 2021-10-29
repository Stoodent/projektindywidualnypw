import React from "react";
import { Link } from "react-router-dom";
import Question from "./Question";
import Result from "./Result";

class Test extends React.Component {
  state = {
    questions: [
      {
        id: 1,
        description:
          "Słyszysz niewyraźne miauczenie. Jak łatwo możesz zlokalizować kota bez rozglądania się wokoło?",
        answerA: "Jeśli się zastanowisz, możesz go wskazać.",
        answerB: "Możesz go wskazać bez zastanowienia.",
        answerC: "Nie jesteś pewien/pewna, czy mógłbyś/mogłabyś go wskazać."
      },
      {
        id: 2,
        description:
          " Jak łatwo możesz zapamiętać piosenkę, którą przed chwilą usłyszałeś/usłyszałaś?",
        answerA: "Jest to bardzo łatwe; możesz zaśpiewać jej kawałek czysto.",
        answerB:
          "Możesz ją zaśpiewać czysto pod warunkiem, że jest prosta i rytmiczna.",
        answerC: "Sprawia ci to trudność."
      },
      {
        id: 3,
        description:
          "Dzwoni do ciebie osoba, którą spotkałeś kilka razy. Czy łatwo ci rozpoznać jej głos w ciągu kilku sekund, zanim się przedstawi?",
        answerA: "Jest to dla ciebie łatwe.",
        answerB:
          "Rozpoznałbyś/Rozpoznałabyś głos przynajmniej w połowie przypadków.",
        answerC: "Sprawia ci to trudność."
      },
      {
        id: 4,
        description:
          " Jesteś w towarzystwie zaprzyjaźnionych z tobą małżeństw. Dwie osoby spośród obecnych mają potajemny romans. Czy wykryłbyś/wykryłabyś ich związek?",
        answerA: "Niemal zawsze.",
        answerB: "W połowie przypadków.",
        answerC: "Rzadko"
      },
      {
        id: 5,
        description:
          "Jesteś na dużym, czysto towarzyskim spotkaniu. Zostajesz przedstawiony/przedstawiona  pięciu nieznanym ci osobom. Czy łatwo będzie ci przypomnieć sobie ich twarze na wspomnienie ich nazwisk następnego dnia?",
        answerA: "Będziesz pamiętać większość z nich.",
        answerB: "Będziesz pamiętać tylko niektóre.",
        answerC: "Rzadko zapamiętasz którekolwiek z nich."
      },
      {
        id: 6,
        description:
          "Czy łatwe były dla ciebie ortografia i pisanie wypracowań we wczesnych latach szkolnych?",
        answerA: "Obie rzeczy były dość łatwe.",
        answerB: "Jedna z nich była łatwa.",
        answerC: "Żadna nie była łatwa."
      },
      {
        id: 7,
        description:
          "Spostrzegasz miejsce na parkingu, ale musisz wjechać na nie tyłem, a miejsce jest dość wąskie:",
        answerA: "Szukasz innego miejsca",
        answerB: "Wjeżdżasz tyłem, ale uważnie.",
        answerC: "Nie myśląc wiele, wjeżdżasz tyłem."
      },
      {
        id: 8,
        description:
          "Po trzech dniach spędzonych w neznanej ci miejscowości ktoś cię pyta, gdzie jest północ:",
        answerA: "Jest mało prawdopodobne, żebyś umiał/umiała ją wskazać.",
        answerB:
          "Nie jesteś pewien/pewna, ale mając chwilę czasu zorientujesz się.",
        answerC: "Wskazujesz północ."
      },
      {
        id: 9,
        description:
          "Jesteś w poczekalni u dentysty z paroma osobami tej samej co ty płci. Jak blisko którejś z nich możesz usiąść, nie czując się niezręcznie?",
        answerA: "Mniej niż 15 cm.",
        answerB: "15 do 60 cm.",
        answerC: "Ponad 60 cm."
      },
      {
        id: 10,
        description:
          "Odwiedzasz nowego sąsiada/sąsiadkę i prowadzicie rozmowę. W tle słychać kapanie z kranu. Poza tym w pokoju jest cicho",
        answerA:
          "Zwróciłbyś/Zwróciłabyś uwagę na ten dźwięk natychmiast i próbowałbyś/próbowałabyś go ignorować.",
        answerB:
          "Gdybyś zwrócił/zwróciła na niego uwagę, prawdopodobnie byś o tym wspomniał/wspomniała.",
        answerC: "W ogóle by ci ten dźwięk nie przeszkadzał."
      }
    ],
    answers: {},
    showResult: false
  };

  showResult = event => {
    event.preventDefault();
    this.setState({ showResult: true });
  };

  getAnswer = (answer, n) => {
    const answers = { ...this.state.answers };
    answers[n] = answer;
    this.setState({ answers });
  };

  render() {
    return (
      <>
        {!this.state.showResult ? (
          <>
            <h2>Test</h2>
            <p>
              Test określa w jakiej mierze męski lub kobiecy jest twój umysł.
              Przygotowane zostało 10 pytań. Przy każdym z poniższych należy
              zaznaczyć odpowiedź, z którą najbardziej się identyfikujesz – a, b
              lub c. Jeśli długo się zastanawiasz lub żadna odpowiedź do Ciebie
              nie pasuje – nie odpowiadaj.
            </p>
            <form className="questions" onSubmit={this.showResult}>
              <ol>
                {this.state.questions.map(question => (
                  <Question
                    key={question.id}
                    index={question.id}
                    description={question.description}
                    answerA={question.answerA}
                    answerB={question.answerB}
                    answerC={question.answerC}
                    setAnswer={this.getAnswer}
                  />
                ))}
              </ol>
              <div className="center">
                <button type="submit">
                  <span>Wynik</span>
                </button>
              </div>
            </form>
          </>
        ) : (
          <Result answers={this.state.answers} />
        )}

        <div className="center">
          <Link to="/">
            <button type="button">
              <span>Strona główna</span>
            </button>
          </Link>
        </div>
      </>
    );
  }
}

export default Test;

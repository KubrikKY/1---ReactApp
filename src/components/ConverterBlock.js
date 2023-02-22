import React from 'react';

class ConverterBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curseMoney: [...props.actualMoney],
      curseValue: '',
    };
  }

  componentDidMount() {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then((response) => response.json())
      .then((data) => {
        let curseActualValue = [];
        for (let money in data.Valute) {
          curseActualValue.push(data.Valute[money]);
        }
        this.setState({
          curseValue: curseActualValue,
        });
      });
  }

  changeSelectorMoney(e) {
    let curseMoney = [];
    curseMoney.push(e.target.value);
    this.setState({
      curseMoney: curseMoney,
    });
  }

  render() {
    return (
      <div>
        <select onChange={this.changeSelectorMoney.bind(this)}>
          {[...this.state.curseValue].map((e) => {
            return (
              <option key={e.ID} value={e.CharCode}>
                Показать курс {e.Name}
              </option>
            );
          })}
        </select>
        <ul>
          {[...this.state.curseValue].map((e) => {
            if (this.state.curseMoney.includes(e.CharCode)) {
              return (
                <li key={e.ID.slice(2)}>
                  {e.Name} актуальный курс {e.Value}
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default ConverterBlock;

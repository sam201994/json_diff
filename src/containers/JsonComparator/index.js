import React, {Component} from 'react';

import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import Utils from '../../utils';
import './style.css';

class JsonComparator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftTextAreaValue: '',
      rightTextAreaValue: '',
      score: '',
    };
  }

  onChange = (event, id) => {
    const key = `${id}TextAreaValue`;
    this.setState({
      [key]: event.target.value,
    });
  };

  onHandleClick = () => {
    const {leftTextAreaValue, rightTextAreaValue} = this.state;
    try {
      const score = Utils.calculateScoreForJsonObjects(
        JSON.parse(leftTextAreaValue),
        JSON.parse(rightTextAreaValue)
      );
      this.setState({
        score,
      });
    } catch (e) {
      this.setState({
        score: 'Invalid JSON objects',
      });
    }
  };

  render() {
    const {leftTextAreaValue, rightTextAreaValue} = this.state;
    const {score} = this.state;
    return (
      <div>
        <div className="score-box">
          <h1>JSON diff calculator</h1>
          <span className="score">score: {score}</span>
        </div>
        <div className="main-container">
          <TextArea
            id="left"
            onChange={this.onChange}
            value={leftTextAreaValue}
            customStyleClass="text-area-json"
          />
          <div className="button-container">
            <Button
              value="Calculate"
              customStyleClass="button-compare"
              onClick={this.onHandleClick}
            />
          </div>
          <TextArea
            id="right"
            onChange={this.onChange}
            value={rightTextAreaValue}
            customStyleClass="text-area-json"
          />
        </div>
      </div>
    );
  }
}

export default JsonComparator;

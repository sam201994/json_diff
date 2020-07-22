import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './style.css';

class TextArea extends PureComponent {
  render() {
    const {value, id, onChange, customStyleClass} = this.props;
    return (
      <div className="text-area-container">
        <textarea
          className={customStyleClass}
          onChange={e => onChange(e, id)}
          value={value}
        />
      </div>
    );
  }
}

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  customStyleClass: PropTypes.string.isRequired,
};

export default TextArea;

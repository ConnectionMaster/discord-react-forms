/* @flow */

import React, {PropTypes} from 'react';
import FieldMixin from './common/FieldMixin';
import FieldWrapper from './common/FieldWrapper';

const TextArea = React.createClass({
  mixins: [FieldMixin],

  propTypes: {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    required: PropTypes.bool,
    validator: PropTypes.func,
    value: PropTypes.string
  },

  getDefaultProps() {
    return {
      value: '',
      required: false
    };
  },

  componentWillMount() {
    const {value} = this.props;
    this.initField({hasDefaultValue: value && value.length});
  },

  onChange({target}: {target: HTMLInputElement}) {
    this.setField({value: target.value});
  },

  render() {
    const {label, required} = this.props;
    const field = this.getField();

    return (
      <FieldWrapper required={required} error={field.error} label={label}>
        <textarea value={field.value} onChange={this.onChange} onBlur={this.setHasBeenTouched} />
      </FieldWrapper>
    );
  }
});

export default TextArea;
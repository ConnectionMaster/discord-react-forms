/* @flow */

import React, {PropTypes} from 'react';

type FieldWrapperType = {
  error: string;
  required: boolean;
  children?: any;
  label: ?string;
};

const FieldWrapper = ({error, required, children, label}: FieldWrapperType) => (
  <div className="form-component">
    {required ? <span className="form-required-star">* </span> : null}
    {label ? <label className="form-label">{label}</label> : null}
    {children}
    {error ? <div className="form-error">{error}</div> : null}
  </div>
);

FieldWrapper.propTypes = {
  error: PropTypes.string,
  required: PropTypes.bool,
  children: PropTypes.any,
  label: PropTypes.string
};

export default FieldWrapper;
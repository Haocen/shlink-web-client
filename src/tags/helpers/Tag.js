import React from 'react';
import PropTypes from 'prop-types';
import { colorGeneratorType } from '../../utils/services/ColorGenerator';
import './Tag.scss';

const propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
  clearable: PropTypes.bool,
  colorGenerator: colorGeneratorType,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
};

const Tag = ({
  text,
  children,
  clearable,
  colorGenerator,
  onClick,
  onClose,
}) => (
  <span
    className="badge tag"
    style={{ backgroundColor: colorGenerator.getColorForKey(text), cursor: clearable || !onClick ? 'auto' : 'pointer' }}
    onClick={onClick}
  >
    {children || text}
    {clearable && <span className="close tag__close-selected-tag" onClick={onClose}>&times;</span>}
  </span>
);

Tag.propTypes = propTypes;

export default Tag;

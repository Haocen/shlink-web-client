import React from 'react';
import { Card } from 'reactstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { faCircleNotch as preloader } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const getClassForType = (type) => {
  const map = {
    error: 'border-danger',
  };

  return map[type] || '';
};
const getTextClassForType = (type) => {
  const map = {
    error: 'text-danger',
  };

  return map[type] || 'text-muted';
};

const propTypes = {
  noMargin: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node,
  type: PropTypes.oneOf([ 'default', 'error' ]),
};

const Message = ({ children, loading = false, noMargin = false, type = 'default' }) => {
  const cardClasses = classNames('bg-light', getClassForType(type), { 'mt-4': !noMargin });

  return (
    <div className="col-md-10 offset-md-1">
      <Card className={cardClasses} body>
        <h3 className={classNames('text-center mb-0', getTextClassForType(type))}>
          {loading && <FontAwesomeIcon icon={preloader} spin />}
          {loading && <span className="ml-2">{children || 'Loading...'}</span>}
          {!loading && children}
        </h3>
      </Card>
    </div>
  );
};

Message.propTypes = propTypes;

export default Message;

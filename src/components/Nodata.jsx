import React from 'react';
import { BsDatabaseFillSlash } from 'react-icons/bs';

function Nodata({ customClass, message }) {
  return (
    <div className={`text-center ${customClass}`}>
      <BsDatabaseFillSlash className="display-2" style={{ color: 'gray' }} />
      <h5 className="mt-2">{message}</h5>
    </div>
  );
}

export default Nodata;

Nodata.defaultProps = {
  customClass: '',
  message: 'No data',
};

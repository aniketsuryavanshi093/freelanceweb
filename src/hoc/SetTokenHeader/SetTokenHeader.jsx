import React, { useState, useEffect } from 'react';

function SetTokenHeader(Component, axios, token) {
  function WrappedComponent(props) {
    const [interceptor] = useState(
      axios.interceptors.request.use((config) => {
        const configObject = config;
        configObject.headers.Authorization = `Bearer ${localStorage.getItem(token)}`;
        return configObject;
      })
    );
    useEffect(
      () => () => {
        axios.interceptors.request.eject(interceptor);
      },
      [token]
    );

    return (
      <>
        <Component {...props} />
      </>
    );
  }
  return WrappedComponent;
}
export default SetTokenHeader;

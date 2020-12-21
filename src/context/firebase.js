import React from 'react';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const context = React.createContext()
const { Provider } = context

function ContextProvider(props) {
  const firebase = window.firebase

  return (
    <Provider value={{ firebase }} >
      {props.children}
    </Provider>
  )
}

export { context as FirebaseContext, ContextProvider as FirebaseContextProvider }
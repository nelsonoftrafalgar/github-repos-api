import './index.css'

import * as serviceWorker from './serviceWorker'

import { ApolloProvider } from '@apollo/react-hooks'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import { client } from './utils/graphql'

ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

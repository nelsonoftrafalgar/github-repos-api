import { ApolloProvider } from '@apollo/client'
import App from 'App'
import ReactDOM from 'react-dom'
import { StrictMode } from 'react'
import { client } from 'config/graphql'
import reportWebVitals from 'reportWebVitals'

ReactDOM.render(
	<ApolloProvider client={client}>
		<StrictMode>
			<App />
		</StrictMode>
	</ApolloProvider>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

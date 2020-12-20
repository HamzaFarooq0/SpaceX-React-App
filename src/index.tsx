import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

//Graphql
import { ApolloProvider } from '@apollo/client';
import { client } from './config/graphql_config'


ReactDOM.render(
	<ApolloProvider client={client}>
			<App />
	</ApolloProvider>,
	document.getElementById('root')
);

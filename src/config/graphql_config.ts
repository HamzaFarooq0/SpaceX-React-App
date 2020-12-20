import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link = createHttpLink({
	uri: 'https://spacexdata.herokuapp.com/graphql'
});

export const client = new ApolloClient({
	// Provide required constructor fields
	cache: cache,
	link: link
});

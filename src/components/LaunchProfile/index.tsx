import React, { useEffect } from 'react';
import LaunchProfile from './LaunchProfile';

//Code Generated from Codegen
import { useLaunchProfileQuery } from '../../generated/graphql';

interface IdProps {
	id: number;
}

const LaunchProfileContainer = ({ id }: IdProps) => {
	const { loading, error, data, refetch } = useLaunchProfileQuery({
		variables: {
			id: String(id)
		}
	});

	useEffect(
		() => {
			refetch();
		},
		[ id, refetch ]
	);

	if (loading) return <h1>Loading..</h1>;

	if (error) return <h1>Error..</h1>;

	if (!data) return <div>Select a flight from the panel</div>;

	return <LaunchProfile data={data} />;
};

export default LaunchProfileContainer;

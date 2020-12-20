import * as React from 'react';
import LaunchList from './LaunchList';

//Imported from generated file through Codegen
import { useLaunchListQuery } from '../../generated/graphql';

import {OwnProps} from './LaunchList' 

const LaunchListContainer = (props : OwnProps) => {
	const { data, error, loading } = useLaunchListQuery();

	if (loading) return <h1>Loading..</h1>;

	if (error || !data) return <h1>There's some Error..</h1>;

	return <LaunchList data={data} {...props}/>;
};

export default LaunchListContainer;
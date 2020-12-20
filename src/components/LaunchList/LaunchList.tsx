import React from 'react';
import { LaunchListQuery } from '../../generated/graphql';
import './styles.css'

export interface OwnProps {
	handleIdChange: (newId: number) => void;
  }
  
  interface Props extends OwnProps {
	data: LaunchListQuery;
  }

let className = 'LaunchList';

const LaunchList: React.FC<Props> = ({ data, handleIdChange }) => {
	console.log('LaunchList Data: ' + data);
	return (
		<div className={className}>
			<h3>Launches</h3>
			<ol className={`${className}__list`}>
				{!!data.launches &&
					data.launches.map(
						(launch, i) =>
							!!launch && (
								<li onClick={() => handleIdChange(launch.flight_number!)} key={i} className={`${className}__item`}>
									{launch.mission_name} ({launch.launch_year})
								</li>
							)
					)}
			</ol>
		</div>
	);
};

export default LaunchList;

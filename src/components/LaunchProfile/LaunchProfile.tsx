import React from 'react';
import './styles.css'

import { LaunchProfileQuery } from '../../generated/graphql';

interface LaunchProfileProps {
	data: LaunchProfileQuery;
}

const className = 'LaunchProfile';

const LaunchProfile: React.FC<LaunchProfileProps> = ({ data }) => {
    console.log('LaunchProfile Data: ' + data);
    
    if(!data.launch) {
        return <h1>No launch Available</h1>
    }

	return (
		<div className={className}>
			<div className={`${className}__status`}>
				<span>Flight {data.launch.flight_number}: </span>
				{data.launch.launch_success ? (
					<span className={`${className}__success`}>Success</span>
				) : (
					<span className={`${className}__failed`}>Failed</span>
				)}
			</div>
			<h1 className={`${className}__title`}>
				{data.launch.mission_name}
				{data.launch.rocket && ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
			</h1>
			<p className={`${className}__description`}>{data.launch.details}</p>
			{!!data.launch.links &&
			!!data.launch.links.flickr_images && (
				<div className={`${className}__image-list`}>
					{data.launch.links.flickr_images.map(
						(image) => (image ? <img src={image} alt="SpaceX Launch" className={`${className}__image`} key={image} /> : null)
					)}
				</div>
			)}
		</div>
	);
};

export default LaunchProfile;

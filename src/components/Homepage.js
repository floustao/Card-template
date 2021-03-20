import React from 'react';

import Card from './Card';
import Background from './Background';

export default function Homepage() {
	return (
		<>
			<Background />
			<Card
				characterInfo={{ name: 'Victor Crest', age: '26', city: 'London' }}
				socialMediaInfo={[
					{ name: 'Followers', count: '80K' },
					{ name: 'Likes', count: '803K' },
					{ name: 'Photos', count: '1.4K' },
				]}
			/>
		</>
	);
}

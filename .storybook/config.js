import React from 'react'
import { configure, addDecorator } from '@storybook/react';

addDecorator((storyFn) => {
	return (
		<div>
			{storyFn()}
		</div>
	)
})

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.js$/), module);

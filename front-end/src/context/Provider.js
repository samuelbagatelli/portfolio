import React from 'react';
import PropTypes from 'prop-types';
import Context from '.';
import useData from '../hooks';

function Provider({ children }) {
	return (
		<Context.Provider value={ useData() }>
			{children}
		</Context.Provider>
	);
}

Provider.propTypes = {
	children: PropTypes.node.isRequired,
};
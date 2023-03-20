import React from 'react';

import ReactCaptcha from 'modern-react-captcha';

import reloadIcon from '../images/captcha_icon1.png';

const Captcha = () => {
	const handleSuccess = () => console.log('match');
	const handleFailure = () => console.log('does not match');

	return (
		<div>
			<ReactCaptcha
				charset='ulns'
				length={6}
				color='white'
				bgColor='black'
				reload={true}
				reloadText='Reload Captcha'
				reloadIcon={reloadIcon}
				handleSuccess={handleSuccess}
				handleFailure={handleFailure} />
		</div>
	);
}

export default Captcha;
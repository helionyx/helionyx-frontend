import React from 'react'

type LoadingIndicatorProps = {
	show?: boolean
	wait?: `delay-${number}`
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ show = true, wait = 'delay-300' }) => {
	return (
		<div
			className={`fixed top-0 left-0 right-0 h-0.5 bg-amber-500 z-[100] transition-opacity duration-500 ${
				show ? `opacity-100 ${wait}` : 'opacity-0 delay-0'
			}`}
		>
			<div className='h-full w-1/3 bg-amber-600 animate-pulse'></div>
		</div>
	)
}

export default LoadingIndicator

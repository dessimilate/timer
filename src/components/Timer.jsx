import { useState } from 'react'

import { Time } from './Time'

const Timer = () => {
	const [valueSec, setValueSec] = useState(0)
	const [valueMin, setValueMin] = useState(0)
	const [valueHour, setValueHour] = useState(0)
	const [ms100, setms100] = useState(0)
	const [clicked, setClick] = useState(true)
	const [showTime, setShowTime] = useState(true)
	const [interv, setInterv] = useState()
	const [firstShow, setFirstShow] = useState(true)

	const resetTime = () => {
		setValueSec(0)
		setValueMin(0)
		setValueHour(0)
		setms100(0)
		setClick(!clicked)
		setShowTime(true)
		clearInterval(interv)
	}

	return (
		<div className='time-block'>
			<h1>Timer</h1>
			{showTime ? (
				<div className='inputs'>
					<div>
						<input
							value={valueHour === 0 ? '' : valueHour}
							onChange={e => {
								setValueHour(el =>
									+e.target.value < 24 ? +e.target.value : el
								)
								setms100((valueSec + valueMin * 60 + valueHour * 3600) * 10)
							}}
							placeholder='h'
						/>
					</div>
					<div>
						<input
							value={valueMin === 0 ? '' : valueMin}
							onChange={e => {
								setValueMin(el => (+e.target.value < 60 ? +e.target.value : el))
								setms100((valueSec + valueMin * 60 + valueHour * 3600) * 10)
							}}
							placeholder='m'
						/>
					</div>
					<div>
						<input
							value={valueSec === 0 ? '' : valueSec}
							onChange={e => {
								setValueSec(el => (+e.target.value < 60 ? +e.target.value : el))
								setms100((valueSec + valueMin * 60 + valueHour * 3600) * 10)
							}}
							placeholder='s'
						/>
					</div>
				</div>
			) : (
				<Time ms100={ms100} />
			)}
			<div className='time-btns'>
				<button
					disabled={!clicked}
					onClick={() => {
						setClick(!clicked)
						setShowTime(false)
						setInterv(
							setInterval(() => setms100(el => el - (el === 0 ? 0 : 1)), 100)
						)
						setms100(
							firstShow
								? (valueSec + valueMin * 60 + valueHour * 3600) * 10
								: ms100
						)
						setFirstShow(false)
					}}
					className='time-btn'
				>
					start
				</button>
				<button
					disabled={clicked}
					onClick={() => {
						setClick(!clicked)
						clearInterval(interv)
					}}
					className='time-btn'
				>
					stop
				</button>
				<button disabled={clicked} onClick={resetTime} className='time-btn'>
					reset
				</button>
			</div>
		</div>
	)
}

export { Timer }

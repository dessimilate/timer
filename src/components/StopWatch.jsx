import { useState } from 'react'

const StopWatch = () => {
	const [ms100, setSec] = useState(0)
	const [vis, setVis] = useState(false)
	const [interv, setInterv] = useState()

	const changeTime = action => {
		if (action === 'start')
			setInterv(setInterval(() => setSec(ms100 => ms100 + 1), 100))
		if (action === 'stop') clearInterval(interv)
		if (action === 'reset') {
			clearInterval(interv)
			setSec(0)
		}
		setVis(!vis)
	}

	return (
		<div className='time-block'>
			<h1>Stopwatch</h1>
			<div className='output'>
				<div>
					{`${parseInt(parseInt(ms100 / 10) / 3600) % 60}`.padStart(2, '0')}
				</div>
				<div>
					{`${parseInt(parseInt(ms100 / 10) / 60) % 60}`.padStart(2, '0')}
				</div>
				<div>{`${parseInt(ms100 / 10) % 60}`.padStart(2, '0')}</div>
			</div>
			<div className='time-btns'>
				<button
					disabled={vis}
					onClick={() => changeTime('start')}
					className='time-btn'
				>
					start
				</button>
				<button
					disabled={!vis}
					onClick={() => changeTime('stop')}
					className='time-btn'
				>
					stop
				</button>
				<button
					disabled={!vis}
					onClick={() => changeTime('reset')}
					className='time-btn'
				>
					reset
				</button>
			</div>
		</div>
	)
}

export { StopWatch }

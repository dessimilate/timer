import { faBell, faClock, faStopwatch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

import './App.scss'
import { Alarm } from './components/Alarm'
import { StopWatch } from './components/StopWatch'
import { Timer } from './components/Timer'

function App() {
	const fa = [
		{
			iconName: faStopwatch,
			title: 'Stopwatch'
		},
		{
			iconName: faClock,
			title: 'Timer'
		},
		{
			iconName: faBell,
			title: 'Alarm'
		}
	]
	const [pos, setPos] = useState(1)

	return (
		<div className='App'>
			<div className='container'>
				<div className='menu'>
					{fa.map((elem, i) => (
						<div
							onClick={() => setPos(i)}
							key={elem.title}
							className='menu-btn'
						>
							<p style={{ opacity: `${i === pos ? 1 : 0}` }}>{elem.title}</p>
							<FontAwesomeIcon
								style={{ marginTop: `${i === pos ? 30 : 0}` }}
								icon={elem.iconName}
							/>
						</div>
					))}
					<div style={{ left: `${73 + pos * 90}px` }} className='circ'></div>
				</div>
				{pos === 0 ? <StopWatch /> : pos === 1 ? <Timer /> : <Alarm />}
			</div>
		</div>
	)
}

export default App

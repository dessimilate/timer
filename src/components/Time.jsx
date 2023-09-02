import style from './timer.module.scss'

const Time = ({ ms100 }) => {
	return (
		<div className={style.output}>
			<div>
				<div>
					{`${parseInt(parseInt(ms100 / 10) / 3600) % 60}`.padStart(2, '0')}
				</div>
			</div>
			<div>
				<div>
					{`${parseInt(parseInt(ms100 / 10) / 60) % 60}`.padStart(2, '0')}
				</div>
			</div>
			<div>
				<div>{`${parseInt(ms100 / 10) % 60}`.padStart(2, '0')}</div>
			</div>
		</div>
	)
}

export { Time }

import React, { useEffect } from 'react'
import classNames from 'classnames'
import { builder } from '@builder.io/react';
import { InferGetStaticPropsType } from 'next'
import dayjs from 'dayjs'
//My components
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import H5 from 'components/H5'
import H3 from 'components/H3'
import BootcampCard from 'components/BootcampCard'


export const getStaticProps = async () => {
	const date = new Date();
	const results = await builder.getAll('evento', { limit: 10 })
	const events = results.map(event => event.data)
	const currentEvents = results.filter(event => event.date < date)

	return {
		props: {
			events
		},
		revalidate: 100
	}
}

export default function Eventos({ events }: any) {
	useEffect(() => {
		console.log(dayjs())
	})
	return (
		<>
			<Navbar />
			<div className={classNames(
				'bg-no-repeat bg-cover bg-events h-80',
				'flex flex-col justify-center xl:items-center'
			)}>
				<div className={classNames('px-14 max-w-1086-px w-full xl:px-0')}>
					<H5>
						Eventos Kodemia
					</H5>
					<div>
						<H3
							whiteText='No te pierdas'
							cyanText='ninguno'
						/>
					</div>
				</div>
			</div>
			<section className={classNames('bg-black-kd', 'flex')}>
				{events.map((event, index) => (
					<BootcampCard key={index}
						mode={event.name}
						date={dayjs(event.date).format('DD MMMM ').toString()}
						schedule={dayjs(event.date).format('hh:mm a').toString()}
						feature='Conexión remota vía streaming'
						link='#'

					/>
				))}
				<BootcampCard mode='Kodeday: Desarrolla tu juego del calamar con Android'
					date='6 de Noviembre'
					schedule='11:00 hrs.'
					feature='Conexión remota vía streaming'
					link='#' />
			</section>
			<Footer />
		</>
	)
}

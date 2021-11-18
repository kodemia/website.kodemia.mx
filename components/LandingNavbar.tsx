
import Image from 'next/image'

type Props = {
	mobileLogo: string
	desktopLogo: string
}

export default function LandingNavbar(props: Props) {
	return (
		<nav className='h-16 bg-black-kd-trasparent mb-0 flex mob:px-5 sm:px-12 z-50 relative'>
			<figure
				data-component='LandingNavbar-logo'
				className='container flex'
			>
				<div className='sm:hidden w-28 my-auto'>
					<Image
						src={props.mobileLogo}
						layout='responsive'
						width={112}
						height={36}
						objectFit='contain'
					/>
				</div>
				<div className='hidden sm:block w-96 my-auto'>
					<Image
						src={props.desktopLogo}
						layout='responsive'
						width={384}
						height={36}
						objectFit='contain'
					/>
				</div>
			</figure>
		</nav>
	)
}

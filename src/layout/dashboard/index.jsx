
import { Outlet } from 'react-router-dom'
import HeaderTop from '../../components/header/headerTop/HeaderTop'
import HeaderNav from '../../components/header/headerLeft/HeaderLeft'


const DashboardLayout= () => {
	return (
		<div className='overflow-hidden '>
			<div className="w-full">
				<HeaderTop/>
			</div>
			<div className="flex">
				<div className="">
					<HeaderNav/>
				</div>
				<Outlet/>
			</div>
			
		</div>
	)
}

export default DashboardLayout

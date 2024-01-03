import { Link, Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'

  //const value = 'some value' - we can use context on Outlet and get  values form any children. Special hook - useOutletContext()

  return (
    <>
      <Navbar />
      <div className='page'>
        {isPageLoading ? (
          <div className='loading' />
        ) : (
          //<Outlet context={value} />
          <Outlet />
        )}
      </div>
    </>
  )
}

export default HomeLayout

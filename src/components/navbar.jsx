import {Menu} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './styles.css'

function Navbar() {
  return (
    <Menu inverted fixed='top'>
        <Menu.Item className='item' name='Home' as={Link} to="/"/>
        <Menu.Item className='item' name='Rated' as={Link} to="/rated"/>

        <Menu.Menu position='right'>
            <Menu.Item className='item' name='Logout' as={Link} to="/auth" />
        </Menu.Menu>
    </Menu>
  )
}

export default Navbar

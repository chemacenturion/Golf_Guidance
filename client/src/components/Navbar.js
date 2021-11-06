import React, { useContext, useState } from 'react'
import { Menu } from 'semantic-ui-react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

import { AuthContext} from '../context/auth'

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);
  const handleItemClick = (e, { name }) => setActiveItem(name);
  const navBar = user ? (
    <Menu stackable size="massive">
        <Menu.Item
          name='home' 
          as={Link}
          to="/"
        >
          <img src={logo} alt='logo'/>
        </Menu.Item>
        <Menu.Menu position='right'>
        <Menu.Item
          name='merch'
          active={activeItem === 'merch'}
          onClick={handleItemClick}
          as={Link}
          to="/merch"
        >
          Merch
        </Menu.Item>

        <Menu.Item
          name='logout'
          onClick={logout}
        >
          Logout
        </Menu.Item>
        </Menu.Menu>
      </Menu>
  ) : (
    <Menu stackable size="massive">
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
          as={Link}
          to="/"
        >
        <img src={logo} alt='logo'/>
        </Menu.Item>
        <Menu.Menu position='right'>
        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={handleItemClick}
          as={Link}
          to="/login"
        >
          Login
        </Menu.Item>

        <Menu.Item
          name='register'
          active={activeItem === 'register'}
          onClick={handleItemClick}
          as={Link}
          to="/register"
        >
          Register
        </Menu.Item>
        </Menu.Menu>
      </Menu>
  )
    return navBar
}

export default Navbar
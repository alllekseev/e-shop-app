import styles from './navbar.component.module.scss';
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {NavLink, Outlet} from "react-router-dom";

export const navigate = [
  {
    id: 1,
    name: 'Profile',
    to: '/profile'
  },
  {
    id: 2,
    name: 'Chats',
    to: '/chats'
  },
]

export function NavbarComponent() {
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <List className={styles.nav__list}>
            <ListItem>
              {navigate.map((link) => (
                <NavLink
                  to={link.to}
                  key={link.id}
                  className={styles.link}
                  style={({isActive}) => ({
                    background: isActive ? '#c1d9e8' : 'none'
                  })}
                >
                  <ListItemButton>
                    <ListItemText className={styles.link_text}>{link.name}</ListItemText>
                  </ListItemButton>
                </NavLink>
              ))}
            </ListItem>
          </List>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

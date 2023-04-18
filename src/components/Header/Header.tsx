import headerStyle from './header.module.css';
import { NavLink } from 'react-router-dom';

type navLinksType = {
  path: string,
  title: string
  end: boolean
}

export const Header = () => {
  const navLinks:navLinksType[] = [
    {path: "/marketplace", title: 'Main', end: true},
    {path: "/marketplace/2", title: 'Marketplace', end: true},
    {path: "/groups", title: 'Groups', end: true},
    {path: "/events", title: 'Events', end: true}
  ];

  return (
    <header className={headerStyle.header}>
      <div className={"container"}>
        <div className={headerStyle.headerWrap}>

          <div className={headerStyle.headerLeft}>
            <a href="/" className="logo">
              <svg viewBox="0 0 36 36" height="40" width="40">
                <defs>
                  <linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="gradient">
                    <stop offset="0%" stopColor="#0062E0"></stop>
                    <stop offset="100%" stopColor="#19AFFF"></stop>
                  </linearGradient>
                </defs>
                <path fill="url(#gradient)"
                      d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
                <path fill="#fff"
                      d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path>
              </svg>

            </a>
          </div>

          <nav className={headerStyle.headerCenter}>
            {navLinks.map(nLink => {
              return (
                <NavLink
                  end={nLink.end}
                  to={nLink.path}
                  className={({ isActive }) => isActive
                    ? headerStyle.navLinkActive
                    : headerStyle.navLink}
                >
                  {nLink.title}
                </NavLink>
              )
            })}

          </nav>

          <div className={headerStyle.headerRight}>

          </div>

        </div>
      </div>
    </header>
  )
}
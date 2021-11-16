import '../styles/header.scss'
import { Logo } from './Logo'

export function Header() {
  return (
    <header className="header">
      <div>
        <Logo />
      </div>
    </header>
  )
}
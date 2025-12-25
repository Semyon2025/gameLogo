import './styles.css';
import border from '../../../images/Group 94.png';

export default function Header() {
  return (
    <header className='container'>
    <span className='logo'>logo</span>
   <nav>
    <ul>
      <li><a href='/'>Home</a></li>
      <li className='active'><a href='/about'>About us</a>
      <img src={border} alt="border" /></li>
      <li><a href='#'>Portfolio</a></li>
      <li><a href='#'>News</a></li>
      <li className='btn'><a href='#'>Contacts</a></li>
    </ul>
  </nav>
  </header>
  );
}
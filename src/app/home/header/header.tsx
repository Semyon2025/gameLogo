import './styles.css';
import border from '../../../images/Group 94.png';
export default function Header() {
  return (
    <header className='container'>
    <span className='logo'>logo</span>
   <nav>
    <ul>
      <li className='active'><a href='/'>Home</a>
      <img src={border} alt="border" /></li>
      <li><a href='/about'>About us</a></li>
      <li><a href='/portfolio'>Portfolio</a></li>
      <li><a href='#'>News</a></li>
      <li className='btn'><a href='#'>Contacts</a></li>
    </ul>
  </nav>
  </header>
  );
}
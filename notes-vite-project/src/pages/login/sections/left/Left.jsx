import './Left.css'
import Logo from '../../../../assets/man-working-remotely-and-drinking-coffee 1.png'
function Left() {
  return (
    <section className='left'>
      <img src={Logo} alt="Man-with-beard" />
      <div className='about-img'>
        <h3>Keep life simple</h3>
        <p>Store all your notes in a simple and intuitive app that helps you enjoy what is most important in life.</p>
      </div>
    </section>
  )
}

export default Left

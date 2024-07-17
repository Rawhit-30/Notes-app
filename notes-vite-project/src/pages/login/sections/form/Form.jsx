import Logo from '../../../../assets/Logo.png'
import googleLogo from '../../../../assets/Group.png'
import './Form.css'
function Form() {
  return (
    <section className="form-container">
      <img src={Logo} alt="Notes-logo" />
      <button className='google-login-btn'>
        <img src={googleLogo} alt="" />
        <span className='btn-text'>join with Google</span>
      </button>
    </section>
  )
}

export default Form

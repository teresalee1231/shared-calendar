import './style.css'

function Login() {
  return(
    <>
      <form>
        <p>Login</p>

        <div className="input-box">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder='Enter email'
          />
        </div>

        <div className="input-box">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder='Enter password'
          />
        </div>

        <div className="input-check">
          <input
            type="checkbox"
            className="custom-control-input"
            id="check1"
          />
          <label className="custom-control-label" htmlFor='check1'>
            Remember me
          </label>
        </div>

        <div className="submit-button">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>

      </form>
    </>
  )
}

export default Login
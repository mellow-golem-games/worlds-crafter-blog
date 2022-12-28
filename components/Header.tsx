const Header = () => {
  return (
    <div className="Home__navWrapper">
      <div className="Home__navWrapper__inner">
        <h1 style={{color: "white", fontSize: "2rem"}}><a href="/">WorldsCrafter</a></h1>
        <div className="Home__navWrapper__nav">
          <div className="Bars mobile-only">
            <div className="Bars__bar bar1"></div>
            <div className="Bars__bar bar2"></div><div className="Bars__bar bar3"></div></div>
            <ul className="no-mobile">
              <li><a href="#">Sign Up</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">News</a></li>
              <li><button className="Button">Dashboard</button></li></ul></div></div>
              <ul className="mobile-only mobileMenu"><a href="#"><li>Sign Up</li></a><a href="#"><li>Login</li></a><a href="#"><li>Pricing</li></a><a href="#"><li>News</li></a><li><button className="Button">Dashboard</button></li></ul></div>
  )
}

export default Header;
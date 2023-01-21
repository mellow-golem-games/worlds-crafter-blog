const Header = () => {
  return (
    <div className="Home__navWrapper">
      <div className="Home__navWrapper__inner">
        <h1 style={{color: "white", fontSize: "2rem"}}><a href="/">WorldsCrafter <span style={{fontSize: "1rem"}}>Blog</span></a></h1>
        <div className="Home__navWrapper__nav">
            <ul className="">
              <li><a href="https://www.worldscrafter.com">App</a></li>
              <li><a href="/">News</a></li>
              </ul>
            </div>
            </div>
              <ul className="mobile-only mobileMenu"><a href="https://www.worldscrafter.com"><li>App</li></a><a href="/"><li>News</li></a></ul></div>
  )
}

export default Header;
import Areas from "./layouts/Areas"
import Footer from "./layouts/Footer"
import Header from "./layouts/Header"
import Main from "./layouts/Main"
import News from "./layouts/News"
import Services from "./layouts/Services"
import Team from "./layouts/Team"
import Testimonals from "./layouts/Testimonals"
import Trending from "./layouts/Trending"
import WhoAreWe from "./layouts/WhoAreWe"

function App() {

  return (
    <div className="wrapper">
      <Header />
			<Main />
			<WhoAreWe />
			<News />
			<Services />
			<Areas />
			<Team />
			<Trending />
			<Testimonals />
			<Footer />
    </div>
  )
}

export default App

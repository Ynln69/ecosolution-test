import About from "./About/About";
import Cases from "./Cases/Cases";
import Contacts from "./Contacts/Contacts";
import Electricity from "./Electricity/Electricity";
import Questions from "./FAQ/Questions";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Electricity />
      <Cases />
      <Questions />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;

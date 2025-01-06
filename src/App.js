import Section1 from "./section1/Section1";
import BlogSection from "./section2/BlogSection";
import Header from "./Header";
import PreHeader from "./PreHeader";
import Section3 from "./section3/Section3";
function App() {
  return (
    <>
      <PreHeader />
      <hr className="border-primary" />
      <Header />
      <Section1 />
      <Section3 />
      <BlogSection />
    </>
  );
}
export default App;

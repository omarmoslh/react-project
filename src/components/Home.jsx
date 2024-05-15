import banner from "../assets/banner.png"
import Banner from "../shared/Banner";
const Home = () => {
  return (
    <div className="md:px-12 p-4 mx-auto mt-24" id="home">
      <Banner banner={banner} heading="Medicaid CRM for small businesses." subheading="Streamline Medicaid patient management with Tflorentina: Delivering
              efficiency, accuracy, and better patient care." btn1={"Get Started"} btn2={"Discount"} />
    </div>
  );
};

export default Home;

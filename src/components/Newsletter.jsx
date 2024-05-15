import Banner from "../shared/Banner";
import BannerImg from "../assets/newsletter.png";
const Newsletter = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
      <Banner
        banner={BannerImg}
        heading="The world’s best companies trust Tflorentina"
        subheading="”I've been using the Tflorentina CRM product for over a year now, and it has completely transformed the way our clinic manages patient information and interactions.” - Sarah Johnson MD"
        btn1={"Get Started"}
      />
    </div>
  );
};

export default Newsletter;

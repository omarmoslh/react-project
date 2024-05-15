import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
const Footer = () => {
  return (
    <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3 text-white"
          >
            TFLORENTINA
          </a>
          <p className="md:w-1/2">
            Delivering efficiency, accuracy, and better patient care.
          </p>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"
            />
            <input
              type="submit"
              value="Subscribe"
              className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all"
            />
          </div>
        </div>
        {/* footer navigations */}
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className="space-y-4 mt-5">
            <h4 className="text-xl font-medium">Platform</h4>
            <ul className="space-y-3">
              <a href="" className="block hover:text-gray-300">
                Home
              </a>
              <a href="" className="block hover:text-gray-300">
                Features
              </a>
              <a href="" className="block hover:text-gray-300">
                About
              </a>
              <a href="" className="block hover:text-gray-300">
                Pricing
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl font-medium">Resources</h4>
            <ul className="space-y-3">
              <a href="" className="block hover:text-gray-300">
                Blog
              </a>
              <a href="" className="block hover:text-gray-300">
                FAQ
              </a>
              <a href="" className="block hover:text-gray-300">
                Support
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl font-medium">Legal</h4>
            <ul className="space-y-3">
              <a href="" className="block hover:text-gray-300">
                Terms and Conditions
              </a>
              <a href="" className="block hover:text-gray-300">
                Cookie Policy
              </a>
              <a href="" className="block hover:text-gray-300">
                Privacy Policy
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl font-medium">Contacts</h4>
            <ul className="space-y-3">
              <p className="">support@tflorentina.com</p>
            </ul>
          </div>
        </div>
      </div>

      <hr />
      <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between pt-8 ">
        <p className=" text-slate-500">Copyright © Tflorentina 2024. All Rights Reserved.</p>
        <div className="flex items-center space-x-5">
          <a href=""><CiFacebook className="size-6 cursor-pointer hover:-translate-y-4 transition-all duration-300" /></a>
          <a href=""><CiInstagram className="size-6 cursor-pointer hover:-translate-y-4 transition-all duration-300" /></a>
          <a href=""><CiTwitter className="size-6 cursor-pointer hover:-translate-y-4 transition-all duration-300" /></a>
          <a href=""><CiLinkedin className="size-6 cursor-pointer hover:-translate-y-4 transition-all duration-300" /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

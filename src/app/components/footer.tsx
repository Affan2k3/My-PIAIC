import React from 'react';



const Footer = () => {
  return (
    <footer className="bg-custom-100 text-white">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4 px-4">
            <h3 className="font-bold text-lg mb-2">Navigation</h3>
            <ul>
            <li>
                <a href="https://www.piaic.org/">
                
                  Home
                </a>
              </li>
              <li>
                <a href="https://portal.piaic.org/signup">
                  Apply
                </a>
              </li>
              <li>
                <a href="https://www.piaic.org/howitworks">
                  How it works
                </a>
              </li>
              <li>
                <a href="https://www.piaic.org/artificial-inteligence">
                  Artificial Intelligence
                </a>
              </li>
              <li>
                <a href="https://www.piaic.org/cloud-native">
                  Cloud Native and Mobile Web Computing
                </a>
              </li>
              <li>
                <a href="https://www.piaic.org/block-chain">
                  Blockchain
                </a>
              </li>
              <li>
                <a href="https://www.piaic.org/iot">
                  Internet of Things and AI
                  
                </a>
              </li>
              <li>
                <a href="https://www.piaic.org/about">
                  {/* <FaInstagram className="w-5 h-5 mr-2 inline-block" /> */}
                  About The President
                </a>
              </li>
              <li>
                <a href="https://www.piaic.org/managementcommittee">
                  
                  Management Committee
                </a>
              </li>
              <li>
                <a href="https://www.piaic.org/wit">
                  
                  Women Inclusion in Technology (WIT)
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 px-4">
            <h3 className="font-bold text-lg mb-2">Contact Us</h3>
            <ul>
              <li>PIAIC Helpline</li>
              <br />
              <li>+92-308-2220203 (WhatsApp as well)</li>
              <br />
              <li><h3 className="font-bold text-lg mb-2">Social Media</h3></li>
              <li>
                <a href="https://www.facebook.com/piaic">
                  Facebook
                  
                </a>
              </li>
              
              <li><a href="https://twitter.com/piaicofficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                  Twitter
                  
                </a></li>
                <li><a href="https://www.youtube.com/@panaverse">
                  Youtube
                  
                </a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
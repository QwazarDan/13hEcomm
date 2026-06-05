import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div>
          <div>
            <Logo />
            <p>
              Discover curated furniture collections at Shopcaryt, bleending
              style and comfort to elevate your living spaces.
            </p>
            <SocialMedia
              className="text-darkColor/60"
              iconClassName="border-darkColor/60 hover:border-shop_light_green hover:text-shop_light_green"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>j
      </Container>
    </footer>
  );
};

export default Footer;

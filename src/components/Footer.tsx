import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="position-fixed end-50 bottom-0"
      style={{ transform: "translateX(50%)" }}
    >
      <h4>
        Powered by{" "}
        <Image src="/vercel.svg" alt="Logo Vercel" width={100} height={100} />
      </h4>
    </footer>
  );
};

export default Footer;

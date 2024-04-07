const Footer = () => {
  return (
    <div className="w-full h-20 bg-primary text-white flex justify-between items-center px-8">
      <h2>&copy;{"Andy Caseres"} Todos los derechos reservados.</h2>
      <h3>
        By{" "}
        <a
          className="text-white font-bold hover:scale-105 hover:text-primary-red-300 transition-all"
          href="https://www.linkedin.com/in/andy-caseres/"
          target="_blank"
          rel="noreferrer"
        >
          Andy Caseres
        </a>
      </h3>
    </div>
  );
};

export default Footer;

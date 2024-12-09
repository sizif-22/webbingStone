const Button = ({ name, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#FF6C01] hover:bg-[#e85a00] text-white font-semibold px-6 py-2 rounded-lg shadow-md"
    >
      {name}
    </a>
  );
};
export default Button;

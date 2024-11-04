const Heading = ({ title, subTitle }) => {
  return (
    <div>
      <p className="text-xs md:tex-sm lg:text-medium">{title}</p>
      <h3 className="text-sm md:text-lg lg:text-2xl font-extrabold">
        {subTitle}
      </h3>
    </div>
  );
};
export default Heading;

const BannerSlider = ({ banner }) => {
  return (
    <div className="Banner__slider flex gap-4 overflow-x-scroll no-scrollbar">
      {banner?.map((item) => (
        <img src={item?.banner_image} alt={item?.banner_name} />
      ))}
    </div>
  );
};
export default BannerSlider;

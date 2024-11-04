import { useNavigate } from "react-router-dom";

const BilingsCardMenu = ({ services }) => {
  const navigate = useNavigate();

  const handleCardMenuClick = (service) => {
    navigate("/transaction", { state: service });
  };

  return (
    <div className="BilingsCard__card grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 services-start gap-6 md:gap-8 lg:gap-10">
      {services?.map((service) => (
        <div
          onClick={() => handleCardMenuClick(service)}
          key={service?.service_name}
          className="flex flex-col  services-center cursor-pointer hover:scale-110"
        >
          <img src={service?.service_icon} alt={service?.service_name} />
          <p className="text-[9px] xl:text-xs text-center mt-2 ">
            {service?.service_name}
          </p>
        </div>
      ))}
    </div>
  );
};
export default BilingsCardMenu;

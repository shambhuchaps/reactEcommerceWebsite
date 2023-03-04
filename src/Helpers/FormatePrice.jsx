
const FormatePrice = ({price}) => {
  return Intl.NumberFormat("ne-NP",{
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(price/100);
  
};

export default FormatePrice
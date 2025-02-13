import { loveMessages } from "@/constants/lovemessage";

const Lovemessage = () => {
  return (
    <div className="p-5 flex text-center items-center justify-center leading-[2.2rem] text-xl font-parisienne tracking-[0] whitespace-pre text-[#2b2222]">
      {loveMessages.map((message, index) => (
        <p
          key={index}
          className="tracking-[1.5px] font-parisienne text-[#2b2222]"
        >
          {message.value}
        </p>
      ))}
    </div>
  );
};
export default Lovemessage;

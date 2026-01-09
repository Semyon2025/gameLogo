import Subscribe from "@app/home/subscribe/subscribe";
import HeroContacts from "./HeroContacts/Herocontacts";
import Mail from "./Mail/mail";



export const Contacts = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="GeneralContainer">
          
        
          
        </div>
        <HeroContacts/>
        <Mail />
        <Subscribe />
      </div>
    </div>
  );
};
import { CardContent } from '@/components/ui/card';
import AccountDropDown from '@/pages/BlessingMoney/components/AccountDropDown';
import BlessingContent from '@/pages/BlessingMoney/components/BlessingContent';
import BlessingTitle from '@/pages/BlessingMoney/components/BlessingTitle';

const BlessingMoney = () => {
  return (
    <CardContent className="px-5 py-10 text-center ">
      <BlessingTitle />

      <BlessingContent>
        <AccountDropDown type="groom" />
        <AccountDropDown type="bride" />
      </BlessingContent>
    </CardContent>
  );
};

export default BlessingMoney;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { brideAccount, groomAccount } from '@/constants/account';
import { Files } from 'lucide-react';

interface AccountType {
  type: 'groom' | 'bride';
}

const AccountDropDown = ({ type }: AccountType) => {
  const title = type === 'groom' ? '신랑측 계좌번호' : '신부측 계좌번호';
  const accounts = type === 'groom' ? groomAccount : brideAccount;

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        className: 'bg-gray-50',
        description: '복사가 완료되었습니다!',
      });
    } catch (error) {
      console.log('복사 실패', error);
      toast({
        variant: 'destructive',
        description: '복사에 실패했습니다. 다시 시도해주세요.',
      });
    }
  };

  return (
    <Accordion type="single" collapsible className="w-full pb-4">
      <AccordionItem value="groom">
        <AccordionTrigger className="w-full px-4 border rounded-lg bg-gray-50">
          <div className="flex flex-grow w-full items-center justify-center">
            {title}
          </div>
        </AccordionTrigger>
        {accounts.map((account, index) => (
          <AccordionContent className="w-full px-2" key={index}>
            <div className="flex flex-row justify-between w-full font-pretendard">
              <div className="flex flex-col flex-grow text-left">
                <div>
                  {account.name}
                  <span className="text-gray-300"> | </span>
                  {account.bank}
                </div>
                <div className="pt-2">{account.accountNumber}</div>
              </div>
              <Button
                variant="outline"
                className="h-auto"
                onClick={() => handleCopyClipBoard(account.accountNumber)}
              >
                <Files size={16} className="mr-2" />
                복사
              </Button>
            </div>
          </AccordionContent>
        ))}
      </AccordionItem>
    </Accordion>
  );
};

export default AccountDropDown;

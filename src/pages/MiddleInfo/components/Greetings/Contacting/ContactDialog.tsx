import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import ContactItem from '@/pages/MiddleInfo/components/Greetings/Contacting/ContactItem';
import { DialogTitle, DialogClose } from '@radix-ui/react-dialog';
import { contactInfo } from '@/constants/contactInfo';
import { X } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Fragment } from 'react/jsx-runtime';

const ContactDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">연락하기</Button>
      </DialogTrigger>
      {/* DialogContent를 화면 중앙에 배치 */}
      <DialogContent className="fixed inset-0 flex items-center justify-center">
        <div className="w-[300px] md:w-[400px] p-6 bg-white shadow-lg rounded-lg border border-gray-200">
          {/* 닫기 버튼 */}
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-semibold">
              연락하기
            </DialogTitle>
            <DialogClose asChild>
              <button
                aria-label="Close"
                className="text-gray-500 hover:text-gray-800"
              >
                <X size={20} />
              </button>
            </DialogClose>
          </div>
          <div className="pt-2">
            <Separator orientation="horizontal" />
          </div>

          {/* 연락처 목록 */}
          <div className="mt-2 space-y-2">
            {contactInfo.map((contact, index) => (
              <Fragment key={index}>
                <ContactItem key={index} {...contact} />
                {!contact.isBride &&
                  index < contactInfo.length - 1 &&
                  contactInfo[index + 1].isBride && (
                    <Separator orientation="horizontal" />
                  )}
              </Fragment>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;

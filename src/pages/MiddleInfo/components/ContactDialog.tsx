import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import ContactItem from '@/pages/MiddleInfo/components/ContactItem';
import { DialogTitle, DialogClose } from '@radix-ui/react-dialog'; // ✅ Radix UI에서 직접 import
import { contactInfo } from '@/constants/contactInfo';
import { X } from 'lucide-react'; // X 버튼 아이콘

const ContactDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">연락하기</Button>
      </DialogTrigger>
      <DialogContent className="w-[300px] md:w-[400px] p-6 bg-white relative">
        {/* 커스텀 닫기 버튼 추가 (이렇게 하면 기본 닫기 버튼이 없어짐) */}
        <div className="flex items-center justify-between">
          <DialogTitle className="text-lg font-semibold">연락하기</DialogTitle>
          <DialogClose asChild>
            <button
              aria-label="Close"
              className="text-gray-500 hover:text-gray-800"
            >
              <X size={20} />
            </button>
          </DialogClose>
        </div>

        {/* 연락처 목록 */}
        <div className="mt-4 space-y-2">
          {contactInfo.map((contact, index) => (
            <ContactItem key={index} {...contact} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;

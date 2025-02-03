import { ContactInfoType } from '@/types/index';
import { Phone, MessageSquare } from 'lucide-react';

const ContactItem = ({
  role,
  name,
  phone,
  sms,
  isBride = false,
}: ContactInfoType) => {
  return (
    <div
      className={`flex justify-between items-center p-2 rounded-md ${
        isBride ? 'text-red-500' : 'text-blue-500'
      }`}
    >
      <div className="flex items-center flex-1 space-x-2">
        <span className="font-medium">{role}</span>
        <span className="flex-1 text-gray-700">{name}</span>
      </div>
      <div className="flex space-x-2">
        {phone && (
          <a
            href={`tel:${phone}`}
            className="text-gray-600 hover:text-gray-800"
          >
            <Phone size={18} />
          </a>
        )}
        {sms && (
          <a href={`sms:${sms}`} className="text-gray-600 hover:text-gray-800">
            <MessageSquare size={18} />
          </a>
        )}
      </div>
    </div>
  );
};
export default ContactItem;

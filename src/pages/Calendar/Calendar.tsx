import { CardContent } from '@/components/ui/card';
import CalendarContent from '@/pages/Calendar/components/CalendarContent';
import CountDown from '@/pages/Calendar/components/CountDown';

const Calendar = () => {
  return (
    <CardContent className="p-0 py-10 text-center bg-gray-50">
      <CalendarContent />

      <CountDown />
    </CardContent>
  );
};

export default Calendar;

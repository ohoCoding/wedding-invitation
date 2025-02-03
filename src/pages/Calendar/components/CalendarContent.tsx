import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const days = ['일', '월', '화', '수', '목', '금', '토'];

const CalendarContent = () => {
  const firstDay = new Date(2025, 3, 1).getDay(); // 화요일 = 2
  const lastDate = new Date(2025, 4, 0).getDate(); // 30일

  const dates = Array(firstDay)
    .fill(null)
    .concat([...Array(lastDate)].map((_, i) => i + 1));

  return (
    <div className="w-full h-full leading-9">
      <div className="font-medium text-2xl tracking-wide">2025.04.05</div>
      <div className="mb-5">토요일 오후 3시</div>

      <div className="text-center px-10 pb-10">
        <Table className="">
          <TableHeader>
            <TableRow>
              {days.map((day, index) => (
                <TableHead
                  key={index}
                  className={
                    day === '일' ? 'text-[#c6472b] text-center' : 'text-center'
                  }
                >
                  {day}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: Math.ceil(dates.length / 7) }, (_, week) => (
              <TableRow key={week}>
                {dates.slice(week * 7, (week + 1) * 7).map((date, i) => (
                  <TableCell
                    key={i}
                    className={
                      (i === 0 ? 'text-[#c6472b]' : '') ||
                      (date === 5 ? 'bg-[#858585] text-white rounded-full' : '')
                    }
                  >
                    {date || ''}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CalendarContent;

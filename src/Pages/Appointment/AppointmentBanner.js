import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date, setDate}) => {
    

    let footer = <p>please pick a day</p>
    if (date) {
        footer = <p className='font-bold'>You picked {format(date, 'PP')}.</p>
    }
    return (
        <div
         style={{
            background: `url(${bg})`
         }}
        >
            <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="max-w-lg rounded-lg shadow-2xl" />
    <div>
    <DayPicker
      mode="single"
      selected={date}
      onSelect={setDate}
      footer={footer}
    />
    </div>
  </div>
</div>
        </div>
    );
};

export default AppointmentBanner;
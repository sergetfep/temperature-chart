// import moment from 'moment';
import React from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

export const Inputs = (props) => {
  return (
    <div className="flex inputs">
      <FilterLocation
        location={props.location}
        setLocation={props.setLocation}
      />
      <Calendar />
    </div>
  );
};

const FilterLocation = (props) => {
  return (
    <input
      type="text"
      name="location"
      placeholder="Enter location"
      onChange={(e) => props.setLocation(e.currentTarget.value)}
    ></input>
  );
};

// const Calendar = () => {
//   return <input type="text" name="date" placeholder="date"></input>;
// };

// [] -> {days: []} -> { data: { days:[] } }

// {
//     data: { startDate: new Date(), endDate: new Date(), key: 'selection' },
//   }

const Calendar = () => {
  let [selection, setSelection] = React.useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  let handleSelect = (ranges) => {
    console.log('ranges', ranges);
    console.log('selection', selection);

    // let vb = moment().subtract(10, 'days').calendar();
    // let vb = new Date();
    // console.log('vb', vb);

    // console.log(
    //   'moment - tomorrow',
    //   moment(vb.setDate(vb.getDate() + 1)).format('L')
    // );

    // setSelection(ranges.selection);
    // setSelection({ selection, ...ranges.selection });
    // setSelection({ ...ranges.selection, selection });
    setSelection({ ...selection, ...ranges.selection });
    // setSelection({ ...selection, ...ranges.selection });  тогда в selection будет предыдущее выбранное значение
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  };

  //   const selectionRange = {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: 'selection',
  //   };
  return <DateRangePicker ranges={[selection]} onChange={handleSelect} />;
};

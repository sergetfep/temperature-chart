// import React from 'react';

// export const Chart = () => {
//   return <div className="Chart"></div>;
// };

import React from 'react';
import { Chart } from 'react-charts';

export function MyChart() {
  // let [hidden, setHidden] = useState(true);

  const data = React.useMemo(
    () => [
      [
        [1, 10],
        [2, 10],
        [3, 10],
      ],
      [
        [1, 10],
        [2, 10],
        [3, 10],
      ],
      [
        [1, 10],
        [2, 10],
        [3, 10],
      ],
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    []
  );

  return (
    <div
      style={{
        // background-color: 'white',
        width: '400px',
        height: '300px',
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  );
}

// export const GenericComponent = (props) => {

//   return (
//     <div
//       className="wrapper-component"
//       //   onClick={() => setHidden(!hidden)}
//     >
//       <h1>{props.myElement(hidden, setHidden)}</h1>
//       <div className={`generic-component ` + (hidden ? 'hidden' : '')}>
//         {props.children}
//       </div>
//     </div>
//   );
// };

// .wrapper-component {
//   position: relative;
// }

// .generic-component {
//   position: absolute;
//   top: 100%;
//   right: 0;
//   background-color: red;
//   padding: 1rem;
// }

// .generic-component.hidden {
//   display: none;
// }

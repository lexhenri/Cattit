import React from 'react';
import SpinLogo from '../../../app/assets/images/cattit_logos/cattit_logo.svg'

function Spinner({loading}) {
  if (!loading) return null;

  let speed = 5;

  return (
    <div className='spinner-background'>
    <div className='spinner-container'>
      <img
        src={SpinLogo}
        style={{ animation: `spin ${speed}s linear infinite` }}
        className='spinner'
        alt="Loading..." />
        </div>
    </div>
  )
}

export default Spinner;



// export const LoadingSpinner = () => (
//   <div>
//     <i className="fa fa-spinner fa-spin" /> Posting...
//       </div>
// );



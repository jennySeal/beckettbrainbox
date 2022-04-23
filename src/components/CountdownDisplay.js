import Countdown from "react-countdown"
import TimesUp from "./TimesUp";
import { memo } from "react";

const renderer = ({minutes, seconds, completed}) => {
    if (completed) {
      return <TimesUp/>;
    } else {
      console.log({seconds})
      if (seconds < 10) {
        return <p>0{minutes}:0{seconds}</p>
      } else {
      
      return <p>0{minutes}:{seconds}</p>
    }}
  };


const CountdownDisplay = () => {


return (
    <div  className='countdown'>
    <h3>Time left</h3>
    <Countdown date={Date.now() + 300000} renderer={renderer}>
    <TimesUp/>
    </Countdown></div>
)
}
export default memo(CountdownDisplay);
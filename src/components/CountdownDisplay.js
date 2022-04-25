import Countdown from "react-countdown"
import TimesUp from "./TimesUp";
import { memo } from "react";

const renderer = ({minutes, seconds, completed}) => {
    if (completed) {
      return <TimesUp/>;
    } else {
      if (seconds < 10) {
        return <span>0{minutes}:0{seconds}</span>
      } else {
      
      return <span>0{minutes}:{seconds}</span>
    }}
  };


const CountdownDisplay = () => {


return (
    <div  className='countdown'>
    <h3>Time left:&nbsp; 
    <Countdown date={Date.now() + 300000} renderer={renderer}>
    <TimesUp/>
    </Countdown></h3></div>
)
}
export default memo(CountdownDisplay);
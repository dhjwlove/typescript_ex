import { useEffect, useRef } from "react";
import Countdown, {CountdownHandle} from "./Countdown";

function CountdownEx() {
    const countdownEl = useRef<CountdownHandle>(null);

    useEffect(() => {
        if(countdownEl.current) {
            countdownEl.current.start();
        }
    }, [])

    return <Countdown ref={countdownEl}/>
}

export default CountdownEx
import { forwardRef, useImperativeHandle } from "react";

export type CountdownHandle = {
    start: () => void;
}

type CountdownProps = {};

const Countdown = forwardRef<CountdownHandle, CountdownProps>((props, ref) => {
    useImperativeHandle(ref, () => ({
        start() {
            alert("Start");
        }
    }))

    return <div>Countdown</div>
});

export default Countdown
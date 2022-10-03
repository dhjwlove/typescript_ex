import { useEffect, useRef } from "react";

export default function Foo() {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(!divRef.current) throw Error("divRef is not assigned");

        console.log(divRef.current)
    })

    return <div ref={divRef}>etc</div>;
}
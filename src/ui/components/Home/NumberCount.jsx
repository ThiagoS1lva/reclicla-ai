import { useSpring, animated } from 'react-spring';

function NumberCounter({ number }) {
    const { value } = useSpring({
        from: { value: 0 },
        to: { value: number },
        config: { duration: 1200 }
    });

    return (
        <animated.span>{value.interpolate(val => Math.floor(val))}</animated.span>
    );
}
export default NumberCounter
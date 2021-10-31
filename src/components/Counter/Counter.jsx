import React, { useState, useEffect, useCallback } from 'react';

export const Counter = ({ text }) => {
    const [count, setCount] = useState(0);

    const handleCliCk = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
        console.log(text);
    }, [text]);

    // useEffect(() => {
    //     console.log('=-=-=-=-=- like did mount, + did update - no array');
    // });

    useEffect(() => {
        console.log('=-=-=-=-=- like did mount + count changed, [count]');
    }, [count]);

    useEffect(() => {
        console.log('=-=-=-=-=- like did mount + text changed, [text]');
    }, [text]);

    // useEffect(() => {
    //     console.log('=-=-=-=-=- like did mount, []');
    // }, []);

    useEffect(() => {
        const interval = setInterval(() => setCount(prevCount => prevCount + 1), 1500);

        console.log('=-=-=-=-=- like did mount, []');

        return () => {
            clearInterval(interval);
            console.log('unmounting');
        };
    }, []);


    return (
        <div>
            <h3>{count}</h3>
            <h3>{text}</h3>
            <button onClick={handleCliCk}>Click!</button>
        </div>
    );
};

// export class Counter extends React.Component {
    

//     constructor(props) {
//         super(props);

//         this.state = {
//             count: 0,
//             name: 'Alex'
//         };

//         console.log('------constructor------');
//     }

//     componentDidMount() {
//         console.log('------did mount------');
        
//     }

//     componentDidUpdate(prevProps, prevState,) {
//         console.log('------did update------', prevProps, prevState);
//     }

//     componentWillUnmount() {
//         console.log('------will unmount------');
//     }


//     handleCliCk = () => {
//         this.setState(prevState => ({ count: prevState.count + 1 }),
//         () => {
//             console.log(this.state.count)
//         });
//     };

//     render() {
//         console.log('------render------');

//         return (
//             <div>
//                 <h3>{this.state.count}</h3>
//                 <h3>{this.state.name}</h3>
//                 <button onClick={this.handleCliCk}>Click!</button>
//             </div>
//         );
//     }
// }
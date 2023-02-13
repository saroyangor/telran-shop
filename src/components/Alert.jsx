import React, {useEffect} from 'react';

const Alert = (props) => {
    const { text = '', closeAlert = Function.prototype } = props

    useEffect(() => {
        const timer = setTimeout(closeAlert, 3000)

        return () => {
            clearTimeout(timer)
        }
    }, [text])

    return (
        <div id="toast-container">
            <div className="toast">{text}</div>
        </div>
    );
};

export default Alert;
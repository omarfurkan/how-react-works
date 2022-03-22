import React from 'react';
import DeviceDetail from '../DeviceDetail/DeviceDetail';
import Watch from '../Watch/Watch';

const Device = (props) => {
    return (
        <div>
            <h2>I have:{props.name} </h2>
            <DeviceDetail price={props.price}></DeviceDetail>
            <Watch></Watch>
        </div>
    );
};

export default Device;
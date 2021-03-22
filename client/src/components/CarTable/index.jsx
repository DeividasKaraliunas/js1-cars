import React, { Component } from 'react';
import classes from './styles.module.css';

export class CarTable extends Component {

    createDataRows = (cars) =>
        cars.map(({ id, brand, model, year, engineVolume }) => {
            <tr key={id}>
                <td>{brand}</td>
                <td>{model}</td>
                <td>{year}</td>
                <td>{engineVolume}</td>
                <td>
                    <button className={classes.Button} onClick={() => this.props.editCar(id)}></button>
                    <button className={classes.Button} onClick={() => this.props.deleteCar(id)}></button>
                </td>
            </tr>
        })


    render() {
        const { cars } = this.props;
        const rows = this.createDataRows(cars);
        return (
            <div>
                {cars.length === 0
                    ? <h2>Nera masinu</h2>
                    : <table className={classes.Table}>
                        <thead>
                            <tr>
                                <th>Brand</th>
                                <th>Model</th>
                                <th>Year</th>
                                <th>Engine Volume</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                }
            </div>
        )
    }
}

export default CarTable

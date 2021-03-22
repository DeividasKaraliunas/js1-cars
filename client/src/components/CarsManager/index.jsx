import React, { Component } from 'react'

import API from '../../api'
import CarTable from '../CarTable'
import FormCreateCar from '../FormCreateCar'
import classes from './styles.module.css'

export class CarsManager extends Component {
    state = {
        cars: [],
        errMsg: null
    }

    displayError = errMsg => {
        console.log(errMsg)
        this.setState({ errMsg })
    }

    fetchCars = () => {
        API.getCars(
            ({ cars }) => this.setState({ cars }),
            this.displayError
        )
    }

    componentDidMount() {
        this.fetchCars()
    }
    render() {
        const { editedCarId } = this.state;
        return (
            <div className={classes.Grid}>
                <CarTable
                    cars={this.state.cars}
                    deleteCar={this.deleteCar}
                    editCar={this.editCar}
                />
                <FormCreateCar
                    handleSubmit={editedCarId ? this.saveCar : this.createCar}
                    isUpdating={Boolean(editedCarId)}
                    editedCar={editedCarId ? this.state.cars.find(c => c.id === editedCarId) : null}
                />
            </div>
        )
    }
}

export default CarsManager

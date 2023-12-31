import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../../context/AppData'
import CustomerTR from './CustomerTR';
import AddCutomer from './AddCutomer';
import { NavLink } from 'react-router-dom';

const CustomersTable = () => {
    const { customers } = useContext(DataContext);

    const renderedCustomers = customers.map((customer) => {
        return <CustomerTR customer={customer} />
    })
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">Customers</h4>
                                    <div>
                                        <NavLink to='/Add-Customer'>
                                            <a className="btn btn-primary btn-sm" role="button">+ Add Customer</a>
                                        </NavLink>
                                    </div>
                                </div>
                                <table id="empoloyees-tblwrapper" className="table">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className="form-check custom-checkbox ms-2">
                                                    <input type="checkbox" className="form-check-input" id="customCheckBox2" required="" />
                                                    <label className="form-check-label" htmlFor="customCheckBox2"></label>
                                                </div>
                                            </th>
                                            <th>Customer Name </th>
                                            <th>Contact Name</th>
                                            <th>Contact Company </th>
                                            <th>Contact E-mail</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderedCustomers}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default CustomersTable

import React from 'react'
import { NavLink } from 'react-router-dom'

const ServiceRequestTR = ({ record, onClick }) => {


    const handleClick = () => {
        onClick();
    }
    return (
        <tr className='serviceRequestRecords'>
            <td>
                <div className="form-check custom-checkbox ms-2">
                    <input type="checkbox" className="form-check-input" id="customCheckBox2" required="" />
                    <label className="form-check-label" htmlFor="customCheckBox2"></label>
                </div>
            </td>
           
            {/* <td>
                <span className="badge light badge-light">
                    {record.type}
                </span>
            </td> */}
        
            <td>{record.customer}</td>
            <td>{record.assign}</td>
            <td onClick={handleClick}>
                <NavLink to={`service-request${record.ID}`} style={{ display: 'contents' }}>
                    {record.ID}
                </NavLink>
            </td>
            <td>{record.status}</td>
            <td>{record.workRequested}</td>
            <td>
              
                {record.created}
            </td>
            <td>{record.proposalNo}</td>
          
        </tr>
    )
}

export default ServiceRequestTR

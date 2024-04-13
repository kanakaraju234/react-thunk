import React from 'react';
import './BookingRequest.css';

const BookinRequest = () => {
  return (
    <div className='row  container-fluid ' style={{height:'100%',width:'100%'}} >
    <div className='shadow col-10 rounded  m-2 w-100 h-25 bg-light d-flex justify-content-between'>
    <div className='p-4'>
       <h1>Master Booking</h1>
       <p>please select booking to see requests</p>
    </div>
    <div>
    <button className='bi bi-plus-circle float-end  mt-5  p-2 text-light rounded border border-0'
     style={{backgroundColor:'blue',}}>&nbsp;Create Master Booking</button>
    </div>
    </div>
{/* second-one */}
<div className='m-2 border-0 rounded bg-light overflow-hidden' style={{height:'100vh'}}>
<div className='mt-3 d-flex justify-content-between'>
   <div className='input-group mt-4 '>
    <button className='bi bi-search btn border border-1'></button>
 <input type="text" className='form-control me-2 '  style={{width:'800px',height:'50px'}} />
   </div>
  <span>Page Size <input type="text" className='form-control me-3' placeholder='10'
 style={{width:'100px',height:'50px'}} /></span>
   <input type="text" className='  bi bi-filter form-control mt-4'  value='filter' style={{width:'70px',height:'50px'}} />
</div>

{/* //3rd table */}
<div className='mt-4'>
  <table className='table table-hover'>
<thead>
  <tr>
    <th>Booking Reference</th>
    <th>Created Data</th>
    <th>Status</th>
    <th>Actions</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>MOJB05033</td>
    <td>01-4-2023</td>
    <td><button className='btn btn-outline-primary '>Active</button></td>
    <td><button className='btn btn-close'></button></td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td>MOJB05034</td>
    <td>02-4-2023</td>
    <td><button className='btn btn-outline-primary '>Active</button></td>
    <td><button className='btn btn-close'></button></td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td>MOJB05033</td>
    <td>03-4-2023</td>
    <td><button className='btn btn-outline-primary '>Active</button></td>
    <td><button className='btn btn-close'></button></td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td>MOJB05033</td>
    <td>04-4-2023</td>
    <td><button className='btn btn-outline-success '>Active</button></td>
    <td><button className='btn btn-close'></button></td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td>MOJB05033</td>
    <td>05-4-2023</td>
    <td><button className='btn btn-outline-success '>Active</button></td>
    <td><button className='btn btn-close'></button></td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td>MOJB05033</td>
    <td>06-4-2023</td>
    <td><button className='btn btn-outline-primary '>Active</button></td>
    <td><button className='btn btn-close'></button></td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td>MOJB05033</td>
    <td>07-4-2023</td>
    <td><button className='btn btn-outline-primary '>Active</button></td>
    <td><button className='btn btn-close'></button></td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td>MOJB05033</td>
    <td>08-4-2023</td>
    <td><button className='btn btn-outline-primary '>Active</button></td>
    <td><button className='btn btn-close'></button></td>
  </tr>
</tbody>
  </table>
</div>

</div>



    </div>
  )
}

export default BookinRequest
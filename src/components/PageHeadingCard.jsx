import React from 'react';

 export const PageHeadingCard = () => {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      borderRadius: '8px', 
      padding: '20px', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '1250px',
      margin: '0 auto',
      marginTop:'10px',
      marginBottom: '10px',
      display: "flex",
      alignItems: "center"
    }}>
      <div style={{ marginRight: "auto" }}>
            <p>Master Bookings</p>
            <p>Please select bookings to see requests</p>
        </div>
        <div>
            <button>+ Create Master Booking</button>
        </div>
    </div>
  );
};



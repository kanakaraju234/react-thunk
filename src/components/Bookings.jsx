export const Bookings = () => {
  return (
    <div>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "1250px",
          margin: "0 auto",
          marginTop: "10px",
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ marginRight: "auto" }}>
          <p style={{fontSize:'25px'}}>Master Bookings</p>
          <p style={{fontSize:'15px'}}>Please select bookings to see requests</p>
        </div>
        <div>
          <button style={{background:'#8a2be2',color:'white',border:"1px solid #8a2be2",borderRadius:'4px'}}>+ Create Master Booking</button>
        </div>
      </div>

      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "1250px",
          margin: "0 auto",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <div style={{marginBottom:'20px', display: "flex", alignItems: "center" }}>
          <form style={{ flex: "8" }}>
            <input
              style={{ marginTop: "20px", width: "800px" }}
              type="text"
              placeholder="Search and enter for data"
            />
          </form>
          <div
            style={{
              flex: "2",
              display: "flex",
              flexDirection: "column",
              marginLeft: "30px",
            }}
          >
            <label for="points">Page Size</label>
            <input
              style={{ maxWidth: "50%" }}
              type="number"
              id="points"
              name="points"
              step="1"
            />
          </div>

          <button style={{marginTop:'20px', flex: "1",border:"1px solid #c2c2c2",background:"white" }} type="submit">
            Filter
          </button>
        </div>
        <div style={{ marginTop: "10px" }}>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead style={{ background: "#dadada" }}>
              <tr>
                <th style={{ padding: "8px" }}>Booking Reference</th>
                <th style={{ padding: "8px" }}>Created date</th>
                <th style={{ padding: "8px" }}>Status</th>
                <th style={{ padding: "8px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "8px" }}> MOJB05033 </td>
                <td style={{ padding: "8px" }}>09-04-2024</td>
                <td style={{ padding: "8px" ,color:'#8a2be2'}}>Active</td>
                <td style={{ padding: "8px" }}>X</td>
              </tr>
              <tr>
                <td style={{ padding: "8px" }}>MOJB05032</td>
                <td style={{ padding: "8px" }}>08-04-2024</td>
                <td style={{ padding: "8px" ,color:'#8a2be2'}}>Active</td>
                <td style={{ padding: "8px" }}>X</td>
              </tr>
              <tr>
                <td style={{ padding: "8px" }}>MOJB05031</td>
                <td style={{ padding: "8px" }}>07-04-2024</td>
                <td style={{ padding: "8px" ,color:'	#009d17'}}>Complete</td>
                <td style={{ padding: "8px" }}></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

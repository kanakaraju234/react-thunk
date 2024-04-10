export const DataTable = ({ tableHeaders, renderData }) => {
  return (
    <table className="border table table-hover">
      <thead>
        <tr>
          {tableHeaders?.map((item) => (
            <th key={item.id}>{item.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>{renderData}</tbody>
    </table>
  );
};

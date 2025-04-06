
interface Props {
  config: any;
  data: any;
}

const Table = ({ config, data }: Props) => {
  const renderedRows = data.map((company: any) => {
    return (
      <tr className="hover" key={company.cik}>
        {config.map((val: any) => {
          return (
            <td
              className="p-4 text-center text-xs font-medium text-accent uppercase tracking-wider"
              key={val.label}
            >
              {val.render(company)}
            </td>
          );
        })}
      </tr>
    );
  });

  const renderedHeaders = config.map((col: any) => {
    return (
      <th
        key={col.label}
        className="p-4 text-center text-primary text-xs font-medium tracking-wider"
      >
        {col.label}
      </th>
    );
  });

  return (
    <>
    <div className="w-full flex mx-auto justify-center items-center">
      <div className="bg-neutral flex shadow rounded-lg p-4 overflow-x-auto w-full">
        <table className="table table-xs table-pin-rows table-pin-cols text-center">
          <thead>
            <tr>
              {renderedHeaders}
            </tr>
          </thead>
          <tbody>
              {renderedRows}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Table;

interface Props {
  config: any;
  data: any;
}

const RatioTile = ({ config, data }: Props) => {
  const renderedCells = config.map((row: any) => {
    return (
      <li className="py-6">
        <div className="flex items-center space-x-4">
          <div className="flex-1 min-w-0">
            <p className="text-lg text-primary font-medium upper">
              {row.label}
            </p>
            <p className="text-sm  truncate pl-2">
              <a
                href="/cdn-cgi/l/email-protection"
                className="__cf_email__"
                data-cfemail="17727a767e7b57607e7973646372653974787a"
              >
                {row.subTitle && row.subTitle}
              </a>
            </p>
          </div>
          <div className="inline-flex items-center font-bold text-accent text-lg pr-2">
            {row.render(data)}
          </div>
        </div>
      </li>
    );
  });


  return (
    <>
      <div className="w-full bg-neutral rounded-lg px-5">
      <ul className="divide-y">{renderedCells}</ul>
    </div>
    </>
  );
};

export default RatioTile;

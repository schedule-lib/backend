type address = {
  province: string;
  point: string;
  id: string;
};

type field = {
  label: string;
  type: string;
  document: string;
};

interface IServiceSerialDTO {
  name: string;
  required_field: field;
  addresses: address[];
  months: string[];
  start_hours: string;
  end_hours: string;
  on_weekends: boolean;
  agency_owner: string;
}
export { IServiceSerialDTO };

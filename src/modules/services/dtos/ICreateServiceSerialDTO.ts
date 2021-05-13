type address = {
  province: string;
  type: string;
  id: string;
};

type field = {
  label: string;
  type: string;
};

interface ICreateServiceSerialDTO {
  name: string;
  fields_to_fill: field[];
  addresses: address[];
  months: string[];
  start_hours: string;
  end_hours: string;
  on_weekends: boolean;
  agency_owner: string;
}
export { ICreateServiceSerialDTO };

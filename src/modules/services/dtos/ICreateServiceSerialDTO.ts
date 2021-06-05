type address = {
  province: string;
  point: string;
  id: string;
};

interface IServiceSerialDTO {
  name: string;
  addresses: address[];
  months: string[];
  start_hours: string;
  end_hours: string;
  on_weekends: boolean;
  agency_owner: string;
  total_people: number;
}
export { IServiceSerialDTO };

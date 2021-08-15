type address = {
  province: string;
  point: string;
  id: string;
};

interface IServiceSerialDTO {
  name: string;
  agency_owner: string;
  addresses: address[];
  months: string[];
  days: string[];
  start_hour: string;
  end_hour: string;
  total_people: number;
}
export { IServiceSerialDTO };

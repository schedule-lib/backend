interface ICreateServiceDTO {
  id?: string;
  name: string;
  agency_owner: string;
  addresses: string;
  months: string;
  start_hours: string;
  end_hours: string;
  on_weekends: boolean;
  total_people?: number;
  schedule?: string;
  scheduled_today?: string;
  date_months?: string;
}
export { ICreateServiceDTO };

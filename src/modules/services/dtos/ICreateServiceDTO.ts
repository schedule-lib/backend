interface ICreateServiceDTO {
  id?: string;
  name: string;
  agency_owner: string;
  addresses: string;
  months: string;
  days: string;
  start_hour: string;
  end_hour: string;
  total_people?: number;
  scheduling_times?: string;
  // MONTHS
  janeiro?: string;
  fevereiro?: string;
  marco?: string;
  abril?: string;
  maio?: string;
  junho?: string;
  julho?: string;
  agosto?: string;
  setembro?: string;
  outubro?: string;
  novembro?: string;
  dezembro?: string;
}
export { ICreateServiceDTO };

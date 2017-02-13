export interface Plan {
  id: number;
  title: string;
  description: string;
  optional: boolean;
};

export interface PlanGroup {
  id: string;
  title: string;
  description: string;
  mask: number;
  discount: number;
  plans: Plan[];
}

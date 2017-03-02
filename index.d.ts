export interface Plan {
    id: number;
    title: string;
    optional: boolean;
}
export interface PlanGroup {
    id: string;
    title: string;
    mask: number;
    discount: number;
    plans: Plan[];
}

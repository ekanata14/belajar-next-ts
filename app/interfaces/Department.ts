export interface Department {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface ApiResponse {
    code: number;
    status: boolean;
    message: string;
    data: Department[];
    errors: any[];
}
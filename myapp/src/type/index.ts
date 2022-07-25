export type CartType = {
    _id?: string;
    email?: string;
    productId?: string;
    quantity?: number;
    price?: number;
};

export type UserType = {
    email: string;
    password?: string;
    gender?: string;
    age?: string;
    role?: string;
};

export type ProductType = {
    _id: string;
    productName: string;
    price: string;
    imgUrl?: string;
};

export interface RouteApp {
    href: string;
    isPublic: boolean;
    element: JSX.Element;
}

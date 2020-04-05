import {ProductModelServer} from "./product.model";

export interface  CartModelServer { //for my angular front-end server
    /* this information will never leave the server */
    total: number;
    data : [{
        product: ProductModelServer,
        numInCart: number;

    }];
}

export  interface CartModelPublic { //this will be used as a reference for my localstorage or any thing that i send to the client (navigator)
    total:number;
    prodData: [
        {
            id:number;
            inCart: number
        }
        ];
}
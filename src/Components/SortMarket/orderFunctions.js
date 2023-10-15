export const alphabeticallyDesc = (a, b) => {
    if(a.name < b.name){
        return -1;
    }else if(a.name > b.name){
        return 1;
    };

    return 0;
};

export const alphabeticallyAsc = (a, b) => {
    if(a.name > b.name){
        return -1;
    }else if(a.name < b.name){
        return 1;
    };

    return 0;
};

export const byPriceDesc = (a, b) => {
    return Number.parseFloat(b.price) - Number.parseFloat(a.price);
};

export const byPriceAsc = (a, b) => {
    return Number.parseFloat(a.price) - Number.parseFloat(b.price);
};


export const byChangeDesc = (a, b) => {
    return  Number.parseFloat(b.change) - Number.parseFloat(a.change);
};

export const byChangeAsc = (a, b) => {
    return  Number.parseFloat(a.change) - Number.parseFloat(b.change);
};


export const byMarketCapDesc = (a, b) => {
    return Number.parseFloat(b.marketCap) - Number.parseFloat(a.marketCap);
};

export const byMarketCapAsc = (a, b) => {
    return Number.parseFloat(a.marketCap) - Number.parseFloat(b.marketCap);
};
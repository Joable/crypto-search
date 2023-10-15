export const alphabetically = (a, b) => {
    if(a.name < b.name){
        return -1;
    }else if(a.name > b.name){
        return 1;
    };

    return 0;
};

export const byPrice = (a, b) => {
    return Number.parseFloat(b.price) - Number.parseFloat(a.price);
};

export const byChange = (a, b) => {
    return  Number.parseFloat(b.change) - Number.parseFloat(a.change);
};

export const byMarketCap = (a, b) => {
    return Number.parseFloat(b.marketCap) - Number.parseFloat(a.marketCap);
};
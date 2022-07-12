export function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export const truncate = (str) => {
    return str.length > 15 ? str.substring(0, 6) + "..."  + str.substring(str.length -5, str.length)  : str;
}

export const nFormatter = (num, digits) => {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
        return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : num.toFixed(2);
}

export const addOrInsertDonor = (array, element) => {
    const i = array.findIndex(_element => _element.address === element.address);
    if (i > -1) array[i] = {...array[i], donation_amount: (Number(array[i].donation_amount) + Number(element.donation_amount)).toString()};
    else array.push(element);
}
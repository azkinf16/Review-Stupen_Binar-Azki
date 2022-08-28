const dataPenjualanPakAldi = [
    {
        namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
        hargaSatuan: 760000,
        kategori: "Sepatu Sport",
        totalTerjual: 90,
    },
    {
        namaProduct: "Sepatu Warrior Tristan Black Brown High - Original",
        hargaSatuan: 960000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 37,
    },
    {
        namaProduct: "Sepatu Warrior Tristan Maroon High - Original",
        hargaSatuan: 360000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 90,
    },
    {
        namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Original",
        hargaSatuan: 120000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 90,
    },
];

const hitungTotalPenjualan = (dataPenjualan) => {

    if (dataPenjualan === undefined) {
        return "ERROR : Can't continue to validation because undefined object"
    } else if (typeof dataPenjualan !== 'object') {
        return 'ERROR : Can only enter object data type'
    }

    let sum = 0;

    dataPenjualanPakAldi.forEach(element => {
        sum += element.totalTerjual
    });

    return sum;
}

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));
console.log(hitungTotalPenjualan('aldi'));
console.log(hitungTotalPenjualan());


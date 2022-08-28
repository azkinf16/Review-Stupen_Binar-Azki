const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
];

const getInfoPenjualan = (dataPenjualan) => {

  if (dataPenjualan === undefined) {
    return "ERROR : Can't continue to validation because undefined object"
  } else if (typeof dataPenjualan !== 'object') {
    return 'ERROR : Can only enter object data type'
  }

  let totalKeuntungan = 0, totalModal = 0
      produkTerlaris = '', penulisTerlaris = '',
      totalProdukLaris = 0, totalPenulisLaris = 0, 
      persenKeuntungan = '';

  dataPenjualan.forEach((item) => {
    // total profit
    totalKeuntungan += item.hargaJual * item.totalTerjual - item.hargaBeli * (item.totalTerjual + item.sisaStok);

    // total fund
    totalModal += item.hargaBeli * (item.totalTerjual + item.sisaStok);

    // bestselling product
    if (item.totalTerjual > totalProdukLaris) {
      produkTerlaris = item.namaProduk;
      totalProdukLaris = item.totalTerjual
    }

    // bestselling author
    let banyakProdukPenulisTerjual = dataPenjualan
    .filter((data) => {
      return data.penulis === item.penulis;
    }).reduce((prev, curr) => {
      return prev.totalTerjual + curr.totalTerjual
    })

    

    if (banyakProdukPenulisTerjual > totalPenulisLaris) {
      penulisTerlaris = item.penulis
      totalPenulisLaris = banyakProdukPenulisTerjual
    }

});

// percentage profit
persenKeuntungan += Math.round(totalKeuntungan / totalModal * 100) + "%";

// function change to rupiah
const formatRupiah = (angka) => {
  return Intl.NumberFormat('id-ID',
    { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
  ).format(angka);
};

// result in object
const result = {
  totalKeuntungan: formatRupiah(totalKeuntungan),
  totalModal: formatRupiah(totalModal),
  persentaseKeuntungan: persenKeuntungan,
  produkBukuTerlaris: produkTerlaris,
  penulisTerlaris: penulisTerlaris
};


return result;

}

console.log(getInfoPenjualan(dataPenjualanNovel));
console.log(getInfoPenjualan(0));
console.log(getInfoPenjualan());
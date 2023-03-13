function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  // Variable num berfungsi untuk membantu men-generate index baru
  let num = 0;
  for (let i = 0; i < cars.length; i++) {
    // Menggunakan Truthy untuk sort data yang available
    if (cars[i].available === true) {
      // Menyimpan value pada variable result dengan bantuan num sebagai index
      result[num] = cars[i];
      // Setelah berhasil num diperbaharui untuk index selanjutnya
      num = num + 1;
    }
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}

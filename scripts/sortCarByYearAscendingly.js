function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  // Menggunakan Algoritma Bubble Sort
  for (let i = 0; i < result.length; i++) {
    // Kita gunakan (array.length - i - 1) untuk solve array out of index
    for (let j = 0; j < result.length - i - 1; j++) {
      // Nilai yang lebih besar akan dipindahkan ke yang paling kanan
      if (result[j].year > result[j + 1].year) {
        // Bertukar nilai dengan bantuan tempValue variable
        let tempValue = result[j];
        result[j] = result[j + 1];
        result[j + 1] = tempValue;
      }
    }
  }

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}

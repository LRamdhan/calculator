// penambahan fitur angka desimal
// penambahan ke array
//      - jika index terakhir adalah angka, maka angka tersebut
//        ditambahkan oleh desimalnnya
// penghapusan ke array
//      - element terakhir adalah desimal, maka utamakan 
//        menghapus komanya dulu

// cara menentukan apakah suatu angka merupakan bilangan desimal
// let angka = 3.0;
// let bulat = Math.floor(angka);
// let sisa = angka / bulat;
// console.log(sisa);

// cara menambah digit pada bilangan desimal
// let number = [3.43];
// let input = '6';
// 1. pisahkan angka dengan lebihnya(dibelakang komanya)
// let angka = 5.49;
// let kata = angka + '';
// let angkas = '';
// let penentu = false;
// for(let i = 0; i < kata.length; i++) {
//     if(kata[i] == '.') {
//         penentu = true;
//         continue;
//     }

//     if(penentu) {
//         angkas += kata[i];
//     }
// }
// console.log(typeof(angkas));
// 2. angka dibelakang komanya ditambah dengan string inputan
// angkas += input;
// 3. anka dibelakang komanya diubah ke integer
// let bentukInt = parseInt(angkas);
// 4. angka dibelakang komanya diubah ke bentu 0. sekian
// 5. index terakhir di bulatkan kebawah
// 6. index terakhir ditambah dengan bilangan sebelum koma ini

// cara menghapus digit pada bilangan desimal
// 1. periksa apakah index terakhir adalah bilangan desimal
// 2. jika ya, maka pisah angka dibelakang komanya
// 2.5 jika angka dibelakang komanya satu maka index terakhir
//    langsung di bulatkan kebawah
// 3. jika tidak, angka dibelakang komanya diubah ke string lalu dikurang
//    satu karakter
// 4. index terkahir tadi dibulatkan kebawah
// 5. angka dibelakangk koma tadi diubah ke int lalu dibuat
//    menjadi nol koma lagi
// 6. tambahkan index terkahir dengan angka dibelakang koma
//    tadi
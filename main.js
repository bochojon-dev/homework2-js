// UYGA VAZIFA

// LOGICAL OPERATORS   ///////////////
// // BOOLEAN1
// let a = +prompt(`juft son kiriting (a)`);
// let b = a % 2 == 0;
// console.log(b + ` / siz kiritgan son juft emas`);

// // BOOLEAN2
// let a = +prompt(`A sonini kiriting`);
// let b = +prompt(`B sonini kiriting`);
// console.log(a >= 0 || b <= -2);

// // BOOLEAN3
// let a = +prompt(`a sonini kiriting`);
// let b = +prompt(`b sonini kiriting`);
// let c = +prompt(`c sonini kiriting`);
// console.log(a < b && c > b);

// // BOOLEAN4
// let a = +prompt(`a sonini kiriting`);
// let b = +prompt(`b sonini kiriting`);
// console.log(a % 2 == 1 && b % 2 == 1);

// // BOOLEAN5
// let a = +prompt(`a sonini kiriting`);
// let b = +prompt(`b sonini kiriting`);
// console.log(a % 2 == 1 || b % 2 == 1);

// // BOOLEAN6
// let a = +prompt(`a sonini kiriting`);
// let b = +prompt(`b sonini kiriting`);
// console.log((a % 2 == 1 && b % 2 == 0) || (a % 2 == 0 && b % 2 == 1));

// // BOOLEAN7
// let a = +prompt(`a sonini kiriting`);
// let b = +prompt(`b sonini kiriting`);
// let c = +prompt(`c sonini kiriting`);
// console.log(a > 0 && b > 0 && c > 0);

// // BOOLEAN8
// let a = +prompt(`a sonini kiriting`);
// let b = +prompt(`b sonini kiriting`);
// let c = +prompt(`c sonini kiriting`);
// console.log((a > 0 && b<0 && c<0) || (b > 0 && a<0 && c<0) || (c > 0 && b<0 && a<0));

// // BOOLEAN9
// let a = +prompt(`a sonini kiriting`);
// let b = +prompt(`b sonini kiriting`);
// let c = +prompt(`c sonini kiriting`);
// console.log((a > 0 && b>0 && c<0) || (b > 0 && a>0 && c<0) || (c > 0 && b>0 && a<0));

// // BOOLEAN10
// let a = +prompt(`mubat butun son kiriting`);
// console.log((a > 9 && a < 100) && a % 2 == 0);

// // BOOLEAN11
// let a = +prompt(`mubat butun son kiriting`);
// console.log(a > 99 && a < 1000 && a % 2 == 1);

// // BOOLEAN12
// let a = +prompt(`a sonini kiriting`);
// let b = +prompt(`b sonini kiriting`);
// let c = +prompt(`c sonini kiriting`);
// console.log(a == -b || b == -c || a == -c);

// // BOOLEAN13
// let x = prompt(`3 xonali natural son kiriting`);
// let c = x % 10;
// let b = Math.floor((x % 100) / 10);
// let a = Math.floor(x / 100);
// console.log(c > b && b > a && a > 0);

// // BOOLEAN14
// let x = prompt(`3 xonali natural son kiriting`);
// let c = x % 10;
// let b = Math.floor((x % 100) / 10);
// let a = Math.floor(x / 100);
// console.log((c > b && b > a && a > 0) || (a > b && b > c && c > 0));

// // BOOLEAN15
// let x = prompt(`3 xonali natural son kiriting`);
// let c = x % 10;
// let b = Math.floor((x % 100) / 10);
// let a = Math.floor(x / 100);
// console.log(a == c && a > 0);

// -------------/////////////////////////////

// OPERATORS  ///////////////////////

// // NUMBER1
// let a = +prompt(`a sonini kiritng`);
// let b = +prompt(`b sonini kiritng`);
// let Y = (-b * (a ** 2 + b ** 2)) / 2;
// console.log(`siz kiritgan qiymatlar bo'yicha ifodaning qiymati: ` + Y);

// // NUMBER2
// let a = +prompt(`a sonini kiritng`);
// let b = +prompt(`b sonini kiritng`);
// let c = +prompt(`c sonini kiritng`);
// let d = +prompt(`d sonini kiritng`);
// let Y = ((a + b) / (c + d)) ** 2 + b ** 2;
// console.log(`siz kiritgan qiymatlar bo'yicha ifodaning qiymati: ` + Y);

// // NUMBER3
// let a = +prompt(`a sonini kiritng`);
// let b = +prompt(`b sonini kiritng`);
// let c = +prompt(`c sonini kiritng`);
// let Y = 2 * (Math.pow(a, b) + (4 * c ** 2) / 3);
// console.log(`siz kiritgan qiymatlar bo'yicha ifodaning qiymati: ` + Y);

// // NUMBER4
// let a = +prompt(`a sonini kiritng`);
// let b = +prompt(`b sonini kiritng`);
// let c = +prompt(`c sonini kiritng`);
// let d = +prompt(`d sonini kiritng`);
// let Y = ((b / 10) ** 3 * (c + d) ** 2) / a ** 2;
// console.log(`siz kiritgan qiymatlar bo'yicha ifodaning qiymati: ` + Y);

// // NUMBER5
// let a = +prompt(`a sonini kiritng`);
// let b = +prompt(`b sonini kiritng`);
// let c = +prompt(`c sonini kiritng`);
// let d = +prompt(`d sonini kiritng`);
// let Y = ((a / b - 1) / (c / (d - 1))) ** 2;
// console.log(`siz kiritgan qiymatlar bo'yicha ifodaning qiymati: ` + Y);

// // NUMBER6
// let a = +prompt(`a sonini kiritng`);
// let b = +prompt(`b sonini kiritng`);
// let c = +prompt(`c sonini kiritng`);
// let d = +prompt(`d sonini kiritng`);
// let Y = (a + b) / (c + d / (a + c));
// console.log(`siz kiritgan qiymatlar bo'yicha ifodaning qiymati: ` + Y);

// // NUMBER7
// let a = +prompt(`a sonini kiritng`);
// let b = +prompt(`b sonini kiritng`);
// let c = +prompt(`c sonini kiritng`);
// let Y = Math.sqrt((a + b + c) ** 2 - (a - b - c) ** 2);
// console.log(`siz kiritgan qiymatlar bo'yicha ifodaning qiymati: ` + Y);

// // NUMBER8
// let a = +prompt(`a sonini kiritng`);
// let b = +prompt(`b sonini kiritng`);
// let c = +prompt(`c sonini kiritng`);
// let Y = (a ** 2 + b ** 2 + c ** 2) / (a * b * c);
// console.log(`siz kiritgan qiymatlar bo'yicha ifodaning qiymati: ` + Y);

// // NUMBER9
// let a = +prompt(`a sonini kiritng`);
// let b = +prompt(`b sonini kiritng`);
// let c = +prompt(`c sonini kiritng`);
// let d = +prompt(`d sonini kiritng`);
// let Y = (a * d ** 3) / 3 + (b * c ** 2) / 2;
// console.log(`siz kiritgan qiymatlar bo'yicha ifodaning qiymati: ` + Y);

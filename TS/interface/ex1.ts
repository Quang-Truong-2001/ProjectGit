console.log('hello');
{
  let str: string = 'string tr';
  let number: number = 45;
  let isValid: boolean = true;
  let anything: any = 5;
  anything = '';
  let arr: number[] = [1, 2, 3];
  // Tuple : Cho phép khai báo một mảng với số lượng phần tử cố định và các kiểu dữ liệu khác nhau
  let person: [string, number];
  person = ['truong', 23];
  // Enum : Định nghĩa các hằng số có tên
  enum Color {
    Red,
    Green,
    Blue,
  }
  let color: Color = Color.Blue;
  // Union: Cho phép một biến có thể có nhiều kiểu dữ liệu khác nhau
  let value: number | string = 5;
  value = 'hello';
  // Object
  let object: { name: string; age: number; gender: boolean };
  object = { name: 'truong', age: 5, gender: true };
  // function
  let a: number = 4;
  let b: number = 5;
  function add(a: number, b: number): number {
    return a + b;
  }
  function display(a: number, b: number): void {
    console.log(a + b);
  }
  // Literal types: dùng để giới hạn giá trị của một biến
  let direction: 'left' | 'right' | 'up' | 'down';
  direction = 'left';
  // never: dùng cho các hàm không bao giờ hoàn thành
  function error(message: string): never {
    throw new Error(message);
  }
  // Unknown là kiểu dữ liệu an toàn hơn any vì phải kiểm tra dữ liệu trước khi sử dụng
  let notSure: unknown = 4;
  if (typeof notSure == 'number') {
    notSure = 5;
  }
  // interface
  interface Category {
    name: string;
    year: number;
    display(): string;
  }
  let categoryOne: Category = {
    name: 'truong',
    year: 2024,
    display: function () {
      return 'hello';
    },
  };
  // class
}

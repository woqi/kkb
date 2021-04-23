
import './App.css';
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <Routes />
    </div>

  );
}

export default App;


// function* GeneratorText() {
//   yield '第一步'
//   yield '第二步'
//   return '结束'
// }
// let co = GeneratorText()
// console.log('第1次next',co.next())
// console.log('第2次next',co.next())
// console.log('第3次next',co.next())
// console.log('第4次next',co.next())//最后一次完成状态了

// let a = 0
// function* fun() {
//   let aa = yield (a = 1 + 1)
//   return aa
// }

// console.log('fun---a',a)
// let b= fun()
// // console.log('fun---b',b.next())
// console.log('第二次a',a)





// function add(...args) {

//   let sum = args.reduce((acc, cur) => acc + cur);

//   return function (...nextArgs) {
//     console.log('nextArgs',...nextArgs)
//     console.log('nextArgs.length',nextArgs.length)
//     return nextArgs.length ? add(sum, ...nextArgs) : sum;
//   };
// }
// let res1 = add(1,2,3);
// console.log("res1---", res1());

// function add2(...args) {
  
//   let a = args.reduce((a, b) => a + b, 0)
//   return function(...args){
//     let b = args.reduce((a, b) => a + b, 0)
//     if(b){
//       return add2(a+b)
//     }
//     return a
//   }
// }

// let res2 = add2(2)(2,3,(8));
// console.log("res2---", res2());
// function factorial(num){ 
//   if (num <=1) { 
//   return 1; 
//   } else { 
//   return num * (num-1) 
//   } 
//  } 
// console.log('~~~',factorial(3))


// var obj ={
//   name:'啦啦'
// }
// function orr(a,b){
//   this.name = b
//   console.log('a-----',a)
//   console.log('b-----',b)
// }

// var bon = orr.bind(obj,'哎呀')
// var newBon = new bon('花湖')
// console.log('newBon----',newBon)
// console.log('newBon-arg----',bon.argument)
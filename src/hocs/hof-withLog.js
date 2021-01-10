const withLog = (funcWrapped) => (a, b) => {
  console.log(a, b, funcWrapped(a, b));
  return funcWrapped(a, b);
};

const add = (a, b) => a + b;

const addWithLog = withLog(add);

const res = addWithLog(10, 20);

console.log(res);

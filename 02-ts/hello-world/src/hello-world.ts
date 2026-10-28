type Message = string | null;

type ParameterlessStringFunc = () => string;
type Int2StringFunc = (n: number) => string;

const int2Str: Int2StringFunc = (n: number) => {
  return `${n}`;
}

console.log(int2Str(222));

function getMessage(name: string): Message {
  if (!name || name == "") {
    return null;
  }
  const message = `Hello ${name}!`;
  return message;
}

const msg: Message = getMessage('Hugo');
console.log(msg ? msg : "n/a");

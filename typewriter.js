let sentence = "hello there from lighthouse labs";
sentence = sentence + "\n";
let delay = 50;
for (const char of sentence) {
  delay = delay + 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
}



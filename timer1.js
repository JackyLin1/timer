let arg = process.argv.slice(2);

function timer(time) {
  if (time === '' || time < 0) {
    process.exit();
  }
  for (let t of time) {
    if (Number(t)) {
      setTimeout(() => {
        process.stdout.write('\07');
      }, t * 1000);
    }
  }
}

timer(arg);



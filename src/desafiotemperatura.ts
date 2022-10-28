function closeToZero(temperaturas: number[]): number {
  const negcheck = [];
  for (let index = 0; index < temperaturas.length; index++) {
    if (temperaturas[index] < 0) {
      negcheck[index] = false;
      temperaturas[index] = temperaturas[index] * -1;
    }
  }
  let closest = 10 ** 10;
  for (let index = 0; index < temperaturas.length; index++) {
    if (temperaturas[index] < closest) {
      closest = temperaturas[index];
      if (negcheck[index] === false) {
        closest = closest * -1;
      }
    }
  }
  return closest;
}

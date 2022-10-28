function daysDif(dataInicial: string, dataFinal: string) {
  console.log(dataInicial, dataFinal);
  const inicial = dataInicial.split('-');
  const final = dataFinal.split('-');
  let dif;
  const anosInicial = parseInt(inicial[0]);
  const anosFinal = parseInt(final[0]);
  const mesesInicial = parseInt(inicial[1]);
  const mesesFinal = parseInt(final[1]);
  const diasInicial = parseInt(inicial[2]);
  const diasFinal = parseInt(final[2]);

  if (anosInicial === anosFinal) {
    if (mesesInicial === mesesFinal) {
      dif = diasFinal - diasInicial;
    } else {
      dif =
        restomesinicial(mesesInicial, diasInicial) +
        diasdemesescompletos(mesesInicial, mesesFinal) +
        diasFinal;
    }
  } else {
    if (anosFinal - anosInicial > 1) {
      const difanos = (anosFinal - anosInicial - 1) * 365;
      dif =
        restomesinicial(mesesInicial, diasInicial) +
        diasdemesescompletos(mesesInicial, mesesFinal) +
        diasFinal +
        difanos;
    } else {
      dif =
        restomesinicial(mesesInicial, diasInicial) +
        diasdemesescompletos(mesesInicial, mesesFinal) +
        diasFinal;
    }
  }
  console.log('dias ultimo mes', diasFinal);
  return dif;
}
function restomesinicial(mesesInicial: number, diasInicial: number) {
  let diasrest = 0;
  switch (mesesInicial) {
    case 1:
      diasrest = 31 - diasInicial;
      break;
    case 2:
      diasrest = 28 - diasInicial;
      break;
    case 3:
      diasrest = 31 - diasInicial;
      break;
    case 4:
      diasrest = 30 - diasInicial;
      break;
    case 5:
      diasrest = 31 - diasInicial;
      break;
    case 6:
      diasrest = 30 - diasInicial;
      break;
    case 7:
      diasrest = 31 - diasInicial;
      break;
    case 8:
      diasrest = 31 - diasInicial;
      break;
    case 9:
      diasrest = 30 - diasInicial;
      break;
    case 10:
      diasrest = 31 - diasInicial;
      break;
    case 11:
      diasrest = 30 - diasInicial;
      break;
    case 12:
      diasrest = 31 - diasInicial;
      break;
    default:
      break;
  }
  console.log('resto de dias no mes inicial', diasrest);
  return diasrest;
}
function diasdemesescompletos(mesesInicial: number, mesesFinal: number) {
  const diasmeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let mesescompletos = 0;
  if (mesesInicial < mesesFinal) {
    for (let index = mesesInicial; index < mesesFinal - 1; index++) {
      mesescompletos = mesescompletos + diasmeses[index];
      console.log(mesescompletos);
    }
  } else {
    for (let index = mesesInicial; index < 12; index++) {
      mesescompletos = mesescompletos + diasmeses[index];
      console.log(mesescompletos);
    }
    for (let index = 1; index < mesesFinal; index++) {
      mesescompletos = mesescompletos + diasmeses[index];
      console.log(mesescompletos);
    }
  }
  console.log('dias de meses completos', mesescompletos);
  return mesescompletos;
}

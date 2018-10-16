// Test 1
export const f1 = (a, b) => {
  const freqs = {
    a: { a: 0, b: 0 },
    b: { a: 0, b: 0 },
    c: { a: 0, b: 0 },
    d: { a: 0, b: 0 },
    e: { a: 0, b: 0 },
    f: { a: 0, b: 0 },
    g: { a: 0, b: 0 },
    h: { a: 0, b: 0 },
    i: { a: 0, b: 0 },
    j: { a: 0, b: 0 },
    k: { a: 0, b: 0 },
    l: { a: 0, b: 0 },
    m: { a: 0, b: 0 },
    n: { a: 0, b: 0 },
    o: { a: 0, b: 0 },
    p: { a: 0, b: 0 },
    q: { a: 0, b: 0 },
    r: { a: 0, b: 0 },
    s: { a: 0, b: 0 },
    t: { a: 0, b: 0 },
    u: { a: 0, b: 0 },
    v: { a: 0, b: 0 },
    w: { a: 0, b: 0 },
    x: { a: 0, b: 0 },
    y: { a: 0, b: 0 },
    z: { a: 0, b: 0 }
  };
  for (let i = 0; i < a.length; i++) {
    freqs[a[i].toLowerCase()].a++;
  }
  for (let j = 0; j < b.length; j++) {
    freqs[b[j].toLowerCase()].b++;
  }
  let noOfDeletionsNeeded = 0;
  for (const letter in freqs) {
    if (freqs[letter].a !== freqs[letter].b) {
      noOfDeletionsNeeded += Math.abs(freqs[letter].a - freqs[letter].b);
    }
  }
  return noOfDeletionsNeeded;
};

// Test 2
export const f2 = (a, b) => {
  return b.map(str => {
    let occurs = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] === str) {
        occurs++;
      }
    }
    return occurs;
  });
};

// Test 3
export const f3 = a => {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '-',
    '_',
    '.'
  ];
  for (let i = 0; i < a.length; i++) {
    if (!alphabet.includes(a[i].toLowerCase())) {
      return 0;
    }
  }
  return a.split('.').filter(part => part.length > 0).length;
};

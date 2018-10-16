import { f1, f2, f3, f4 } from './modules/solutions';

// Test 1
console.log(f1('bacdc', 'dcbac'));
console.log(f1('bacdc', 'dcbad'));

// Test 2
console.log(f2(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']));

// Test 3
console.log(f3(''));
console.log(f3('xtech.guru'));
console.log(f3('@xtech.guru'));

// Test 4
f4(() => console.log('running'));
setTimeout(() => f4(() => console.log('running')), 100);
setTimeout(() => f4(() => console.log('running')), 200);
setTimeout(() => f4(() => console.log('running')), 600);

const MontanteJacques = require( 'montante-jacques' );

// Let K a (N x N) matrix
let K =
    [ [ 42, 97, 23 ],
    [ 51, 30, 77 ],
    [ 33, 7, 66 ] ];

// Let m a prime number, referred as modulo.
const m = 131;

K = MontanteJacques.inverseModular( K, m );

console.log( K )
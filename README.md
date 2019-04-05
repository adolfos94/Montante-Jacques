# Montante - Jacques

Method to obtain modular inverse matrices logarithmic-time nlog(n!) + (log(m!))/log(φ)). Developed method to obtain modular inverse matrices sized n x n considering computational-complexity more efficiency and applications in symmetric cryptography.

[The proposed Montante-Jacques method to obtain modular inverse matrices with logarithmic complexity.](https://https://www.researchgate.net/publication/328615698_The_proposed_Montante-Jacques_method_to_obtain_modular_inverse_matrices_with_logarithmic_complexity)

## Installation

This is a Node.js module.

Installation is done using the npm install command:

```
    npm i montante-jacques
```

This method uses the Bareiss Algorithm to calculate the determinant of the matrix

```
    npm i bareiss
```

[Bareiss Algorithm.](https://www.npmjs.com/package/bareiss)

## Example of use

```javascript

// Import the module
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

    //[ [ 0, 42, 82 ], [ 85, 107, 48 ], [ 120, 53, 75 ] ];


```

The main function is:

<img src="https://github.com/adolfos94/Bareiss-Algorithm/blob/master/carbon.png?raw=true">


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Authors

- Code:
    * [Adolfo Solis-Rosas](adolfo2794@gmail.com)

- Author of the Gauss-Jacques method:
    * [Fausto Abraham Jacques-García](jacques@uaq.edu.mx)



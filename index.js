'use strict'

const math = require( 'mathjs' );
const Bareiss = require( 'bareiss' );

/**
 *  Calculates the inverseModular of the matrix
 * @date 2019-03-26
* @param {matrix} matrix Original Matrix
 * @param {m} m Prime number known as modulo
 * @returns {inverseModularMatrix} Returns the inverseModular of the original matrix
 */
function inverseModular( matrix, m ) {
    let bareiss = Bareiss.getDeterminant( matrix );
    let x = math.xgcd( bareiss.determinant, m )._data[ 1 ];
    let inverseModularMatrix = math.multiply( bareiss.transformedMatrix, x );
    inverseModularMatrix = math.mod( inverseModularMatrix, m );
    return inverseModularMatrix;
}

exports.inverseModular = inverseModular;
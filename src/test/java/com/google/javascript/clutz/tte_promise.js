goog.provide('tte.Promise');

/**
 * The examples below come from closure's typings of angular and es6 promise
 *
 * https://github.com/google/closure-compiler/blob/master/externs/es6.js#L1248 and
 * https://github.com/google/closure-compiler/blob/master/contrib/externs/angular-1.5-q_templated.js#L52
 */

/**
 * @constructor
 * @template T
 */
tte.Promise = function() {};

/**
 *
 * @param {?(function(this:THIS, T): VALUE)=} opt_onFulfilled
 * @param {?(function(?): ?)=} opt_onRejected
 * @param {?(function(?): ?)=} opt_notifyCallback
 * @return {RESULT}
 * @template THIS
 * @template VALUE
 * @template RESULT := type('angular.$q.Promise',
 *     cond(isUnknown(VALUE), unknown(),
 *       mapunion(VALUE, (V) =>
 *         cond(isTemplatized(V) && sub(rawTypeOf(V), 'IThenable'),
 *           templateTypeOf(V, 0),
 *           cond(sub(V, 'tte.Promise'),
 *              unknown(),
 *              V)))))
 *  =:
 */
tte.Promise.prototype.then =
    function(opt_onFulfilled, opt_onRejected, opt_notifyCallback) {};

/**
 *
 * @param {VALUE} promises
 * @template VALUE
 * @return {ALLTYPE}
 * @template ALLTYPE := type('angular.$q.Promise',
 *   cond(isUnknown(VALUE), unknown(),
 *     mapunion(VALUE, (x) =>
 *       cond(sub(x, 'Array'),
 *         cond(isTemplatized(x) && sub(rawTypeOf(x), 'IThenable'),
 *           type('Array', templateTypeOf(x, 0)),
 *           'Array'
 *         ),
 *         cond(isRecord(x),
 *           maprecord(record(x), (kx, vx) => record({[kx]:
 *             cond(isTemplatized(vx) && sub(rawTypeOf(vx), 'IThenable'),
 *               templateTypeOf(vx, 0),
 *               cond(sub(vx, 'angular.$q.Promise'),
 *                 unknown(),
 *                 vx
 *               )
 *             )
 *           })),
 *           'Object')))))
 * =:
 */
tte.Promise.all = function(promises) {};

/**
 * @param {VALUE=} opt_value
 * @return {RESULT}
 * @template VALUE
 * @template RESULT := type('Promise',
 *     cond(isUnknown(VALUE), unknown(),
 *       mapunion(VALUE, (V) =>
 *         cond(isTemplatized(V) && sub(rawTypeOf(V), 'IThenable'),
 *           templateTypeOf(V, 0),
 *           cond(sub(V, 'Thenable'),
 *              unknown(),
 *              V)))))
 * =:
 */
tte.Promise.resolve = function(opt_value) {};

/**
 * @param {!Array<VALUE>} values
 * @return {!tte.Promise<RESULT>}
 * @template VALUE
 * @template RESULT := mapunion(VALUE, (V) =>
 *     cond(isUnknown(V),
 *         unknown(),
 *         cond(isTemplatized(V) && sub(rawTypeOf(V), 'IThenable'),
 *             templateTypeOf(V, 0),
 *             cond(sub(V, 'Thenable'), unknown(), V))))
 * =:
 */
tte.Promise.race = function(values) {};
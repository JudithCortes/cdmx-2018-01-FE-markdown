const mdLinks = require('../index')


describe('Funcion mdLinks', () => {

    it('Debería se una función', () => {
        return expect(typeof mdLinks).toEqual('function')
    });
});
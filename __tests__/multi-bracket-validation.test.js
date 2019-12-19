const { multiBracketValidation } = require('../challenges/multiBracketValidation/multi-bracket-validation');

describe('multi bracket validation', () => {
  it('validates if brackets have been closed', () => {
    expect(multiBracketValidation('{}')).toEqual(true);
    expect(multiBracketValidation('{}(){}')).toEqual(true);
    expect(multiBracketValidation('()[[Extra Characters]]')).toEqual(true);
    expect(multiBracketValidation('(){}[[]]')).toEqual(true);
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toEqual(true);
    expect(multiBracketValidation('[({}]')).toEqual(false);
    expect(multiBracketValidation('(](')).toEqual(false);
    expect(multiBracketValidation('{(})')).toEqual(false);
  });
});

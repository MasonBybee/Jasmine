describe('should caluclate the monthly payment to 2 decimal places', function(){

  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({
      amount: 10000,
      years: 10,
      rate: 0.05,
    })).toBe('107.92')
    expect(calculateMonthlyPayment({
      amount: 10000,
      years: 5,
      rate: 0.05,
    })).toBe('192.47')
    expect(calculateMonthlyPayment({
      amount: 123456,
      years: 12,
      rate: 0.09,
    })).toBe('1436.72')
    expect(calculateMonthlyPayment({
      amount: 10008,
      years: 10,
      rate: 0.05,
    })).toBe('108.00')
  });
  
  
  it("should return a result with 2 decimal places", function() {
    expect(calculateMonthlyPayment({
      amount: 10008,
      years: 10,
      rate: 0.05,
    }).toString()).toMatch(/^\d+\.\d\d$/);
    expect(calculateMonthlyPayment({
      amount: 10017,
      years: 10,
      rate: 0.05,
    }).toString()).toMatch(/^\d+\.\d\d$/);
    expect(calculateMonthlyPayment({
      amount: 20000,
      years: 10,
      rate: 0.05,
    }).toString()).toMatch(/^\d+\.\d\d$/);
  });

})



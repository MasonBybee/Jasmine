describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 500;
      tipAmtInput.value = 100;
    });
  
    it('should add a new payment to allPayments', function () {
      submitPaymentInfo();
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('500');
      expect(allPayments['payment1'].tipAmt).toEqual('100');
      expect(allPayments['payment1'].tipPercent).toEqual(20);
    });
  
    it('should not add a new payment with no input', function () {
      billAmtInput.value = '';
      submitPaymentInfo();
      expect(Object.keys(allPayments).length).toEqual(0);
    });
  
  
    it('should create a new payment on createCurPayment()', function () {
      let expectedPayment = {
        billAmt: '500',
        tipAmt: '100',
        tipPercent: 20,
      }
  
      expect(createCurPayment()).toEqual(expectedPayment);
    });
  
    it('should not create payment with empty input', function () {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      let curPayment = createCurPayment();
  
      expect(curPayment).toEqual(undefined);
    });
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      paymentId = 0;
      allPayments = {};
    });
  });
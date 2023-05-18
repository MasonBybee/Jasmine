describe("Utilities test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 50;
      tipAmtInput.value = 10;
      submitPaymentInfo();
    });
  
    it('should sum tip amounts of all payments and return the total', function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(10);
        billAmtInput.value = 100
        tipAmtInput.value = 20
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(30)
    })
  
    it("should calculate tip percent",function(){
        expect(calculateTipPercent(50, 10)).toEqual(20)
        expect(calculateTipPercent(100, 30)).toEqual(30)
        expect(calculateTipPercent(40, 0)).toEqual(0)
    })

    it('should append tr to newtr', function () {
        let newTr = document.createElement('tr');
        appendTd(newTr, 'tr');
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
      });
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
  });
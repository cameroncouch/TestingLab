// These test cases are all unfinished. We will finish them together.
describe("tests for change-handler", function() {

    //Test 1a
    xit("tests to see that amountDue is set based on an argument", function() {
        // Remember, you can arrange, act, and assert...start small
        //ARRANGE
        
        //ASSERT
        expect(vendingmachine.amountDue).toBe(50);
        //ACT
    });

    //Test 1b'
    xit("tests to see if cashTendered is set to 0", function() {

    //ASSERT
    expect(vendingmachine.cashTendered).toBe(0);
    });

    //Test 2a
    xit("tests to see that insertCoin quarter increases cashTendered to 25 ", function() {
    //ARRANGE
    vendingmachine.insertCoin("quarter");
    //ASSERT
    expect(vendingmachine.cashTendered).toBe(25);
    });

    //Test 2b
    xit("tests to see that insertCoin dime increases to 35", function() {
    //ARRANGE
    vendingmachine.insertCoin("dime");
    //ASSERT
    expect(vendingmachine.cashTendered).toBe(35);
    });

    //Test 2c
    xit("tests to see that insertCoin nickel increases to 40", function() {
    //ARRANGE
    vendingmachine.insertCoin("nickel");
    //ASSERT
    expect(vendingmachine.cashTendered).toBe(40);
    });

    //Test 2d
    xit("tests to see that insertCoin penny increases to 41", function() {
    //ARRANGE
    vendingmachine.insertCoin("penny");
    //ASSERT
    expect(vendingmachine.cashTendered).toBe(41);
    });

    //Test 2e
    xit("tests to see that all of the previous insertCoin function calls have been adding up", function() {
    //ASSERT
    expect(vendingmachine.cashTendered).toBe(41);
    });

    //Test 3a
    xit("tests to see if cashTendered is more than amount due", function() {
    //ARRANGE
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("quarter");
    //ASSERT
    expect(vendingmachine.isPaymentSufficient(true));
    });

    //Test 3b
    xit("tests if cashTendered is less than amount due", function() {
        vendingmachine.insertCoin("penny");
        //ASSERT
        expect(vendingmachine.isPaymentSufficient(false));
    });
    //Test 3c
    xit("tests to see if cashTendered is more than/equal to amount due", function() {
    //ARRANGE
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("quarter");
    //ASSERT
    expect(vendingmachine.isPaymentSufficient(true));
    });

    //Test 4a
    xit("tests to see if 32 change produces 1 quarters, 1 nickels, 2 penny", function() {
    //ARRANGE
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("nickel");
    vendingmachine.insertCoin("penny");
    vendingmachine.insertCoin("penny");
    //ASSERT
    expect(vendingmachine.giveChange()).toEqual({quarters: 1, dimes: 0, nickels: 1, pennies: 2});
    }); 
    //Test 4b
    xit("tests to see if 10 change produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0", function(){
    //ARRANGE
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("dime");
    
    //ASSERT
    expect(vendingmachine.giveChange()).toEqual({quarters: 0, dimes: 1, nickels: 0, pennies: 0});
   });
   //Test 4c
   xit("tests to see if 27 change produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2", function(){
    //ARRANGE
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("penny");
    vendingmachine.insertCoin("penny");
    //ASSERT
    expect(vendingmachine.giveChange()).toEqual({quarters: 1, dimes: 0, nickels: 0, pennies: 2});
   });
   //Test 4d
   xit("tests to see if 68 change produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3", function(){
    //ARRANGE
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("quarter");
    vendingmachine.insertCoin("dime");
    vendingmachine.insertCoin("nickel");
    vendingmachine.insertCoin("penny");
    vendingmachine.insertCoin("penny");
    vendingmachine.insertCoin("penny");
    //ASSERT
    expect(vendingmachine.giveChange()).toEqual({quarters: 2, dimes: 1, nickels: 1, pennies: 3});
   });
}); 

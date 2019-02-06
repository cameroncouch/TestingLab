/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
    
    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * The parameter "type" is a string that is either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
        if (type === "quarter") {
            this.cashTendered += 25;
        }
        else if (type === "dime") {
            this.cashTendered += 10;
        }
        else if (type === "nickel") {
            this.cashTendered += 5;
        }
        else if (type === "penny") {
            this.cashTendered += 1;
        }
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
        if (cashTendered < amountDue) {
            return false;
        }
        else if (cashTendered >= amountDue) {
            return true;
        }
    }

    giveChange() {
        let quarters = null;
        let dimes = null;
        let nickels = null;
        let pennies = null;
        let changeBack = 100
        for (let i = 0; i < (this.cashTendered - this.amountDue); i++) {
            if (i % 25 === 0) {
                quarters++;
            }
            else if (i % 10 === 0) {
                dimes++;
            }
            else if (i % 5 === 0) {
                nickels++;
            }
            else if (i % 1 === 0) {
                pennies++;
            }
        }
        return {
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
        }
    }
}
const vendingmachine = new ChangeHandler(100);
/**
 * Provides a `Counter` object
 */
class CounterModel {

    public value: number;
    absoluteOnly: boolean;

    constructor(absoluteOnly = false) {
        this.value = 1;
        this.absoluteOnly = absoluteOnly;
    }

    increase() {
        this.value += 1;
    }

    decrease() {
        if ((this.absoluteOnly && this.value > 0) || !this.absoluteOnly) {
            this.value -= 1;
        }
    }
}

export default CounterModel;
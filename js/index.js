"use strict";
/// <reference path="LiteEvent.ts" />
/**
 * A person class with an age property that calls an event
 * when the age is changed via the set property
 */
var person = /** @class */ (function () {
    function person() {
        // the event. call AgeChangedEvent.On( (age) => {}); to recieve
        // event notifications
        this.AgeChangedEvent = new LiteEvent();
        this._age = 1;
    }
    Object.defineProperty(person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (v) {
            this._age = v;
            // triggering the event
            this.AgeChangedEvent.trigger(v);
        },
        enumerable: true,
        configurable: true
    });
    return person;
}());
////////////////////////////////////////////////////////////////////////////////////////////////
//
// create an instance of the person class
var aPerson = new person();
// give the person an age (below event will not be called yet because it has not been setup)
aPerson.age = 6;
// create an event to be called when the age has been changed
aPerson.AgeChangedEvent.on(function (age) {
    console.log('new age is:' + age);
});
// give the person a new age 
// (this will call the above AgeChangedEvent and print to the consle a message)
aPerson.age = 3;

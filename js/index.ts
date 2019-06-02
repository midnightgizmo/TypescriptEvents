/// <reference path="LiteEvent.ts" />





/**
 * A person class with an age property that calls an event
 * when the age is changed via the set property
 */
class person
{
    // the event. call AgeChangedEvent.On( (age) => {}); to recieve
    // event notifications
    public readonly AgeChangedEvent = new LiteEvent<number>();

    private _age : number = 1;
    public get age() : number 
    {
        return this._age;
    }
    public set age(v : number) 
    {
        this._age = v;
        // triggering the event
        this.AgeChangedEvent.trigger(v);
    }
    
}


////////////////////////////////////////////////////////////////////////////////////////////////
//
// create an instance of the person class
let aPerson = new person();

// give the person an age (below event will not be called yet because it has not been setup)
aPerson.age = 6;

// create an event to be called when the age has been changed
aPerson.AgeChangedEvent.on((age) =>
{
    console.log('new age is:' + age);
});

// give the person a new age 
// (this will call the above AgeChangedEvent and print to the consle a message)
aPerson.age = 3;
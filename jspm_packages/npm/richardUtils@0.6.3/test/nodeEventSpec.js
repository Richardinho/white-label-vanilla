/* */ 
"format cjs";
/*

    currently only works in Firefox. Chome Canary has mysterious Proxy object which has no properties!
*/

define([ 'enhancedObject' ], function( createProxy ) {


    describe('Given an object with nested objects has been event enhanced', function() {

        var foo, proxy;

        beforeEach(function () {

            //  example obj.
            foo = {
                name : "foo",
                bar : "bar",
                moo : "moo",
                cars : {

                    jeep : "jeep",
                    austin : "austin",
                    bikes : {

                    }
                }
            };
            proxy = createProxy(foo);

        });


        describe("Given a listener for a CHANGE event has been registered on the ROOT node", function () {

            var handler, spy, watch;

            beforeEach(function () {

                handler = {

                    action : function() {
                        watch = this.foo
                    },

                    foo : "foo"
                }

                spy = spyOn(handler, "action").andCallThrough();

                // registering change event on root object
                proxy.on("change", handler.action, handler);

            });

            describe("When a DESCENDANT node is updated", function () {

                beforeEach(function () {

                    proxy.cars.bikes['honda'] = 'honda';

                });

                it("the listener should be called using the correct context", function () {

                    expect(spy).toHaveBeenCalled();
                    expect(watch).toEqual("foo");
                });
            });
        });


        describe("Given a listener for a SEMANTIC event has been registered on a DESCENDANT node", function () {

            var handler, spy, watch, watchArgs;

            beforeEach(function () {

                handler = {

                    action : function() {
                        watch = this.foo;
                        watchArgs = Array.prototype.join.call(arguments, " ");
                    },

                    foo : "foo"
                }

                spy = spyOn(handler, "action").andCallThrough();

                proxy.cars.bikes.on("foobar", handler.action, handler);

            });

            describe("When the semantic event is BROADCAST, with arguments passed, on an ANCESTOR node", function () {

                beforeEach(function () {

                    proxy.broadcast("foobar", "apple", "banana");

                });

                it("the listener should be called with the correct arguments and in the right context", function () {

                    expect(spy).toHaveBeenCalled();
                    expect(watch).toEqual("foo");
                    expect(watchArgs).toEqual("apple banana");
                });
            });
        });

        describe("Given a javascript object including nested objects is ADDED later to the existing enhanced object", function () {

            beforeEach(function () {

                proxy.cars = {
                    tractors : {
                        "massyFerguson" : "massyFerguson",
                        "johnDeer" : "johnDeer",
                        others : {
                            another : "another tractor"
                        }
                    }
                }

            });

            describe("Given a listener for a CHANGE event has been registered on the ROOT node", function () {

                var handler, spy, watch;

                beforeEach(function () {

                    handler = {

                        action : function() {
                            watch = this.foo
                        },

                        foo : "foo"
                    }

                    spy = spyOn(handler, "action").andCallThrough();

                    // registering change event on root object
                    proxy.on("change", handler.action, handler);

                });

                describe("When a DESCENDANT node is updated", function () {

                    beforeEach(function () {

                        proxy.cars.tractors.others.another = "another tractor";

                    });

                    it("the listener should be called using the correct context", function () {

                        expect(spy).toHaveBeenCalled();
                        expect(watch).toEqual("foo");
                    });
                });

            });

            describe("Given a listener on a SEMANTIC EVENT is registered on a DESCENDANT node with a given context", function () {

                var handler, spy, watch, watchArgs;

                beforeEach(function () {

                    handler = {

                        action : function() {
                            watch = this.foo;
                            watchArgs = Array.prototype.join.call(arguments, " ");
                        },

                        foo : "foo"
                    }

                    spy = spyOn(handler, "action").andCallThrough();

                    proxy.cars.tractors.others.on("foobar", handler.action, handler);

                });

                describe("When the semantic event is BROADCAST, with arguments passed, on an ANCESTOR node", function () {

                    beforeEach(function () {

                        proxy.broadcast("foobar", "apple", "banana");

                    });

                    it("the listener should be called with the correct arguments and in the right context", function () {

                        expect(spy).toHaveBeenCalled();
                        expect(watch).toEqual("foo");
                        expect(watchArgs).toEqual("apple banana");
                    });
                });
            });
        });
    });
});

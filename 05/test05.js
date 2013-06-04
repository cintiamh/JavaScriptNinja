window.onload = function() {
    test("How closures work", function() {
        var outerValue = 'ninja';
        var later;
        function outerFunction() {
            var innerValue = 'samurai';
            function innerFunction(paramValue) {
                assert(outerValue, "Inner can see the ninja.");
                assert(innerValue, "Inner can see the samurai.");
                assert(paramValue, "Inner can see the wakizashi.");
                assert(tooLate, "Inner can see the ronin.");
            }
            later = innerFunction;
        }
        assert(!tooLate, "Outer can't see the ronin.");
        var tooLate = 'ronin';
        outerFunction();
        later('wakizashi');
    });

    test("Putting closures to work", function() {
        function Ninja() {
            var feints = 0;
            this.getFeints = function() {
                return feints;
            };
            this.feint = function() {
                feints++;
            };
        }
        var ninja = new Ninja();
        ninja.feint();
        assert(ninja.getFeints() == 1, "We're able to access the internal feint count.");
        assert(ninja.feints === undefined, "And the private data is inaccessible to us.");


    });
};
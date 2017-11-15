(function () {
  function timecode() {
    return function (seconds) {
      //Add logic that converts seconds (an integer value) to a formatted time - a STRING with the format M:SS
      var seconds = Number.parseFloat(seconds);

      //checks if time is NaN
      if (Number.isNaN(seconds)) {
        return '-:--';
      }

      var wholeSeconds = Math.floor(seconds);
      var minutes = Math.floor(wholeSeconds / 60);
      var remainingSeconds = wholeSeconds % 60;

      var output = minutes + ':';

      if (remainingSeconds < 10) {
        output += '0';
      }
      //timeInSeconds -> changed to -> seconds
      output += remainingSeconds;
      return output;
    };
  }

  angular
    .module('blocJams')
    .filter('timecode', timecode);
})();
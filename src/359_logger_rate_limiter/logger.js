/**
 * Initialize your data structure here.
 */
var Logger = function() {
    /*
     * messages = { message: timestamp, ... }
     */
    this.messages = {};
    this.TIME_THRESHOLD = 10
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
      If this method returns false, the message will not be printed.
      The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if ( !this.messages.hasOwnProperty(message) ) {
	    // add to map & return true
	    this.messages[message] = timestamp;
            return true;
        }
        
    if (
            this.messages.hasOwnProperty(message) && 
            timestamp - this.messages[message] >= this.TIME_THRESHOLD
        ) {
	    // update map & return true
            this.messages[message] = timestamp;
            return true;
        }
    
    return false
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = Object.create(Logger).createNew()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

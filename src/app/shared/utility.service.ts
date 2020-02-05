import { Injectable } from '@angular/core';

// import { Logger } from './logger.service';
// const log = new Logger('UtilityService');

/**
 * Provides a base for common utility requirements
 */

@Injectable()
export class UtilityService {  
  i: any;
  paymentIntervalID: number;

  constructor () {}

  copyInputMessage(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  formatMoney(amount, decimalCount = 0, decimal = ".", thousands = ",") {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
  
      const negativeSign = amount < 0 ? "-" : "";
  
      this.i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
      let j = (this.i.length > 3) ? this.i.length % 3 : 0;
  
      return negativeSign + (j ? this.i.substr(0, j) + thousands : '') + this.i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - this.i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
      // log.error(e)
    }
  };

  replaceAll(inSource, inToReplace, inReplaceWith) {
    var output="";
    var firstReplaceCompareCharacter = inToReplace.charAt(0);
    var sourceLength = inSource.length;
    var replaceLengthMinusOne = inToReplace.length - 1;
    for(var i = 0; i < sourceLength; i++){
        var currentCharacter = inSource.charAt(i);
        var compareIndex = i;
        var replaceIndex = 0;
        var sourceCompareCharacter = currentCharacter;
        var replaceCompareCharacter = firstReplaceCompareCharacter;
        while(true){
            if(sourceCompareCharacter != replaceCompareCharacter){
            output += currentCharacter;
            break;
        }
        if(replaceIndex >= replaceLengthMinusOne) {
            i+=replaceLengthMinusOne;
            output += inReplaceWith;
            //was a match
            break;
        }
        compareIndex++; replaceIndex++;
        if(i >= sourceLength){
            // not a match
            break;
        }
        sourceCompareCharacter = inSource.charAt(compareIndex)
            replaceCompareCharacter = inToReplace.charAt(replaceIndex);
        }   
        replaceCompareCharacter += currentCharacter;
    }
    return output;
  }
      
  /**
   * Remove root element from a stringified elements
   * @param obj The email parameters.
   * @return stringified elements without the root element.
   */
  removeRootElement (obj) {
    var numKeys = 0,
        rootKey;
    
    // Iterate through keys in object and confirm there's only a single root
    for (var key in obj) {
        
        // Skip built in
        if (!obj.hasOwnProperty(key)) continue;
        
        // Assign current key as root
        rootKey = key;
        
        // Increment key counter
        numKeys++;
        
        // Stop if there's more than one key
        if (numKeys === 2) { break; }
    }
    
    // If there is a single root, transfer its contents (if applicable) to
    // a new object to return
    if (numKeys === 1) {
        var newObj = {},
            rootObj = obj[rootKey];
        
        if (typeof rootObj === "object") {
            for (var key in rootObj) {                
                if (rootObj.hasOwnProperty(key)) {
                    newObj[key] = rootObj[key];
                }
            }
            
            return newObj;
        }
    }
    
    return obj;
  };
}
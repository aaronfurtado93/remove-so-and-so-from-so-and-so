var updateResult,
readCaractersAndCompare,
extractStrings;

(function () {

	updateResult = function () {
		var originalText,
		removalText,
		finalText,
		originalString,
		removalString,
		removalStrings,
		finalString,
		i;

		originalText = document.getElementById("originalText");
		removalText = document.getElementById("removalText");
		finalText = document.getElementById("finalText");

		originalString = originalText.value;
		removalString = removalText.value;

		removalStrings = extractStrings (removalString);

		finalString = "";

		for (var r = 0; r < removalStrings.length; r++) {
			if (removalStrings[r].length === 0) {
				finalString = originalString;
			} else if (removalStrings[r].length === 1) {
				for (i = 0; i < originalString.length; i++) {
					if (originalString.charAt(i) !== removalStrings[r].charAt(0)) {
						finalString += originalString.charAt(i);
					}
				}

			} else if (removalStrings[r].length > 1) {
				i = 0;

				do {
					if (readCaractersAndCompare(originalString, i, i + removalStrings[r].length - 1, removalStrings[r])) {
						i += removalStrings[r].length;
					} else {
						finalString += originalString.charAt(i);
						i++;
					}
				} while (i < originalString.length);
			}

			if (r < removalStrings.length - 1) {
				originalString = finalString;
				finalString = "";
			}
			


		}

		

		finalText.value = finalString;
		
	};

	readCaractersAndCompare = function (originalString, startCharacter, endCharacter, comarisionString) {
		var extractedString = "";

		if (endCharacter < originalString.length) {
			for (var i = startCharacter; i <= endCharacter; i++) {
				extractedString += originalString.charAt(i);
			}

			if (extractedString === comarisionString) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	extractStrings = function (removalStrings) {
		var stringsArray = [],
		strTemp = "";

		for (var i = 0; i < removalStrings.length; i++) {
			if (removalStrings.charAt(i) === ",") {
				stringsArray.push(strTemp);
				strTemp = ""
			} else {
				strTemp += removalStrings.charAt(i)
			}

			
		}

		stringsArray.push(strTemp);

		return stringsArray;

	}
	

}());	
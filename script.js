/* 1.	Create an array called ages that contains the following values:
    3, 9, 23, 64, 2, 8, 28, 93. */

        let ages = [3, 9, 23, 64, 2, 8, 28, 93];

        console.log (ages);

/*1a.	Programmatically subtract the value of the first element in the array
        from the value in the last element of the array 
•	Do not use numbers to reference the last element, find it programmatically, 
•	ages[7] – ages[0] is not allowed! */

        console.log(ages[ages.length-1] - ages[0]);

/*1b.	Add a new age to your array and repeat the step above to ensure it
        is dynamic. (works for arrays of different lengths). */

        ages.push(21);
        
        console.log(ages);
        
        console.log(ages[ages.length-1] - ages[0]);

/*1c.	Use a loop to iterate through the array and calculate the average age. */
        let total = 0;
        let avg = 0;
   
        for(let i = 0; i < ages.length; i++) {
            total += ages[i];  
        }
        avg = total / ages.length;
        
        console.log(avg);

/*2.	Create an array called names that contains the following values: ‘Sam’,
        ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.*/

        let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
        
        console.log(names);

/*2a.	Use a loop to iterate through the array and calculate the average number
        of letters per name. */

        let namesTotal = 0;
        let namesAvg = 0;
        for (let i =0; i < names.length; i++) {
            namesTotal += names[i].length
        }
        namesAvg = namesTotal / names.length;
        
        console.log(namesAvg);

/*2b.	Use a loop to iterate through the array again and concatenate all
        the names together, separated by spaces. */

        let result = "";
        
        for (let i =0; i < names.length; i++) {
            result += names[i] + " ";
        }
        
        console.log(result);

/*3.	How do you access the last element of any array?*/

        //arr[arr.length - 1] -> counting starts at 0

/*4.	How do you access the first element of any array?*/

        //arr[0];

/*5.	Create a new array called nameLengths. Write a loop to iterate over
        the previously created names array and add the length of each name
        to the nameLengths array.
            For example:
                namesArray = ["Kelly", "Sam", "Kate"] //given this array
                nameLengths = [5, 3, 4] //create this new array*/
        let newNames = ["Kelly", "Sam", "Kate"];
        let nameLengths = [];

        for (let i = 0; i < newNames.length; i++) {
            nameLengths.push(newNames[i].length);
        }
        console.log(namelengths);

/*6.	Write a loop to iterate over the nameLengths array and calculate the sum
        of all the elements in the array. */

        let sum = 0;
        for (let x = nameLength; x >= 0; x--){
            sum += nameLengths[x];
        }
        console.log(sum);

/*7.	Write a function that takes two parameters, word and n, as arguments and
        returns the word concatenated to itself n number of times. (i.e. if I
        pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).*/

        function wordRepeat(word, n) {
            let count = 1;
            let result = "";
            while(count <= n){
                result += word;
                count++;
            }
            return result;
        }
        console.log(wordRepeat("hello", 4));

/*8.	Write a function that takes two parameters, firstName and lastName,
        and returns a full name.
        •	The full name should be the first and the last name separated
            by a space.*/
        
        function fullName (firstName, lastName) {
            return fullName + " " + lastName;
        }
        console.log(fullName(Sandy, Cheeks));

/*9.	Write a function that takes an array of numbers and returns true
        if the sum of all the numbers in the array is greater than 100.*/

        function moreThan100 (ages) {
            for (let i = 0; i < ages.length; i++){
                numTotal += ages[i];
            }
            return numTotal > 100
        }
        console.log (moreThan100(ages));

/*10.	Write a function that takes an array of numbers and returns the
        average of all the elements in the array.*/
       
        function avgAge (ages) {
            let numTotal = 0;
            let numAvg = 0;
            for (let i = 0; i < ages.length; i++) {
                numTotal += ages[i];
            }
                return numAvg = numTotal / ages.length;
        }
        console.log (avgAge(ages));

/*11.	Write a function that takes two arrays of numbers and returns true
        if the average of the elements in the first array is greater than
        the average of the elements in the second array.*/
        
        let arr1 = [1, 5, 10, 15, 20, 25]
        let arr2 = [1, 2, 4, 8, 16, 32]

        function greaterThan (arr1, arr2) {
            let total1 = 0;
            let avg1 = 0;
            for (let i = 0; i < arr1.length; i++) {
                total1 += arr1[i];
            }
            avg1 = total1 / arr1.length;

            let total2 = 0;
            let avg2 = 0;
            for (let i = 0; i < arr2.length; i++) {
                total2 += arr2[i];
            }
            avg2 = total2 / arr2.length;

            return avg1 > avg2;
            }

            console.log (greaterThan(arr1, arr2));

/*12.	Write a function called willBuyDrink that takes a boolean isHotOutside,
        and a number moneyInPocket, and returns true if it is hot outside and
        if moneyInPocket is greater than 10.50.*/

        function willBuyDrink (isHotOutside, moneyInPocket) {
            if (isHotOutside = true && moneyInPocket > 10.50) {
                return true;
            }
        }
        console.log (willBuyDrink(true, 22.05));

/*13.	Create a function of your own that solves a problem. 
•	In comments, write what the function does and why you created it.

This function will tell the user whether to take a walk or stay inside.
I created this function since I enjoy walking and the weather hasn't been
nice lately.
*/

        function willTakeWalk (isWarmOutside, isClearWeather) {
            if (isWarmOutside == true && isClearWeather == true) {
                return "It's a nice day for a walk!";
            } else {
                return "Let's stay inside today!";
            }
        }
        console.log (willTakeWalk(true, false))
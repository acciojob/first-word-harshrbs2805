function firstWord(s) {

	let ans=s.trim().split(" ")
    let myword=ans[0]
    return myword
  // your code here
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));

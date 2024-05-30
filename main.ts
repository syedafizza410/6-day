/* Q16 More Guests: You've found a bigger dinner table, so there's room for more guests.*/

let guestslist : string[] = ["Huda" , "Bakhtawar" , "Saba" , "Hina"];
console.log("Good news! I found a bigger dinner table!");

guestslist.unshift("Amina");
guestslist.splice(guestslist.length / 2, 0, "Zinat");
guestslist.push("Daniya");

guestslist.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

/* Q17  Shrinking Guest List: Unfortunately, 
your new table won’t arrive in time, and you can only invite two guests.*/

console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two guests to dinner with me");

while(guestslist.length > 2){
     let removedGuest = guestslist.pop();
     console.log(`Sorry, ${removedGuest} I cant invite you to dinner`);
}

console.log("Invitations to the last 2Guests");
guestslist.forEach(lasttwo => console.log(`Lucky ${lasttwo}, you are still invited to dinner`));

guestslist.pop();
guestslist.pop();

/* Q18 Seeing the World: Think of at least five places you’d like to visit.*/

let countriesToVisit: string[] = ["China", "New Zealand", "Dermark", "Canada", "USA"];
console.log("Orginal order:", countriesToVisit);

console.log("Alphabetical order:", [...countriesToVisit].sort());

console.log("Still in orginal order:", countriesToVisit);

console.log("Reverse order:", [...countriesToVisit].reverse());

console.log("Still in orginal order:", countriesToVisit);

console.log("Orginal array reversed:", [...countriesToVisit].reverse());

console.log("Back to orginal order:", countriesToVisit.reverse());

console.log("Sorted in Alphabetical order:", countriesToVisit.sort());

console.log("Orginal array reversed:", [...countriesToVisit].reverse());

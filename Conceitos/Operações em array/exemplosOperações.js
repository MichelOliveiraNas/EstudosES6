
/*---------FIND--------*/

const arr = [1, 3, 4, 5, 8, 10];

const find = arr.find(function(item) {
    return item === 2;
});

console.log(find);


/*--------FILTER--------*/

const arr = [1, 3, 4, 5, 8, 10];

const filter = arr.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter)


/*---------REDUCE---------*/

const arr = [1, 3, 4, 5, 8, 9];

const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log(sum)


/*---------MAP--------*/

const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item) { // MAP PERCORRE TODO VETOR E RETORNA UMA AÇÃO PRA CADA ITEM.
    return item * 2;
});

console.log(newArr);
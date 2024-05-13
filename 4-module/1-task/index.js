function makeFriendsList(friends) {
  let ul = document.createElement("ul"); //тут я создал элемент ul

  // перебрал массив и для каждого друга создал li с текстом firstName и lastName добавил li в  гд
  friends.forEach(function (friend) {
    let li = document.createElement("li");
    li.textContent = friend.firstName + " " + friend.lastName;
    ul.appendChild(li);
  });

  return ul;
}

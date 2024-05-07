function namify(users) {
  let result = [];
  for (let user = 0; user < users.length; user++) {
    result.push(users[user].name);
  }
  return result;
}

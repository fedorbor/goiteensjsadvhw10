const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

const logger1 = time => console.log(`Вирішено після ${time}ms`);

delay(2000).then(logger1); // Вирішено через 2000 мс
delay(1000).then(logger1); // Вирішено через 1000 мс
delay(1500).then(logger1); // Вирішено через 1500 мс

const users = [
 
  { name: 'Mango', active: true },
   
  { name: 'Poly', active: false },
   
  { name: 'Ajax', active: true },
   
  { name: 'Lux', active: false },
   
  ];
  
const toggleUserState = (allUsers, userName) => {
  return new Promise(resolve => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user
    );

    resolve(updatedUsers);
  });
};

const logger2 = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(logger2);
toggleUserState(users, 'Lux').then(logger2);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = transaction => {
  const delay = randomIntegerFromInterval(200, 500);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        resolve({ id: transaction.id, time: delay });
      } else {
        reject(transaction.id);
      }
    }, delay);
  });
};

const logSuccess = ({ id, time }) => {
  console.log(`Транзакція ${id} оброблена за ${time}ms`);
};

const logError = id => {
  console.warn(`Помилка обробки транзакції ${id}. Спробуйте пізніше.`);
};

makeTransaction({ id: 70, сума: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, сума: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, сума: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, сума: 100 })
  .then(logSuccess)
  .catch(logError);

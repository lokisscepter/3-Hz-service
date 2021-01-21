const MySql = require('mysql');
const Promise = require('bluebird');

const connection = MySql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student'
})

const db = Promise.promisifyAll(connection, { multiArgs: true });


beforeEach(() => {
  return db.connectAsync()
    .then(result => {
      console.log('MySQL: connected as id' + db.threadId);
    })
    .catch(err => {
      console.log(err);
    });
})

afterEach(() => {
  return db.endAsync();
})

test('sanity check', () => {
  expect(1).toBe(1);
});


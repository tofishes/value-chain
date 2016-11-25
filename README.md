# value-chain
获取数据链的简便方法，可以容错及设置默认值。

## install

```
npm install value-chain --save
```

## api:

const valueChain = require('value-chain');
// common use:
valueChain(data, chain, defaultValue);
// set data:
valueChain.set(data);
// after set data, you can
data.getValue(chain, defaultValue);
data.getList(chain);
data.getMap(chain);

## usage:

```
const valueChain = require('value-chain');

const data = {
  'user': {
    'name': 'Bodhi',
    'profile': {
      'gender': 1,
      'features': [1, 2]
    }
  }
};
valueChain(data, 'user.name'); // get data.user.name
valueChain(data, 'user.gender', 1); // get default 1

// when use set
valueChain.set(data);

// after set you can use:
data.getValue('user.name', null); // default null
data.getList('user.gender'); // default Array
data.getMap('user.gender'); // default {}
```
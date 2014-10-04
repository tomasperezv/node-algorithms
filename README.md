Algorithms
============
A node.js library to implement algorithms providing a semantic way.

Used to solve project-euler and topcoder problems.

![Project Euler](https://projecteuler.net/profile/tomasperezv.png)


```javascript
    var testAlgorithm = new Algorithm();
  
    testAlgorithm.prototype.solve = function(limit, multipleOf) {
    
      var multiples = [];
  
      this.iterate({
        start: 1,
        limit: limit
       }).onEach(function(current) {
        if (current.isMultiple(multipleOf)) {
          multiples.push(current.value);
        }
      });
    
    }
    ...
    ...
    console.log(new testAlgorithm().solve(1000, [3, 5]).toString());
```

### Run the problems

```shell
./problems/runner.js
Counting summations - total: 175, time: 0.69 s => Check Failed.
```

### Push notifications when problem execution ends

Optionally problems runner supports an extra parameter `p` that will send a push notification using [Pushover](https://pushover.net/). For that reason the package `node-pushover-alerts` is included in the package.json. You will need to have a `./config/pushover.json` file, containing your user and token for authentication.

```shell
./problems/runner.js -p
Counting summations - total: 175, time: 0.69 s => Check Failed.
Message sent: {"status":1,"request":"c4efe36f51adf23781e90c33efb96249"}
```

Example of `./config/pushover.json`

```json
{
        "user": "",
        "token": ""
}
```

### Dependencies  
	big-integer: an arbitrary-length integer library for Javascript. 
	https://github.com/peterolson/BigInteger.js

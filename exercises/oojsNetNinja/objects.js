const userOne = {
    email: "rooseveltblow@gmail.com",
    name: 'Roosevelt',
    login(){
        console.log(`${this.email} has logged in.`);
    },
    logout(){
        console.log(`${this.email} has logged out.`);
    }
}

const prop = 'name';

// userOne.email = 'hashbrownz@breakfastcity.com';
// userOne['email'] = 'hashbrownz@breakfastcity.com';
// userOne[prop] = 'Hashbrownz';

// console.log(userOne);

userOne.age = 25;
userOne.logInfo = function(){
    console.log(this.name, this.age, this.email);
};

userOne.logInfo();
userOne.login();
userOne.logout();
class Car {
    constructor(owner) {
      this.brand = 'Tesla'
      this.model = 'Model X'
      this.owner = owner
    //   this.drive = this.drive.bind(this) //why is THIS so confusing
    }
  
    drive = () => {
      console.log(`${this.owner.name} is driving his ${this.brand}`)
    }
  
    doSomethingTwice = (action) => {
      for (let i = 0; i < 2; i++) {
         action()
      }
    }
  }
  
  const mycar = new Car({
    name: 'Nicholas',
    age: 21,
    gender: 'male'
  })
  
  mycar.doSomethingTwice(mycar.drive)

  
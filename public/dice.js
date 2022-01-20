const apiKey = "142zGBhgKm7f23zC99rbHqOnhLGsLKdyJhM4jGjec"; // paste from croquet.io/keys
const appId = "com.example.myapp";
const name = Croquet.App.autoSession();
const password = Croquet.App.autoPassword();

class Dice extends Croquet.Model {
  init() {
    this.roll = 1;
    this.subscribe("dice", "roll", this.rollDice);
  }

  rollDice() {
    this.roll = Math.floor(Math.random() * 6) + 1;
    this.publish("dice", "changed");
  }
}
Dice.register("Dice");

class Display extends Croquet.View {
  constructor(model) {
    super(model);
    diceRoll.textContent = model.roll;

    rollButton.onclick = (event) => {
      this.publish("dice", "roll");
    };

    this.subscribe("dice", "changed", () => {
      diceRoll.textContent = model.roll;
    });
  }
}

Croquet.Session.join({apiKey, appId, name, password, model: Dice, view: Display});

Croquet.App.makeWidgetDock();


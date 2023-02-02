const { Food } = require('./food');
const { Item } = require('./item');


class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0; i < this.items.length; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {

        // Fill this in
        const itemIndex = this.currentRoom.items.findIndex(
            item => item.name === itemName
        )
        this.items.push(this.currentRoom.items[itemIndex]);
        this.currentRoom.items.splice(itemIndex, 1);
    }

    dropItem(itemName) {

        // Fill this in
        const itemIndex = this.items.findIndex(item => item.name === itemName)
        this.currentRoom.items.push(this.items[itemIndex])
        this.items.splice(itemIndex, 1);

    }

    eatItem(itemName) {
        // Fill this in
        let item = this.getItemByName(itemName)
        if (item instanceof Food) {
            let itemIndex = this.items.indexOf(item)
            this.items.splice(itemIndex, 1)
        }
    }

    getItemByName(name) {
        // Fill this in
        return this.items.find(item => item.name === name);
    }
}

module.exports = {
    Player,
};

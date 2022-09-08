var emptyShip = new Ship(12, 14);

function Ship(draft, crew) {
    this.draft = draft + crew * 1.5;
    this.crew = crew;

    this.draft > 20 ? console.log(`Banyak nih muatan kapalnya (${this.draft} muatan)`) 
    : console.log(`Lebih banyak muatan orangnya (${this.crew} orang)`)
}

module.exports = emptyShip;
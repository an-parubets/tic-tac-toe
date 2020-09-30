export default class GamePair {
    constructor(id) {
        this.id = id;
        this.players = [];
        this.playingField = [];

        this.initPlayingField();
    }

    set player (player) {
        if (this.players.length >= 2) {
            return;
        }
        this.players.push(player);
    }

    initPlayingField() {
        for (let i = 0; i < 3; i++) {
            this.playingField[i] = [];
            for (let j = 0; j < 3; j++) {
                this.playingField[i][j] = [];
                for (let z = 0; z < 3; z++) {
                    this.playingField[i][j][z] = null;
                }
            }
        }
    }

    fillPlayingCell(x, y, z, value) {
        if (this.playingField[x][y][z]) {
            throw new Error('Cell is filled');
        }
        this.playingField[x][y][z] = value;
    }
}

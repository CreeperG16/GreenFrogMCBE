export = DefaultWorld;
declare class DefaultWorld {
    name: string;
    cords: {
        x: any;
        y: any;
        z: any;
    };
    chunkRadius: number;
    /**
     * Sets the world name
     * @param {String} name
     */
    setName(name: string): void;
    /**
     * Returns the world name
     * @returns The world name
     */
    getName(): string;
    /**
     * Returns the players that are in the world right now
     * @returns Players in world
     */
    getPlayersInWorld(): {};
    /**
     * Sets the coordinates for the world spawn
     * @param {Float} x
     * @param {Float} y
     * @param {Float} z
     */
    setSpawnCoordinates(x: Float, y: Float, z: Float): void;
    /**
     * Returns the spawn coordinates
     */
    getSpawnCoordinates(): {
        x: any;
        y: any;
        z: any;
    };
    /**
     * Sets the chunk radius
     * @param {Number} radius
     */
    setChunkRadius(radius: number): void;
    /**
     * Returns the chunk radius
     */
    getChunkRadius(): number;
    /**
     * Places block at specified coordinates
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @param {Number} id
     */
    placeBlock(x: number, y: number, z: number, id: number): void;
    /**
     * Ticks the world
     * @private
     */
    private tick;
    toJSON(): {
        name: string;
        chunk_radius: number;
        spawn_coordinates: {
            x: any;
            y: any;
            z: any;
        };
    };
}

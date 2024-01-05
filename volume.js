/**
 * NiivueVolume class provides access to volume and subvolume data in Niivue.js.
 */
class NiivueSubVolume {
    /**
     * Function to get a specific subvolume from the volume data.
     * @param {number} x1 - The starting x-coordinate.
     * @param {number} x2 - The ending x-coordinate.
     * @param {number} y1 - The starting y-coordinate.
     * @param {number} y2 - The ending y-coordinate.
     * @param {number} z1 - The starting z-coordinate.
     * @param {number} z2 - The ending z-coordinate.
     * @returns {Array} The subvolume data within the specified coordinates.
     */
    get_volume_data(x1, x2, y1, y2, z1, z2) {
        
    }

    /**
     * Function to get label data for a specific subvolume.
    * @param x1 {int, null} the bbox start x coordinate, if null, set to 0
    * @param x2 {int, null} the bbox end x coordinate, if null, set to volume dimension
    * @param y1 {int, null} the bbox start y coordinate, if null, set to 0
    * @param y2 {int, null} the bbox end y coordinate, if null, set to volume dimension
    * @param z1 {int, null} the bbox start z coordinate, if null, set to 0
    * @param z2 {int, null} the bbox end z coordinate, if null, set to volume dimension
     * @returns {Array} The label data for the specified subvolume.
     */
    get_label_data(x1, x2, y1, y2, z1, z2) {
        
    }
}
